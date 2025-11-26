import { useState, useEffect } from 'react';
import { NavigationHeader } from './NavigationHeader';
import { TripBottomSheet, type TripState } from './TripBottomSheet';
import { MapView } from './MapView';
import { RatingScreen } from './RatingScreen';
import { CancelTripModal } from './CancelTripModal';
import { BottomNav } from './BottomNav';

interface TripData {
  riderName: string;
  pickupAddress: string;
  dropoffAddress: string;
  estimatedTime: number;
  distance: number;
}

interface TripScreenProps {
  trip: TripData;
  onTripComplete: () => void;
  onTripCancelled: () => void;
}

export function TripScreen({ trip, onTripComplete, onTripCancelled }: TripScreenProps) {
  const [tripState, setTripState] = useState<TripState>('pickup');
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showRatingScreen, setShowRatingScreen] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(trip.estimatedTime);
  const [distanceRemaining, setDistanceRemaining] = useState(trip.distance);
  const [cancellationsThisWeek, setCancellationsThisWeek] = useState(2);
  const [activeTab, setActiveTab] = useState('map');

  // Handle bottom nav tab changes
  const handleTabChange = (tab: string) => {
    // Only allow going back to offers if in pickup state
    if (tab === 'offers' && tripState === 'pickup') {
      onTripCancelled();
    } else {
      setActiveTab(tab);
    }
  };

  // Simulate time and distance countdown
  useEffect(() => {
    if (tripState === 'pickup' || tripState === 'notified') {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setTripState('waiting');
            return 0;
          }
          return prev - 1;
        });
        setDistanceRemaining((prev) => Math.max(0, prev - 0.1));
      }, 60000); // Update every minute

      return () => clearInterval(timer);
    }
  }, [tripState]);

  const handleStartHustle = () => {
    setTripState('notified');
  };

  const handleRiderPickedUp = () => {
    setTripState('enroute');
    setTimeRemaining(trip.estimatedTime);
    setDistanceRemaining(trip.distance);
  };

  const handleArriveAtDropoff = () => {
    setTripState('arrived');
    setTimeRemaining(0);
    setDistanceRemaining(0);
  };

  const handleCompleteTrip = () => {
    setShowRatingScreen(true);
  };

  const handleRateRider = (rating: number) => {
    console.log(`Rated rider ${rating} stars`);
    setShowRatingScreen(false);
    onTripComplete();
  };

  const handleContact = () => {
    alert(`Calling ${trip.riderName}...`);
  };

  const handleCancelClick = () => {
    setShowCancelModal(true);
  };

  const handleKeepTrip = () => {
    setShowCancelModal(false);
  };

  const handleConfirmCancel = () => {
    setShowCancelModal(false);
    setCancellationsThisWeek((prev) => prev + 1);
    onTripCancelled();
  };

  // For testing: add button to simulate state changes
  const handleTestStateChange = () => {
    switch (tripState) {
      case 'pickup':
        setTripState('notified');
        break;
      case 'notified':
        setTripState('waiting');
        break;
      case 'waiting':
        handleRiderPickedUp();
        break;
      case 'enroute':
        handleArriveAtDropoff();
        break;
      case 'arrived':
        handleCompleteTrip();
        break;
    }
  };

  if (showRatingScreen) {
    return <RatingScreen riderName={trip.riderName} onRate={handleRateRider} />;
  }

  return (
    <div className="relative w-full min-h-screen bg-gray-50 flex flex-col max-w-[430px] mx-auto">
      {/* Navigation Header */}
      <NavigationHeader
        streetName="Jackson St"
        distance="500 ft"
        direction="left"
      />

      {/* Map View */}
      <div className="flex-1 relative">
        <MapView className="absolute inset-0" />
        
        {/* Back to offers button (only in pickup state) */}
        {tripState === 'pickup' && (
          <button
            onClick={() => onTripCancelled()}
            className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg text-sm z-10 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Offers
          </button>
        )}
        
        {/* Test button (for development - remove in production) */}
        <button
          onClick={handleTestStateChange}
          className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg text-sm z-10"
        >
          Next State ({tripState})
        </button>
      </div>

      {/* Trip Bottom Sheet */}
      <TripBottomSheet
        state={tripState}
        riderName={trip.riderName}
        timeEstimate={timeRemaining > 0 ? `${timeRemaining} mins` : undefined}
        distance={distanceRemaining > 0 ? `${distanceRemaining.toFixed(1)} mi` : '0 mi'}
        onStartHustle={handleStartHustle}
        onComplete={handleCompleteTrip}
        onContact={handleContact}
        onCancel={handleCancelClick}
        onBack={tripState === 'pickup' ? () => onTripCancelled() : undefined}
      />

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Cancel Modal */}
      {showCancelModal && (
        <CancelTripModal
          cancellationsThisWeek={cancellationsThisWeek}
          onKeepTrip={handleKeepTrip}
          onConfirmCancel={handleConfirmCancel}
        />
      )}
    </div>
  );
}
