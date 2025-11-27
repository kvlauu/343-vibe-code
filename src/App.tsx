import { useState, useEffect, useMemo, useRef } from 'react';
import { 
  TrendingUp, 
  Wallet, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Bell,
  User
} from 'lucide-react';
import { FilterPanel } from './components/FilterPanel';
import { SortPanel } from './components/SortPanel';
import { ConfirmationModal } from './components/ConfirmationModal';
import { BottomNav } from './components/BottomNav';
import { TripScreen } from './components/TripScreen';
import { StatsScreen } from './components/StatsScreen';
import { MoreScreen } from './components/MoreScreen';
import { MapScreen } from './components/MapScreen';
import { LiveOfferFeed } from './components/LiveOfferFeed';
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

  // Keep track of offer IDs to detect new additions
  const prevOfferIds = useRef<Set<string>>(new Set(offers.map(o => o.id)));

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
        
        // Add new offers with rate based on inventory
        if (updated.length < 10) {
          const spawnChance = updated.length <= 3 ? 1 / 3 : 1 / 8;
          if (Math.random() < spawnChance) {
            const newOffer = generateNewOffer();
            if (newOffer) updated.push(newOffer);
          }
        }
        
        return updated;
      });
      // Forces re-render every second, used by getTimeSinceUpdate
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Detect new offers and reset the lastUpdated timer
  useEffect(() => {
    const currentIds = new Set(offers.map(o => o.id));
    const hasNewOffer = offers.some(o => !prevOfferIds.current.has(o.id));
    
    if (hasNewOffer) {
      setLastUpdate(new Date());
    }
    
    prevOfferIds.current = currentIds;
  }, [offers]);

  // Apply filters and sort whenever they change
  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
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
      if (!filters.platforms[offer.platform]) return false;
      const offerType = offer.type === 'rideshare' ? 'ride' : 'delivery';
      if (!filters.offerTypes[offerType]) return false;
      if (offer.distance > filters.distanceFromTrip) return false;
      return true;
    });
    
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
      setActiveTrip({
        riderName: 'Schneider',
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
      platforms: { Uber: true, Lyft: true, DoorDash: true, SkipTheDishes: true },
      offerTypes: { ride: true, delivery: true },
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
      setOffers(generateOffers());
      setIsLoading(false);
    }, 2000);
  };

  const getTimeSinceUpdate = () => {
    const seconds = Math.floor((new Date().getTime() - lastUpdate.getTime()) / 1000);
    
    // Snap to nearest 3 seconds (0, 3, 6, 9...)
    const snappedSeconds = Math.floor(seconds / 3) * 3;

    if (snappedSeconds < 3) return 'just now';
    return `${snappedSeconds}s ago`;
  };

  const renderOffersList = () => (
    <LiveOfferFeed
      offers={filteredOffers}
      filters={filters}
      onFiltersChange={setFilters}
      onAccept={handleAccept}
      onDecline={handleDecline}
      onRefresh={handleRetry}
      onSort={() => setShowSort(true)}
      onFilter={() => setShowFilters(true)}
      lastUpdated={getTimeSinceUpdate()}
      isLoading={isLoading}
    />
  );

  const renderHomeView = () => (
    <div className="flex-1 overflow-y-auto bg-gray-50 pb-24">
      <div className="bg-white px-6 pt-12 pb-6 border-b border-gray-100 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Hustle</h1>
          <p className="text-sm text-gray-500 font-medium mt-1">Good morning, Oliver</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
            <Bell className="h-6 w-6" />
            <span className="absolute top-2 right-2 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <div className="h-10 w-10 rounded-full bg-[#4db3a1]/10 flex items-center justify-center border-2 border-white shadow-sm">
             <User className="h-5 w-5 text-[#4db3a1]" />
          </div>
        </div>
      </div>

      <div className="p-5 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
              <Clock className="h-5 w-5" />
            </div>
            <p className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">Time Online</p>
            <p className="text-xl font-bold text-gray-900">4h 12m</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="h-10 w-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mb-3">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">Trips Done</p>
            <p className="text-xl font-bold text-gray-900">8</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#4db3a1]/10 flex items-center justify-center text-[#4db3a1]">
                <TrendingUp className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-gray-900">Weekly Goal</h3>
            </div>
            <span className="text-sm font-bold text-[#4db3a1] bg-[#4db3a1]/10 px-2 py-1 rounded-md">85%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3 mb-3 overflow-hidden">
            <div className="bg-[#FEAB00] h-3 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
          </div>
          <div className="flex justify-between items-center text-sm">
             <span className="font-semibold text-gray-900">$850 <span className="text-gray-400 font-normal">earned</span></span>
             <span className="text-gray-500">$1000 target</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">For You</h3>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="h-12 w-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-sm">High Demand Area</h4>
                <p className="text-xs text-gray-500 mt-0.5">Surge pricing active in Downtown (+1.5x).</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-300" />
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <Wallet className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-sm">Payment Sent</h4>
                <p className="text-xs text-gray-500 mt-0.5">$142.50 transferred to your bank.</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMapTab = () => (
    <MapScreen activeTab={activeTab} onTabChange={setActiveTab} showNav={false} />
  );

  const renderStatsTab = () => (
    <StatsScreen activeTab={activeTab} onTabChange={setActiveTab} showNav={false} />
  );

  const renderMoreTab = () => (
    <MoreScreen activeTab={activeTab} onTabChange={setActiveTab} showNav={false} />
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home': return renderHomeView();
      case 'map': return renderMapTab();
      case 'stats': return renderStatsTab();
      case 'more': return renderMoreTab();
      case 'offers': default: return renderOffersList();
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
          {renderActiveTab()}
          <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
          
          {showFilters && (
            <div className="fixed inset-0 z-50 flex items-end">
              <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
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

          {showSort && (
            <div className="fixed inset-0 z-50 flex items-end">
              <div className="absolute inset-0 bg-black/50" onClick={() => setShowSort(false)} />
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

          {showConfirmation && selectedOffer && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/60" onClick={handleCancelConfirmation} />
              <div className="relative w-full max-w-[360px] animate-scale-in">
                <ConfirmationModal
                  offer={selectedOffer}
                  onAccept={handleConfirmAccept}
                  onCancel={handleCancelConfirmation}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}