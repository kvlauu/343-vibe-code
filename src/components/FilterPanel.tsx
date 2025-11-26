import { useState } from 'react';
import type { FilterState } from '../types';
import { X, SlidersHorizontal } from 'lucide-react';

interface FilterPanelProps {
  filters: FilterState;
  onApply: (filters: FilterState) => void;
  onReset: () => void;
  onClose: () => void;
}

export function FilterPanel({ filters, onApply, onReset, onClose }: FilterPanelProps) {
  const [localFilters, setLocalFilters] = useState<FilterState>(filters);

  const togglePlatform = (platform: keyof FilterState['platforms']) => {
    setLocalFilters({
      ...localFilters,
      platforms: {
        ...localFilters.platforms,
        [platform]: !localFilters.platforms[platform]
      }
    });
  };

  const toggleOfferType = (type: keyof FilterState['offerTypes']) => {
    setLocalFilters({
      ...localFilters,
      offerTypes: {
        ...localFilters.offerTypes,
        [type]: !localFilters.offerTypes[type]
      }
    });
  };

  const handleRadiusChange = (value: number) => {
    setLocalFilters({
      ...localFilters,
      radiusFromLocation: value
    });
  };

  const handleDistanceChange = (value: number) => {
    setLocalFilters({
      ...localFilters,
      distanceFromTrip: value
    });
  };

  const handleApply = () => {
    onApply(localFilters);
  };

  const handleReset = () => {
    onReset();
    onClose();
  };

  return (
    <div className="bg-white rounded-tl-[15px] rounded-tr-[15px] max-h-[90vh] overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="w-6 h-6" />
            <h2 className="text-[24px]">Filter By...</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Platforms */}
        <div className="space-y-3">
          <p className="text-[#364153] text-[14px]">Platforms</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => togglePlatform('Uber')}
              className={`h-[34px] rounded-[9px] text-[16px] transition-colors ${
                localFilters.platforms.Uber
                  ? 'bg-[#4db3a1] text-white border-[1.5px] border-[#4db3a1]'
                  : 'bg-gray-100 text-black'
              }`}
            >
              Uber
            </button>
            <button
              onClick={() => togglePlatform('Lyft')}
              className={`h-[34px] rounded-[9px] text-[16px] transition-colors relative ${
                localFilters.platforms.Lyft
                  ? 'bg-[#4db3a1] text-white border-[1.5px] border-[#4db3a1]'
                  : 'bg-gray-100 text-black'
              }`}
            >
              Lyft
              {!localFilters.platforms.Lyft && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-[10px]">!</span>
                </div>
              )}
            </button>
            <button
              onClick={() => togglePlatform('DoorDash')}
              className={`h-[34px] rounded-[9px] text-[16px] transition-colors ${
                localFilters.platforms.DoorDash
                  ? 'bg-[#4db3a1] text-white border-[1.5px] border-[#4db3a1]'
                  : 'bg-gray-100 text-black'
              }`}
            >
              DoorDash
            </button>
            <button
              onClick={() => togglePlatform('SkipTheDishes')}
              className={`h-[34px] rounded-[9px] text-[16px] transition-colors ${
                localFilters.platforms.SkipTheDishes
                  ? 'bg-[#4db3a1] text-white border-[1.5px] border-[#4db3a1]'
                  : 'bg-gray-100 text-black'
              }`}
            >
              SkipTheDishes
            </button>
          </div>
        </div>

        {/* Offer Type */}
        <div className="space-y-3">
          <p className="text-[#364153] text-[14px]">Offer Type</p>
          <div className="flex gap-3">
            <button
              onClick={() => toggleOfferType('ride')}
              className={`flex-1 h-[51px] rounded-[14px] text-[16px] transition-colors ${
                localFilters.offerTypes.ride
                  ? 'bg-[#4db3a1] text-white border-[1.5px] border-[#4db3a1]'
                  : 'bg-gray-100 text-black'
              }`}
            >
              Ride
            </button>
            <button
              onClick={() => toggleOfferType('delivery')}
              className={`flex-1 h-[51px] rounded-[14px] text-[16px] transition-colors ${
                localFilters.offerTypes.delivery
                  ? 'bg-[#4db3a1] text-white border-[1.5px] border-[#4db3a1]'
                  : 'bg-gray-100 text-black'
              }`}
            >
              Delivery
            </button>
          </div>
        </div>

        {/* Radius from current location */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-[#364153] text-[14px]">Radius from current location</p>
            <p className="text-black">{localFilters.radiusFromLocation} km</p>
          </div>
          <div className="space-y-2">
            <input
              type="range"
              min={localFilters.radiusMin}
              max={localFilters.radiusMax}
              value={localFilters.radiusFromLocation}
              onChange={(e) => handleRadiusChange(Number(e.target.value))}
              className="w-full h-[6px] bg-gray-200 rounded-full appearance-none cursor-pointer teal-slider"
            />
            <div className="flex justify-between text-[#6a7282] text-[12px]">
              <span>{localFilters.radiusMin} km</span>
              <span>{localFilters.radiusMax} km</span>
            </div>
          </div>
        </div>

        {/* Distance from trip */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-[#364153] text-[14px]">Distance from trip</p>
            <p className="text-black">{localFilters.distanceFromTrip} km</p>
          </div>
          <div className="space-y-2">
            <input
              type="range"
              min={localFilters.distanceMin}
              max={localFilters.distanceMax}
              value={localFilters.distanceFromTrip}
              onChange={(e) => handleDistanceChange(Number(e.target.value))}
              className="w-full h-[6px] bg-gray-200 rounded-full appearance-none cursor-pointer teal-slider"
            />
            <div className="flex justify-between text-[#6a7282] text-[12px]">
              <span>{localFilters.distanceMin} km</span>
              <span>{localFilters.distanceMax} km</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 pt-2">
          <button
            onClick={handleApply}
            className="w-full h-[56px] bg-[#4db3a1] text-white rounded-[14px] text-[16px] hover:bg-[#45a08f] transition-colors"
          >
            Apply Filters
          </button>
          <button
            onClick={handleReset}
            className="w-full h-[56px] bg-gray-100 text-[#101828] rounded-[14px] text-[16px] hover:bg-gray-200 transition-colors"
          >
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
}
