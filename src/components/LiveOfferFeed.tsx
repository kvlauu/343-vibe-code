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
} from "lucide-react";
import uberLogo from "@/assets/uber-icon.svg";
import lyftLogo from "@/assets/lyft.png";
import doordashLogo from "@/assets/doordash.svg";
import skipLogo from "@/assets/skip.png";
import pinpoint from "@/assets/pinpoint.png";
import phoneIcons from "@/assets/PhoneIcons.png";
import loadingImg from "@/assets/loading.png";
import type { Offer, FilterState } from "@/types";
import { NoOffersScreen } from "./NoOffersScreen";

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

  if (offers.length === 0) {
    return (
      <div className="flex-1 overflow-y-auto pb-24 px-4 pt-4">
        <NoOffersScreen
          type="filtered"
          onRetry={onRefresh}
          onAdjustFilters={onFilter}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden bg-[#f7f9fb]">
      <div className="relative w-full max-w-[393px] min-h-screen">
        {/* Top Bar */}
        <div className="absolute left-0 top-0 w-full bg-white shadow-sm">
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

        {/* Offer cards list */}
        <div className="pt-[200px] px-5 pb-0">
          <div
            ref={scrollContainerRef}
            className="w-full overflow-y-auto overflow-x-hidden space-y-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              height: "calc(100vh - 200px - 80px)",
              paddingBottom: "88px",
            }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
            {isLoading ? (
              <div className="flex h-full items-center justify-center">
                <img src={loadingImg} alt="Loading offers" className="w-64 h-auto" />
              </div>
            ) : (
              orderedOffers.map((offer) => {
                const isTop = offer.id === topOfferId;
                return (
                  <DraggableOfferCard
                    key={offer.id}
                    offer={offer}
                    isTop={isTop}
                    onAccept={() => onAccept(offer)}
                    onDecline={() => onDecline(offer.id)}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface DraggableOfferCardProps {
  offer: Offer;
  isTop: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

function DraggableOfferCard({ offer, isTop, onAccept, onDecline }: DraggableOfferCardProps) {
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const startRef = useRef<number | null>(null);
  const threshold = 120;

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
    startRef.current = e.clientX;
    setDragging(true);
  };
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || startRef.current === null) return;
    const delta = e.clientX - startRef.current;
    setDragX(delta);
    if (delta > threshold) {
      onAccept();
      reset();
    } else if (delta < -threshold) {
      onDecline();
      reset();
    }
  };
  const handlePointerUp = () => {
    if (dragX > threshold) {
      onAccept();
    } else if (dragX < -threshold) {
      onDecline();
    }
    reset();
  };
  const handlePointerCancel = reset;

  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform"
      style={{
        transform: `translateX(${dragX}px)`,
        transition: dragging ? "none" : "transform 0.2s ease",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onClick={() => {
        if (!dragging) onAccept();
      }}
    >
      <div
        className="bg-white rounded-[15px] border-[2.5px] border-[#4db3a1] shadow-sm relative min-h-[266px] overflow-hidden flex flex-col"
      >
        {/* Content Wrapper */}
        <div className="p-5 flex-1">
          <div
            className="absolute right-3 top-3 z-10 flex items-center justify-center rounded-[10px] text-white text-xs font-normal"
            style={{ width: "97px", height: "34px", backgroundColor: isTop ? "#449B8C" : "#FEAB00" }}
          >
            {isTop ? (
              <>
                <span className="text-sm">🔥</span>
                <span className="ml-1">Great Offer</span>
              </>
            ) : (
              <span>Fair Offer</span>
            )}
          </div>

          {/* Platform + price */}
          <div className="flex items-start gap-3">
            <div className="h-14 w-14 rounded-[5px] overflow-hidden border border-black/10 bg-white relative">
              <img
                src={platformImages[offer.platform]}
                alt={offer.platform}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-[40px] leading-none text-black">${offer.payout.toFixed(2)}</p>
              <div className="inline-flex items-center px-2 py-0.5 border border-black rounded text-xs capitalize mt-1">
                {offer.type}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-4 h-px w-full bg-gray-300" />

          {/* Time / Distance / Rating Row */}
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

          {/* Divider */}
          <div className="mt-3 h-px w-full bg-gray-300" />

          {/* Locations */}
          <div className="mt-5 flex gap-5 text-[16px] text-black items-start">
            <img
              src={pinpoint}
              alt="Route"
              className="h-16 w-6 object-contain self-start"
            />
            <div className="flex flex-col justify-between py-0.5 gap-5">
              <p className="leading-tight">{offer.pickup}</p>
              <p className="leading-tight">{offer.dropoff}</p>
            </div>
          </div>
        </div>

        {/* Expanded Details Section */}
        {expanded && (
          <div className="px-5 pb-5 animate-in slide-in-from-top-2 duration-200">
             <div className="h-px w-full bg-gray-200 mb-3" />
            <ul className="space-y-2 text-sm text-[#616161] list-disc list-inside">
              {detailNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Bottom Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded((prev) => !prev);
        }}
          className="w-full h-[36px] flex items-center justify-center gap-2 bg-[#4DB3A1]/25 text-[#449B8C] text-sm font-semibold mt-auto hover:bg-[#4DB3A1]/40 transition-colors"
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
