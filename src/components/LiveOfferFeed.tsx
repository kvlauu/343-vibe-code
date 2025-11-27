import { useMemo, useRef, useState } from "react";
import {
ArrowUpDown,
SlidersHorizontal,
Navigation,
Clock,
ChevronDown,
ChevronUp,
Star,
Car,
X,
Check,
Bell,
} from "lucide-react";
import uberLogo from "@/assets/uber-icon.svg";
import lyftLogo from "@/assets/lyft.png";
import doordashLogo from "@/assets/doordash.svg";
import skipLogo from "@/assets/skip.png";
import pinpoint from "@/assets/pinpoint.png";
import phoneIcons from "@/assets/PhoneIcons.png";
import loadingImg from "@/assets/loading.png";
import type { Offer, FilterState } from "@/types";
// Make sure this path matches where you saved the component provided in your prompt
import { ConfirmationModal } from "./ConfirmationModal"; 

// --- Types ---
interface LiveOfferFeedProps {
offers: Offer[];
filters: FilterState;
onFiltersChange: (next: FilterState) => void;
onAccept: (offer: Offer) => void;
onDecline: (offerId: string) => void;
onRefresh: () => void;
onSort: () => void;
onFilter: () => void;
lastUpdated: string;
isLoading?: boolean;
}

const platformImages: Record<Offer["platform"], string> = {
Uber: uberLogo,
Lyft: lyftLogo,
DoorDash: doordashLogo,
SkipTheDishes: skipLogo,
};

