import { useState, useEffect, useMemo } from 'react';
import { OfferCard } from './components/OfferCard';
import { FilterPanel } from './components/FilterPanel';
import { SortPanel } from './components/SortPanel';
import { ConfirmationModal } from './components/ConfirmationModal';
import { BottomNav } from './components/BottomNav';
import { Header } from './components/Header';
import { LoadingScreen } from './components/LoadingScreen';
import { NoOffersScreen } from './components/NoOffersScreen';
import { TripScreen } from './components/TripScreen';
import { StatsScreen } from './components/StatsScreen';
import { MoreScreen } from './components/MoreScreen';
import { MapScreen } from './components/MapScreen';
import type { Offer, FilterState, SortOption } from './types';

// Mock data for offers (seed with more volume)
const generateOffers = (): Offer[] => [
  {
    id: '1',
    platform: 'Uber',
    type: 'rideshare',
    payout: 24.5,
    timeRemaining: 45,
    estimatedTime: 15,
    distance: 9.5,
    pickup: '200 Bay St, Toronto',
    dropoff: '220 Yonge St, Toronto',
    location: { lat: 43.65, lng: -79.38 },
  },
  {
    id: '2',
    platform: 'DoorDash',
    type: 'delivery',
    payout: 18.75,
    timeRemaining: 38,
    estimatedTime: 12,
    distance: 7.2,
    pickup: '350 King St W, Toronto',
    dropoff: '100 Queen St E, Toronto',
    location: { lat: 43.66, lng: -79.39 },
  },
  {
    id: '3',
    platform: 'SkipTheDishes',
    type: 'delivery',
    payout: 22.0,
    timeRemaining: 52,
    estimatedTime: 18,
    distance: 11.3,
    pickup: '500 Bloor St W, Toronto',
    dropoff: '75 Spadina Ave, Toronto',
    location: { lat: 43.64, lng: -79.37 },
  },
  {
    id: '4',
    platform: 'Lyft',
    type: 'rideshare',
    payout: 31.25,
    timeRemaining: 29,
    estimatedTime: 22,
    distance: 14.8,
    pickup: '1 Dundas St E, Toronto',
    dropoff: '888 Yonge St, Toronto',
    location: { lat: 43.67, lng: -79.4 },
  },
  {
    id: '5',
    platform: 'Uber',
    type: 'rideshare',
    payout: 27.4,
    timeRemaining: 40,
    estimatedTime: 17,
    distance: 10.1,
    pickup: '25 York St, Toronto',
    dropoff: '150 College St, Toronto',
    location: { lat: 43.64, lng: -79.38 },
  },
  {
    id: '6',
    platform: 'Lyft',
    type: 'rideshare',
    payout: 19.9,
    timeRemaining: 47,
    estimatedTime: 13,
    distance: 8.4,
    pickup: '99 Harbour Sq, Toronto',
    dropoff: '401 Richmond St W, Toronto',
    location: { lat: 43.64, lng: -79.39 },
  },
  {
    id: '7',
    platform: 'DoorDash',
    type: 'delivery',
    payout: 16.3,
    timeRemaining: 44,
    estimatedTime: 11,
    distance: 6.8,
    pickup: '123 Spadina Ave, Toronto',
    dropoff: '77 Bloor St W, Toronto',
    location: { lat: 43.65, lng: -79.4 },
  },
  {
    id: '8',
    platform: 'SkipTheDishes',
    type: 'delivery',
    payout: 20.1,
    timeRemaining: 36,
    estimatedTime: 14,
    distance: 9.9,
    pickup: '10 Bay St, Toronto',
    dropoff: '250 Front St W, Toronto',
    location: { lat: 43.64, lng: -79.38 },
  },
];

