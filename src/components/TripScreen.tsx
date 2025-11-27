import { useState, useRef, useEffect } from 'react';
import { 
  Phone, 
  X, 
  User, 
  CornerUpRight, 
  ArrowUp, 
  ChevronRight, 
  Star 
} from 'lucide-react';
import { MapView } from './MapView';
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

type TripFlowState = 'pickup' | 'transit' | 'dropoff' | 'rating';

export function TripScreen({ trip, onTripComplete, onTripCancelled }: TripScreenProps) {
  const [flowState, setFlowState] = useState<TripFlowState>('pickup');
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [activeTab, setActiveTab] = useState('map');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // 3-second delay logic
  useEffect(() => {
    if (flowState === 'transit') {
      const timer = setTimeout(() => {
        setFlowState('dropoff');
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [flowState]);

  const handleSwipeComplete = () => {
    if (flowState === 'pickup') {
      setFlowState('transit');
    } else if (flowState === 'dropoff') {
      setFlowState('rating');
    }
  };

  const handleRatingSubmit = () => {
    if (rating > 0) {
      onTripComplete();
    }
  };

  const handleCancelClick = () => {
    setShowCancelModal(true);
  };

  const handleConfirmCancel = () => {
    setShowCancelModal(false);
    onTripCancelled();
  };

  const isPickupPhase = flowState === 'pickup';
  const currentTargetAddress = isPickupPhase ? trip.pickupAddress : trip.dropoffAddress;
  const streetName = currentTargetAddress.split(',')[0]; 
  // During transit, show dropping off message
  const statusText = flowState === 'transit' ? `Dropping off ${trip.riderName}...` : (isPickupPhase ? `Picking up ${trip.riderName}` : `Dropping off ${trip.riderName}`);

  // Rating Screen
  if (flowState === 'rating') {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-start pt-16 px-6 animate-in fade-in duration-300">
        {/* Question */}
        <p className="text-[#99a1af] text-[25px] tracking-[-0.75px] mb-8">
          How was your rider?
        </p>

        {/* Rider name */}
        <p className="text-black text-[40px] tracking-[-1.2px] mb-12 font-bold">
          {trip.riderName}
        </p>

        {/* Star rating */}
        <div className="flex gap-4 mb-20">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="transition-transform hover:scale-110 focus:outline-none"
            >
              <Star
                className="w-12 h-12"
                fill={star <= (hoverRating || rating) ? '#4db3a1' : 'none'}
                stroke={star <= (hoverRating || rating) ? '#4db3a1' : '#d1d5dc'}
                strokeWidth={2}
              />
            </button>
          ))}
        </div>

        {/* Rate button */}
        <button
          onClick={handleRatingSubmit}
          disabled={rating === 0}
          className="w-full max-w-[345px] h-[44px] bg-[#4db3a1] rounded-[18px] text-white text-[14px] tracking-[-0.42px] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mt-auto mb-32 hover:bg-[#3ea08e] transition-colors"
        >
          Rate Rider
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-gray-50 flex flex-col max-w-[430px] mx-auto overflow-hidden">
      
      {/* Map Layer */}
      <div className="absolute inset-0 z-0">
        <MapView className="w-full h-full" />
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="bg-[#4DB3A1] pt-12 pb-6 px-6 rounded-b-[30px] shadow-lg text-white relative">
          <div className="flex items-start gap-4">
            <CornerUpRight className="h-10 w-10 text-white mt-1" />
            <div>
              <p className="text-xl font-medium opacity-90">500 ft</p>
              <h2 className="text-3xl font-bold truncate max-w-[280px]">{streetName}</h2>
            </div>
          </div>
          <div className="absolute -bottom-5 left-6 bg-[#2F4F4F] text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium shadow-md">
            Then <ArrowUp className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Bottom Trip Panel */}
      <div className="absolute bottom-0 left-0 w-full z-20 pb-[80px]">
        <div className="bg-white rounded-t-[25px] shadow-[0_-5px_20px_rgba(0,0,0,0.1)] pt-6 pb-8 px-6 flex flex-col items-center gap-6">
          
          {/* Info Row: Time & Distance */}
          <div className="flex items-center justify-center gap-6 w-full">
            <span className="text-xl font-bold text-gray-900">{trip.estimatedTime} mins</span>
            <div className="h-8 w-8 rounded-full border border-[#4DB3A1] flex items-center justify-center text-[#4DB3A1]">
              <User className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold text-gray-900">{trip.distance.toFixed(1)} mi</span>
          </div>

          {/* Inline Buttons + Name Row */}
          <div className="flex items-center justify-between w-full px-2">
            {/* Contact Button */}
            <button 
              onClick={() => alert(`Calling ${trip.riderName}...`)}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="p-2.5 bg-gray-50 rounded-full">
                <Phone className="h-5 w-5 text-gray-600" />
              </div>
              <span className="text-[12px] font-medium text-black">Contact</span>
            </button>
            
            {/* Name */}
            <h3 className="text-[25px] font-bold text-[#99A1AF]">{trip.riderName}</h3>
            
            {/* Cancel Button */}
            <button 
              onClick={handleCancelClick}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
               <div className="p-2.5 bg-gray-50 rounded-full">
                <X className="h-5 w-5 text-gray-600" />
              </div>
               <span className="text-[12px] font-medium text-black">Cancel</span>
            </button>
          </div>

          {/* Slider */}
          {flowState === 'transit' ? (
             // Placeholder during 3s delay
            <div className="h-[39px] w-[345px] flex items-center justify-center">
               <span className="text-gray-400 animate-pulse text-[14px]">{statusText}</span>
            </div>
          ) : (
            <SwipeButton 
              label={flowState === 'pickup' ? "Start Hustle" : "Complete Hustle"}
              onComplete={handleSwipeComplete}
            />
          )}

        </div>
      </div>

      {/* Bottom Nav */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Cancel Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowCancelModal(false)} />
          <div className="relative w-full max-w-[360px]">
            <CancelTripModal
              cancellationsThisWeek={1}
              onKeepTrip={() => setShowCancelModal(false)}
              onConfirmCancel={handleConfirmCancel}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// --- Swipe Button Component ---
interface SwipeButtonProps {
  label: string;
  onComplete: () => void;
}

function SwipeButton({ label, onComplete }: SwipeButtonProps) {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Specific Dimensions
  const containerWidth = 345;
  const containerHeight = 39;
  const circleSize = 31; // slightly smaller than height to have padding
  const padding = 4;
  
  const maxDrag = containerWidth - circleSize - (padding * 2);
  const threshold = maxDrag * 0.7;

  const reset = () => {
    setDragX(0);
    setIsDragging(false);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    const offsetX = e.clientX - rect.left - padding - (circleSize / 2); 
    
    if (offsetX < 0) setDragX(0);
    else if (offsetX > maxDrag) setDragX(maxDrag);
    else setDragX(offsetX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
    
    if (dragX > threshold) {
      setDragX(maxDrag);
      setTimeout(() => {
        onComplete();
        reset();
      }, 200);
    } else {
      reset();
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden select-none touch-none cursor-pointer shadow-inner"
      style={{ 
        width: `${containerWidth}px`, 
        height: `${containerHeight}px`, 
        borderRadius: '18px',
        backgroundColor: 'rgba(77, 179, 161, 0.44)'
      }}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Label */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <span className="text-black font-normal text-[14px]">{label}</span>
      </div>

      {/* Progress Overlay (Swiped Area - Darker Green) */}
      <div 
        className="absolute inset-y-0 left-0 bg-[#4DB3A1] z-0 pointer-events-none"
        style={{ width: `${(dragX / maxDrag) * 100}%` }}
      />

      {/* Draggable Circle (Always Dark Green) */}
      <div 
        className="absolute bg-[#4DB3A1] rounded-full flex items-center justify-center shadow-sm z-10"
        style={{ 
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          top: `${padding}px`,
          left: `${padding}px`,
          transform: `translateX(${dragX}px)`, 
          transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)' 
        }}
        onPointerDown={handlePointerDown}
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </div>
    </div>
  );
}