// --- Main Component ---
export function LiveOfferFeed({
offers,
filters,
onFiltersChange,
onAccept,
onDecline,
onRefresh,
onSort,
onFilter,
lastUpdated,
isLoading = false,
}: LiveOfferFeedProps) {
const scrollContainerRef = useRef<HTMLDivElement>(null);
const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

const activeRide = filters.offerTypes.ride;
const activeDelivery = filters.offerTypes.delivery;

const toggleType = (type: "ride" | "delivery") => {
  const next: FilterState = {
    ...filters,
    offerTypes: {
      ...filters.offerTypes,
      [type]: !filters.offerTypes[type],
    },
  };
  if (!next.offerTypes.ride && !next.offerTypes.delivery) {
    next.offerTypes[type === "ride" ? "delivery" : "ride"] = true;
  }
  onFiltersChange(next);
};

const topOfferId = useMemo(() => {
  if (offers.length === 0) return null;
  return offers.reduce((best, cur) => (cur.payout > best.payout ? cur : best), offers[0]).id;
}, [offers]);

const orderedOffers = useMemo(() => {
  if (!topOfferId) return offers;
  const top = offers.find((o) => o.id === topOfferId);
  const rest = offers.filter((o) => o.id !== topOfferId);
  return top ? [top, ...rest] : offers;
}, [offers, topOfferId]);

return (
  <div className="relative w-full flex items-center justify-center overflow-hidden bg-[#f7f9fb]">
    <div className="relative w-full max-w-[393px] min-h-screen">
      
      {/* --- Modal Overlay --- */}
    {selectedOffer && (
<div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
  <div className="w-full max-w-[360px] px-4">
    <ConfirmationModal 
      offer={selectedOffer}
      onAccept={() => {
        onAccept(selectedOffer);
        setSelectedOffer(null);
      }}
      onCancel={() => setSelectedOffer(null)}
    />
  </div>
</div>
)}


      {/* --- Top Bar (Fixed) --- */}
      <div className="absolute left-0 top-0 w-full bg-white shadow-sm z-30">
        <div className="px-5 pt-6 pb-4 space-y-3">
          {/* Row 1: Time + status icons */}
          <div className="flex items-center justify-between text-sm text-gray-700">
            <span className="font-semibold">
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </span>
            <img
              src={phoneIcons}
              alt="Status icons"
              className="h-[11px] w-[66px] object-contain"
            />
          </div>

          {/* Row 2: Title + Actions */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-[26px] font-bold text-gray-900">Live Offer Feed</h1>
              <p className="text-sm text-gray-600">Swipe or tap to accept offer</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onSort}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <ArrowUpDown className="h-5 w-5" />
              </button>
              <button
                onClick={onFilter}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <SlidersHorizontal className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Row 3: Filters (Left) + Updated (Right) */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3 text-sm">
              <button
                onClick={() => toggleType("ride")}
                className={`flex items-center gap-2 rounded-[14px] px-3 py-1 border ${
                  activeRide ? "bg-[#449b8c] text-white border-[#449b8c]" : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                <Car className="h-4 w-4" />
                Ride
              </button>
              <button
                onClick={() => toggleType("delivery")}
                className={`flex items-center gap-2 rounded-[14px] px-3 py-1 border ${
                  activeDelivery ? "bg-[#449b8c] text-white border-[#449b8c]" : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={activeDelivery ? "white" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="17" cy="20" r="1" />
                  <path d="M2 2h3l3 12h10l3-8H6" />
                </svg>
                Delivery
              </button>
            </div>
            
            <span className="text-xs text-gray-500 font-medium">
              Updated {lastUpdated}
            </span>
          </div>
        </div>
      </div>

      {/* --- Content Area --- */}
      <div className="pt-[200px] px-5 pb-0 h-full">
        <div
          ref={scrollContainerRef}
          className="w-full overflow-y-auto overflow-x-hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            height: "calc(100vh - 200px)", // Full height minus header
            paddingBottom: "40px",
          }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          
          {isLoading ? (
            <div className="flex h-[50vh] items-center justify-center">
              <img src={loadingImg} alt="Loading offers" className="w-64 h-auto" />
            </div>
          ) : orderedOffers.length === 0 ? (
              <div className="mt-4">
                <NoOffersScreen 
                  type="filtered"
                  onRetry={onRefresh}
                  onAdjustFilters={onFilter}
                />
              </div>
          ) : (
            <div className="space-y-4 pb-24">
            {orderedOffers.map((offer) => {
              const isTop = offer.id === topOfferId;
              return (
                <DraggableOfferCard
                  key={offer.id}
                  offer={offer}
                  isTop={isTop}
                  // Swipe right → open confirmation modal
                  onAccept={() => setSelectedOffer(offer)}
                  // Swipe left → decline immediately
                  onDecline={() => onDecline(offer.id)}
                  // Tap → open confirmation modal
                  onClick={() => setSelectedOffer(offer)}
                />
              );
            })}

            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
}

// --- Draggable Card Component ---

interface DraggableOfferCardProps {
offer: Offer;
isTop: boolean;
onAccept: () => void;
onDecline: () => void;
onClick: () => void;
}

function DraggableOfferCard({ offer, isTop, onAccept, onDecline, onClick }: DraggableOfferCardProps) {
const [dragX, setDragX] = useState(0);
const [dragging, setDragging] = useState(false);
const [expanded, setExpanded] = useState(false);
const startRef = useRef<number | null>(null);

const threshold = 120;

// Calculate drag percentage for opacity (0 to 1)
const dragPercentage = Math.min(Math.abs(dragX) / (threshold * 0.7), 1);
const isSwipingLeft = dragX < 0;
const isSwipingRight = dragX > 0;

const rating = useMemo(() => (4.5 + Math.random() * 0.5).toFixed(2), [offer.id]);

const detailNotes = useMemo(() => {
  const pool = [
    "Expected tip: $5",
    "No parking",
    "Heavy potholes",
    "Busy area surge",
    "Leave at door",
    "Fast pickup spot",
    "Apartment delivery",
  ];
  const chosen: string[] = [];
  const copy = [...pool];
  for (let i = 0; i < 3 && copy.length; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    chosen.push(copy.splice(idx, 1)[0]);
  }
  return chosen;
}, [offer.id]);

const reset = () => {
  setDragX(0);
  setDragging(false);
  startRef.current = null;
};

const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
if (e.button !== 0) return;
if ((e.target as HTMLElement).closest("button")) return;

startRef.current = e.clientX;
setDragging(true);
(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
};

const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
if (!dragging || startRef.current === null) return;
const delta = e.clientX - startRef.current;
setDragX(delta);
};

const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
if (!dragging || startRef.current === null) {
  // Clicks that started on buttons (like "Show more") will hit this path
  return;
}

if (dragX > threshold) {
  onAccept();
} else if (dragX < -threshold) {
  onDecline();
} else if (Math.abs(dragX) < 5) {
  // True tap on the card itself
  onClick();
}

reset();
(e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
};

const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
if (dragging) {
  (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
}
reset();
};

return (
  <div
    className="relative shrink-0 cursor-grab active:cursor-grabbing touch-none"
    style={{
      transform: `translateX(${dragX}px) rotate(${dragX * 0.05}deg)`,
      transition: dragging ? "none" : "transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
      zIndex: dragging ? 50 : 0
    }}
    onPointerDown={handlePointerDown}
    onPointerMove={handlePointerMove}
    onPointerUp={handlePointerUp}
    onPointerCancel={handlePointerCancel}
  >
    <div className="bg-white rounded-[15px] border-[2.5px] border-[#4db3a1] shadow-sm relative min-h-[266px] overflow-hidden flex flex-col">
      
      {/* --- SWIPE OVERLAYS --- */}
      <div 
        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#D92D20] text-white pointer-events-none"
        style={{ opacity: isSwipingLeft ? dragPercentage : 0 }}
      >
          <div className="rounded-full bg-white/20 p-4 mb-2">
            <X className="h-16 w-16 text-white" strokeWidth={3} />
          </div>
          <span className="text-3xl font-bold tracking-wide uppercase">Declined</span>
      </div>

      <div 
        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#12B76A] text-white pointer-events-none"
        style={{ opacity: isSwipingRight ? dragPercentage : 0 }}
      >
          <div className="rounded-full bg-white/20 p-4 mb-2">
            <Check className="h-16 w-16 text-white" strokeWidth={3} />
          </div>
          <span className="text-3xl font-bold tracking-wide uppercase">Accept</span>
      </div>
      
      {/* --- CARD CONTENT --- */}
      <div className="p-5 flex-1 relative z-10">
        <div
          className="absolute right-3 top-3 flex items-center justify-center rounded-[10px] text-white text-xs font-normal shadow-sm"
          style={{ width: "97px", height: "34px", backgroundColor: isTop ? "#449B8C" : "#FEAB00" }}
        >
          {isTop ? (
            <>
              <span className="ml-1">Great Offer</span>
              <span className="text-sm">🔥</span>
            </>
          ) : (
            <span>Fair Offer</span>
          )}
        </div>

        <div className="flex items-start gap-3">
          <div className="h-14 w-14 rounded-[5px] overflow-hidden border border-black/10 bg-white relative">
            <img
              src={platformImages[offer.platform]}
              alt={offer.platform}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="text-[40px] leading-none text-black tracking-tight">${offer.payout.toFixed(2)}</p>
            <div className="inline-flex items-center px-2 py-0.5 border border-black rounded text-xs capitalize mt-1 font-medium">
              {offer.type}
            </div>
          </div>
        </div>

        <div className="mt-4 h-px w-full bg-gray-300" />

        <div className="mt-3 flex items-center gap-4 text-[#4a5565]">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-[16px]">{offer.estimatedTime} min</span>
          </div>

          <div className="flex items-center gap-2">
            <Navigation className="h-4 w-4" />
            <span className="text-[16px]">{offer.distance.toFixed(1)} km</span>
          </div>

          <div className="flex items-center gap-1">
            <Star className="h-[14px] w-[14px] text-[#FFD700] fill-[#FFD700]" />
            <span className="text-[16px]">{rating}</span>
          </div>
        </div>

        <div className="mt-3 h-px w-full bg-gray-300" />

        <div className="mt-5 flex gap-5 text-[16px] text-black items-start">
          <img
            src={pinpoint}
            alt="Route"
            className="h-16 w-6 object-contain self-start"
          />
          <div className="flex flex-col justify-between py-0.5 gap-5">
            <p className="leading-tight font-medium">{offer.pickup}</p>
            <p className="leading-tight font-medium">{offer.dropoff}</p>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="px-5 pb-5 animate-in slide-in-from-top-2 duration-200 relative z-10 bg-white">
            <div className="h-px w-full bg-gray-200 mb-3" />
          <ul className="space-y-2 text-sm text-[#616161] list-disc list-inside">
            {detailNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation();
          setExpanded((prev) => !prev);
      }}
        className="w-full h-[36px] flex items-center justify-center gap-2 bg-[#4DB3A1]/25 text-[#449B8C] text-sm font-semibold mt-auto hover:bg-[#4DB3A1]/40 transition-colors relative z-10"
      >
        {expanded ? (
          <>
            Show less <ChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            Show more <ChevronDown className="h-4 w-4" />
          </>
        )}
      </button>
    </div>
  </div>
);
}

// --- No Offers Screen Component ---

interface NoOffersScreenProps {
type: 'empty' | 'filtered';
onRetry?: () => void;
onAdjustFilters?: () => void;
}

export function NoOffersScreen({ type, onRetry, onAdjustFilters }: NoOffersScreenProps) {
return (
  <div className="flex flex-col items-center justify-center py-6 px-0 w-full">
    <div className="bg-white border border-gray-200 rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-8 w-full">
      <div className="flex justify-center mb-6">
        <Bell className="w-16 h-16 text-[#d1d5dc]" strokeWidth={1.5} />
      </div>
      {type === 'empty' ? (
        <>
          <h2 className="text-[#101828] text-[16px] font-semibold text-center mb-4 tracking-[-0.3125px]">
            No offers available right now
          </h2>
          <p className="text-[#6a7282] text-[14px] text-center leading-[20px] tracking-[-0.1504px] mb-6">
            The feed is currently empty. This could be due to low demand, time of day, or temporary connection issues.
          </p>
          <div className="flex justify-center mb-4">
            <button
              onClick={onRetry}
              className="bg-[#4db3a1] text-white rounded-[14px] px-6 py-3 text-[16px] font-medium tracking-[-0.3125px] hover:bg-[#45a08f] transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 8a6.5 6.5 0 0113 0" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 8a6.5 6.5 0 01-13 0" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 5v3h-3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 11V8h3" />
              </svg>
              Retry
            </button>
          </div>
          <p className="text-[#99a1af] text-[14px] text-center leading-[20px] tracking-[-0.1504px]">
            Feed updates automatically every 15 seconds
          </p>
        </>
      ) : (
        <>
          <h2 className="text-[#101828] text-[16px] font-semibold text-center mb-4 tracking-[-0.3125px]">
            No offers match your filters
          </h2>
          <p className="text-[#6a7282] text-[14px] text-center leading-[20px] tracking-[-0.1504px] mb-6">
            Try adjusting your filters to see more offers
          </p>
          <div className="flex justify-center">
            <button
              onClick={onAdjustFilters}
              className="bg-black text-white rounded-[14px] px-6 py-3 text-[16px] font-medium tracking-[-0.3125px] hover:bg-gray-900 transition-colors flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Adjust Filters
            </button>
          </div>
        </>
      )}
    </div>
  </div>
);
}