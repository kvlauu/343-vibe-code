import { useRef, useState } from 'react';
import type { Offer } from '../types';
import { Clock, Navigation, X, MapPin, Check, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import uberLogo from "@/assets/uber-icon.svg";
import lyftLogo from "@/assets/lyft.png";
import doordashLogo from "@/assets/doordash.svg";
import skipLogo from "@/assets/skip.png";
import starBadge from "@/assets/star.png";

interface OfferCardProps {
  offer: Offer;
  onAccept: (offer: Offer) => void;
  onDecline: (offerId: string) => void;
  isTop?: boolean;
}

export function OfferCard({ offer, onAccept, onDecline, isTop = false }: OfferCardProps) {
  const [expanded, setExpanded] = useState(false);
  
  const formatPayout = (amount: number) => `$${amount.toFixed(2)}`;

  const getPlatformLogo = (platform: string) => {
    const logos: Record<string, string> = {
      Uber: uberLogo,
      Lyft: lyftLogo,
      DoorDash: doordashLogo,
      SkipTheDishes: skipLogo,
    };
    return logos[platform];
  };

  // -- Swipe Logic State --
  const startXRef = useRef<number | null>(null);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Thresholds
  const SWIPE_THRESHOLD = 100; // Distance required to trigger action
  const ROTATION_FACTOR = 0.05; // How much the card rotates while dragging
  const DRAG_START_THRESHOLD = 5; // Pixels to move before dragging "starts" (prevents accidental clicks)

  const resetDrag = () => {
    setDragX(0);
    setIsDragging(false);
    startXRef.current = null;
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // 1. Desktop Check: Only allow left mouse button
    if (e.button !== 0) return;

    // 2. Ignore clicks on buttons/interactive elements
    if ((e.target as HTMLElement).closest('button')) return;
    
    startXRef.current = e.clientX;
    
    // Capture pointer to ensure we keep tracking even if mouse leaves div
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (startXRef.current === null) return;
    
    const currentX = e.clientX;
    const delta = currentX - startXRef.current;

    // 3. Threshold Check: Only start dragging if moved more than 5px
    if (!isDragging && Math.abs(delta) > DRAG_START_THRESHOLD) {
      setIsDragging(true);
    }

    if (isDragging) {
      setDragX(delta);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    // Release capture
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);

    if (!isDragging) {
        resetDrag();
        return;
    }
    
    if (dragX > SWIPE_THRESHOLD) {
      // Swiped Right -> Accept
      setDragX(500); 
      setTimeout(() => onAccept(offer), 200);
    } else if (dragX < -SWIPE_THRESHOLD) {
      // Swiped Left -> Decline
      setDragX(-500);
      setTimeout(() => onDecline(offer.id), 200);
    } else {
      // Didn't swipe far enough -> Reset
      resetDrag();
    }
  };

  // Determine background color/icon based on drag direction
  const getBackgroundState = () => {
    if (dragX > 20) return { color: 'bg-emerald-500', icon: <Check className="w-8 h-8 text-white" />, align: 'justify-start' };
    if (dragX < -20) return { color: 'bg-rose-500', icon: <Trash2 className="w-8 h-8 text-white" />, align: 'justify-end' };
    return { color: 'bg-transparent', icon: null, align: 'justify-center' };
  };

  const bgState = getBackgroundState();
  const rotation = dragX * ROTATION_FACTOR;

  return (
    <div className="relative w-full select-none touch-none">
      
      {/* 1. Background Visual Feedback Layer */}
      <div 
        className={`absolute inset-0 rounded-[15px] flex items-center px-8 transition-colors duration-200 ${bgState.color} ${bgState.align}`}
      >
        <div className={`transition-opacity duration-200 ${Math.abs(dragX) > 20 ? 'opacity-100' : 'opacity-0'}`}>
          {bgState.icon}
        </div>
      </div>

      {/* 2. Draggable Card Layer */}
      <div
        ref={containerRef}
        // Prevent native browser drag behavior on desktop
        onDragStart={(e) => e.preventDefault()}
        className={`
          bg-white rounded-[15px] shadow-md overflow-hidden relative 
          ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} 
          active:cursor-grabbing
          ${isTop ? 'border-[4px] border-[#4db3a1]' : 'border border-gray-100'}
        `}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={resetDrag}
        style={{
          transform: `translateX(${dragX}px) rotate(${rotation}deg)`,
          // Only animate if NOT dragging (for the spring back effect)
          transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          touchAction: 'pan-y'
        }}
      >
        {/* Star Badge for Top Offer */}
        {isTop && (
          <div className="absolute left-0 top-0 z-[10]">
             <img src={starBadge} alt="Top Offer" className="w-10 h-10 object-contain drop-shadow-sm" />
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDecline(offer.id);
          }}
          onPointerDown={(e) => e.stopPropagation()} 
          className="absolute right-3 top-3 z-[10] w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors border border-gray-100 cursor-pointer"
        >
          <X className="w-5 h-5 text-black" />
        </button>

        {/* Card Content */}
        <div className="pt-5 px-5 pb-0 space-y-4">
          {/* Platform Logo */}
          <div className="flex items-start">
            <div className="w-10 h-10 bg-white rounded border border-gray-200 flex items-center justify-center overflow-hidden">
              {getPlatformLogo(offer.platform) ? (
                <img
                  src={getPlatformLogo(offer.platform)}
                  alt={offer.platform}
                  draggable={false}
                  className="max-h-full max-w-full object-contain select-none"
                />
              ) : (
                <span className="text-sm text-gray-600">{offer.platform}</span>
              )}
            </div>
          </div>

          {/* Payout */}
          <div>
            <p className="text-[40px] leading-none mb-1">{formatPayout(offer.payout)}</p>
            <span className="inline-block px-2 py-0.5 border border-black rounded text-[12px]">
              {offer.type}
            </span>
          </div>

          {/* Time and Distance */}
          <div className="flex items-center gap-4 text-[#4a5565] border-t border-gray-200 pt-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-[16px]">{offer.estimatedTime} min</span>
            </div>
            <div className="flex items-center gap-2">
              <Navigation className="w-4 h-4" />
              <span className="text-[16px]">{offer.distance.toFixed(1)} km</span>
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-2 border-t border-gray-200 pt-3 mb-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#4db3a1] flex-shrink-0" fill="#4db3a1" />
              <span className="text-[14px]">{offer.pickup}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#4db3a1] flex-shrink-0" fill="#4db3a1" />
              <span className="text-[14px]">{offer.dropoff}</span>
            </div>
          </div>
        </div>

        {/* Expandable Notes Section */}
        <div className="mt-2 border-t border-gray-100">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            onPointerDown={(e) => e.stopPropagation()}
            className="w-full py-1.5 flex items-center justify-center gap-1 bg-gray-50 hover:bg-gray-100 transition-colors group cursor-pointer"
          >
            <span className="text-xs font-medium text-gray-500 group-hover:text-gray-700 uppercase tracking-wide">
              {expanded ? "Show Less" : "Show More"}
            </span>
            {expanded ? (
              <ChevronUp className="w-3 h-3 text-gray-400 group-hover:text-gray-600" />
            ) : (
              <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-gray-600" />
            )}
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50/50 ${expanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <ul className="px-5 pb-3 pt-1 text-sm text-gray-600 list-disc pl-9 space-y-1">
              <li>2km uphill</li>
              <li>Expected tip: $5</li>
              <li>5 minute idle limit</li>
              <li>Heavy potholes</li>
            </ul>
          </div>
        </div>

        {/* Accept Button Container */}
        <div className="p-5 pt-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAccept(offer);
            }}
            onPointerDown={(e) => e.stopPropagation()}
            className="w-full h-[50px] bg-[#4db3a1] text-white rounded-[14px] text-[16px] hover:bg-[#45a08f] transition-colors font-medium cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}