export default function App() {
  const [offers, setOffers] = useState<Offer[]>(generateOffers());
  const [filteredOffers, setFilteredOffers] = useState<Offer[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [activeTab, setActiveTab] = useState('offers');
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [activeTrip, setActiveTrip] = useState<{
    riderName: string;
    pickupAddress: string;
    dropoffAddress: string;
    estimatedTime: number;
    distance: number;
  } | null>(null);
  
  const [filters, setFilters] = useState<FilterState>({
    platforms: {
      Uber: true,
      Lyft: false,
      DoorDash: false,
      SkipTheDishes: true
    },
    offerTypes: {
      ride: true,
      delivery: true
    },
    radiusFromLocation: 25,
    distanceFromTrip: 30,
    radiusMin: 5,
    radiusMax: 50,
    distanceMin: 5,
    distanceMax: 50
  });

  // Update countdown timers every second
  useEffect(() => {
    const timer = setInterval(() => {
      setOffers(prevOffers => {
        const updated = prevOffers.map(offer => {
          const newTimeRemaining = offer.timeRemaining - 1;
          if (newTimeRemaining <= 0) {
            return null; // Remove expired offers
          }
          return { ...offer, timeRemaining: newTimeRemaining };
        }).filter(Boolean) as Offer[];
        
        // Add new offers with rate based on inventory:
        // <=3 offers: ~1 every 3s (spawnChance ≈ 0.33 per tick)
        // otherwise (while <10): ~1 every 8s (spawnChance ≈ 0.125 per tick)
        if (updated.length < 10) {
          const spawnChance = updated.length <= 3 ? 1 / 3 : 1 / 8;
          if (Math.random() < spawnChance) {
            const newOffer = generateNewOffer();
            if (newOffer) updated.push(newOffer);
          }
        }
        
        return updated;
      });
      setLastUpdate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Apply filters and sort whenever they change
  useEffect(() => {
    // Only show loading on initial mount (skip it)
    if (isInitialLoad) {
      setIsInitialLoad(false);
      
      // Just apply filters without loading screen on first load
      let filtered = offers.filter(offer => {
        if (!filters.platforms[offer.platform]) return false;
        const offerType = offer.type === 'rideshare' ? 'ride' : 'delivery';
        if (!filters.offerTypes[offerType]) return false;
        if (offer.distance > filters.distanceFromTrip) return false;
        return true;
      });
      
      const sorted = sortOffers(filtered, sortOption);
      setFilteredOffers(sorted);
      return;
    }

    let filtered = offers.filter(offer => {
      // Platform filter
      if (!filters.platforms[offer.platform]) return false;
      
      // Offer type filter
      const offerType = offer.type === 'rideshare' ? 'ride' : 'delivery';
      if (!filters.offerTypes[offerType]) return false;
      
      // Distance filter
      if (offer.distance > filters.distanceFromTrip) return false;
      
      return true;
    });
    
    // Apply sorting
    const sorted = sortOffers(filtered, sortOption);
    setFilteredOffers(sorted);
  }, [offers, filters, sortOption, isInitialLoad]);

  const sortOffers = (offers: Offer[], sort: SortOption): Offer[] => {
    const sorted = [...offers];
    
    switch (sort) {
      case 'highestPay':
        return sorted.sort((a, b) => b.payout - a.payout);
      case 'lowestPay':
        return sorted.sort((a, b) => a.payout - b.payout);
      case 'shortestDistance':
        return sorted.sort((a, b) => a.distance - b.distance);
      case 'longestDistance':
        return sorted.sort((a, b) => b.distance - a.distance);
      case 'fastestTime':
        return sorted.sort((a, b) => a.estimatedTime - b.estimatedTime);
      case 'longestTime':
        return sorted.sort((a, b) => b.estimatedTime - a.estimatedTime);
      case 'expiringSoon':
        return sorted.sort((a, b) => a.timeRemaining - b.timeRemaining);
      case 'default':
      default:
        return sorted;
    }
  };

  const generateNewOffer = (): Offer | null => {
    const platforms = ['Uber', 'Lyft', 'DoorDash', 'SkipTheDishes'] as const;
    const platform = platforms[Math.floor(Math.random() * platforms.length)];
    const type: Offer['type'] =
      platform === 'Uber' || platform === 'Lyft' ? 'rideshare' : 'delivery';
    
    const locations = [
      { pickup: '123 Main St, Toronto', dropoff: '456 Oak Ave, Toronto' },
      { pickup: '789 Pine Rd, Toronto', dropoff: '321 Elm St, Toronto' },
      { pickup: '555 Maple Dr, Toronto', dropoff: '888 Cedar Ln, Toronto' },
    ];
    
    const location = locations[Math.floor(Math.random() * locations.length)];
    
    return {
      id: Date.now().toString(),
      platform,
      type,
      payout: 15 + Math.random() * 25,
      timeRemaining: 30 + Math.floor(Math.random() * 30),
      estimatedTime: 10 + Math.floor(Math.random() * 20),
      distance: 5 + Math.random() * 15,
      pickup: location.pickup,
      dropoff: location.dropoff,
      location: { lat: 43.65 + (Math.random() - 0.5) * 0.1, lng: -79.38 + (Math.random() - 0.5) * 0.1 }
    };
  };

  const handleAccept = (offer: Offer) => {
    setSelectedOffer(offer);
    setShowConfirmation(true);
  };

  const handleDecline = (offerId: string) => {
    setOffers((prev) => prev.filter((o) => o.id !== offerId));
  };

  const handleConfirmAccept = () => {
    if (selectedOffer) {
      setOffers((prev) => prev.filter((o) => o.id !== selectedOffer.id));
      setShowConfirmation(false);
      
      // Start the trip
      setActiveTrip({
        riderName: 'Sofiia',
        pickupAddress: selectedOffer.pickup,
        dropoffAddress: selectedOffer.dropoff,
        estimatedTime: selectedOffer.estimatedTime,
        distance: selectedOffer.distance
      });
      
      setActiveTab('map');
      setSelectedOffer(null);
    }
  };

  const handleTripComplete = () => {
    setActiveTrip(null);
    setActiveTab('offers');
  };

  const handleTripCancelled = () => {
    setActiveTrip(null);
    setActiveTab('offers');
  };

  const handleCancelConfirmation = () => {
    setShowConfirmation(false);
    setSelectedOffer(null);
  };

  const handleApplyFilters = (newFilters: FilterState) => {
    setFilters(newFilters);
    setShowFilters(false);
  };

  const handleResetFilters = () => {
    setFilters({
      platforms: {
        Uber: true,
        Lyft: true,
        DoorDash: true,
        SkipTheDishes: true
      },
      offerTypes: {
        ride: true,
        delivery: true
      },
      radiusFromLocation: 25,
      distanceFromTrip: 30,
      radiusMin: 5,
      radiusMax: 50,
      distanceMin: 5,
      distanceMax: 50
    });
  };

  const handleApplySort = (newSort: SortOption) => {
    setSortOption(newSort);
  };

  const handleResetSort = () => {
    setSortOption('default');
  };

  const handleRetry = () => {
    setIsLoading(true);
    setTimeout(() => {
      // Generate new offers
      const newOffers = generateOffers();
      setOffers(newOffers);
      setIsLoading(false);
    }, 2000);
  };

  const handleAdjustFilters = () => {
    setShowFilters(true);
  };

  const getTimeSinceUpdate = () => {
    const seconds = Math.floor((new Date().getTime() - lastUpdate.getTime()) / 1000);
    if (seconds < 5) return 'just now';
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    return `${minutes}m ago`;
  };

  const offerMetrics = useMemo(() => {
    if (filteredOffers.length === 0) {
      return {
        total: 0,
        avgPayout: 0,
        avgDistance: 0,
        rides: 0,
        deliveries: 0,
        soonestExpiry: null as number | null,
        topPayout: null as Offer | null,
      };
    }

    const total = filteredOffers.length;
    const payoutTotal = filteredOffers.reduce((sum, offer) => sum + offer.payout, 0);
    const distanceTotal = filteredOffers.reduce((sum, offer) => sum + offer.distance, 0);
    const rides = filteredOffers.filter((offer) => offer.type === 'rideshare').length;
    const deliveries = total - rides;
    const soonestExpiry = Math.min(...filteredOffers.map((offer) => offer.timeRemaining));
    const topPayout = filteredOffers.reduce(
      (highest, current) => (current.payout > highest.payout ? current : highest),
      filteredOffers[0]
    );

    return {
      total,
      avgPayout: payoutTotal / total,
      avgDistance: distanceTotal / total,
      rides,
      deliveries,
      soonestExpiry,
      topPayout,
    };
  }, [filteredOffers]);

  const renderOffersList = () => (
    <div className="flex-1 overflow-y-auto pb-24 px-4 pt-4">
      {filteredOffers.length === 0 ? (
        <NoOffersScreen 
          type={offers.length === 0 ? 'empty' : 'filtered'}
          onRetry={handleRetry}
          onAdjustFilters={handleAdjustFilters}
        />
      ) : (
        <div className="space-y-4">
          {filteredOffers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              onAccept={handleAccept}
              onDecline={handleDecline}
            />
          ))}
        </div>
      )}
    </div>
  );

  const renderHomeView = () => {
    const heroOffer = offerMetrics.topPayout;
    const remainingOffers = heroOffer
      ? filteredOffers.filter((offer) => offer.id !== heroOffer.id)
      : filteredOffers;

    return (
      <div className="flex-1 overflow-y-auto pb-24 px-4 pt-4 space-y-4">
        {heroOffer ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Top payout right now</p>
                <p className="text-3xl font-semibold">${heroOffer.payout.toFixed(2)}</p>
                <p className="text-sm text-gray-600">
                  {heroOffer.platform} · {heroOffer.type}
                </p>
              </div>
              <button
                onClick={() => handleAccept(heroOffer)}
                className="rounded-full bg-[#4db3a1] px-4 py-2 text-sm font-semibold text-white hover:bg-[#45a08f] transition-colors"
              >
                Accept
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <span>{heroOffer.estimatedTime} min</span>
              <span className="text-gray-300">•</span>
              <span>{heroOffer.distance.toFixed(1)} km</span>
              <span className="text-gray-300">•</span>
              <span>Expires in {heroOffer.timeRemaining}s</span>
            </div>
            <div className="space-y-1 text-sm text-gray-700">
              <p>{heroOffer.pickup}</p>
              <p className="text-gray-500">{heroOffer.dropoff}</p>
            </div>
          </div>
        ) : (
          <NoOffersScreen 
            type={offers.length === 0 ? 'empty' : 'filtered'}
            onRetry={handleRetry}
            onAdjustFilters={handleAdjustFilters}
          />
        )}

        {remainingOffers.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">More offers</h3>
              <button
                onClick={() => setActiveTab('offers')}
                className="text-sm font-semibold text-[#4db3a1] hover:text-[#3a8b7d]"
              >
                View all
              </button>
            </div>
            <div className="space-y-3">
              {remainingOffers.slice(0, 3).map((offer) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  onAccept={handleAccept}
                  onDecline={handleDecline}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderMapTab = () => (
    <MapScreen activeTab={activeTab} onTabChange={setActiveTab} showNav={false} />
  );

  const renderStatsTab = () => (
    <StatsScreen
      activeTab={activeTab}
      onTabChange={setActiveTab}
      showNav={false}
    />
  );

  const renderMoreTab = () => (
    <MoreScreen
      activeTab={activeTab}
      onTabChange={setActiveTab}
      showNav={false}
    />
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return renderHomeView();
      case 'map':
        return renderMapTab();
      case 'stats':
        return renderStatsTab();
      case 'more':
        return renderMoreTab();
      case 'offers':
      default:
        return renderOffersList();
    }
  };

  return (
    <>
      {activeTrip ? (
        <TripScreen 
          trip={activeTrip}
          onTripComplete={handleTripComplete}
          onTripCancelled={handleTripCancelled}
        />
      ) : (
        <div className="relative w-full min-h-screen bg-gray-50 flex flex-col max-w-[430px] mx-auto">
          {/* Header (only on offers tab) */}
          {activeTab === 'offers' && (
            <Header 
              onFilterClick={() => setShowFilters(true)}
              onSortClick={() => setShowSort(true)}
              onRefresh={handleRetry}
              lastUpdate={getTimeSinceUpdate()}
              offersCount={filteredOffers.length}
            />
          )}

          {/* Main Content by tab */}
          {renderActiveTab()}

          {/* Bottom Navigation */}
          <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Filter Panel */}
          {showFilters && (
            <div className="fixed inset-0 z-50 flex items-end">
              <div 
                className="absolute inset-0 bg-black/50"
                onClick={() => setShowFilters(false)}
              />
              <div className="relative w-full max-w-[430px] mx-auto animate-slide-up">
                <FilterPanel
                  filters={filters}
                  onApply={handleApplyFilters}
                  onReset={handleResetFilters}
                  onClose={() => setShowFilters(false)}
                />
              </div>
            </div>
          )}

          {/* Sort Panel */}
          {showSort && (
            <div className="fixed inset-0 z-50 flex items-end">
              <div 
                className="absolute inset-0 bg-black/50"
                onClick={() => setShowSort(false)}
              />
              <div className="relative w-full max-w-[430px] mx-auto animate-slide-up">
                <SortPanel
                  currentSort={sortOption}
                  onApply={handleApplySort}
                  onReset={handleResetSort}
                  onClose={() => setShowSort(false)}
                />
              </div>
            </div>
          )}

          {/* Confirmation Modal */}
          {showConfirmation && selectedOffer && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div 
                className="absolute inset-0 bg-black/60"
                onClick={handleCancelConfirmation}
              />
              <div className="relative w-full max-w-[360px] animate-scale-in">
                <ConfirmationModal
                  offer={selectedOffer}
                  onAccept={handleConfirmAccept}
                  onCancel={handleCancelConfirmation}
                />
              </div>
            </div>
          )}

          {/* Loading Screen */}
          {isLoading && (
            <LoadingScreen />
          )}
        </div>
      )}
    </>
  );
}
