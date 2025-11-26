import type { Offer } from '../types';
import { Clock, Navigation, X, MapPin } from 'lucide-react';
import uberLogo from "@/assets/uber-icon.svg";
import lyftLogo from "@/assets/lyft.png";
import doordashLogo from "@/assets/doordash.svg";
import skipLogo from "@/assets/skip.png";

interface OfferCardProps {
  offer: Offer;
  onAccept: (offer: Offer) => void;
  onDecline: (offerId: string) => void;
}

export function OfferCard({ offer, onAccept, onDecline }: OfferCardProps) {
  const formatPayout = (amount: number) => {
    return `$${amount.toFixed(2)}`;
  };

  const getPlatformLogo = (platform: string) => {
    const logos: Record<string, string> = {
      Uber: uberLogo,
      Lyft: lyftLogo,
      DoorDash: doordashLogo,
      SkipTheDishes: skipLogo,
    };
    return logos[platform];
  };

  return (
    <div className="bg-white rounded-[15px] shadow-md overflow-hidden relative">
      {/* Close Button */}
      <button
        onClick={() => onDecline(offer.id)}
        className="absolute right-3 top-3 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors"
      >
        <X className="w-5 h-5 text-black" />
      </button>

      {/* Card Content */}
      <div className="p-5 space-y-4">
        {/* Platform Logo */}
        <div className="flex items-start">
          <div className="w-10 h-10 bg-white rounded border border-gray-200 flex items-center justify-center overflow-hidden">
            {getPlatformLogo(offer.platform) ? (
              <img
                src={getPlatformLogo(offer.platform)}
                alt={offer.platform}
                className="max-h-full max-w-full object-contain"
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
        <div className="space-y-2 border-t border-gray-200 pt-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#4db3a1] flex-shrink-0" fill="#4db3a1" />
            <span className="text-[14px]">{offer.pickup}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#4db3a1] flex-shrink-0" fill="#4db3a1" />
            <span className="text-[14px]">{offer.dropoff}</span>
          </div>
        </div>

        {/* Accept Button */}
        <button
          onClick={() => onAccept(offer)}
          className="w-full h-[50px] bg-[#4db3a1] text-white rounded-[14px] text-[16px] hover:bg-[#45a08f] transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
