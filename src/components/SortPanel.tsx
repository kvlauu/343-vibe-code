import { useState } from 'react';
import type { SortOption } from '../types';
import { X, ArrowUpDown, Check } from 'lucide-react';

interface SortPanelProps {
  currentSort: SortOption;
  onApply: (sortOption: SortOption) => void;
  onReset: () => void;
  onClose: () => void;
}

interface SortOptionConfig {
  id: SortOption;
  title: string;
  description: string;
}

const sortOptions: SortOptionConfig[] = [
  { id: 'default', title: 'Default', description: 'Newest offers first' },
  { id: 'highestPay', title: 'Highest Pay', description: 'Best payouts first' },
  { id: 'lowestPay', title: 'Lowest Pay', description: 'Lowest payouts first' },
  { id: 'shortestDistance', title: 'Shortest Distance', description: 'Closest trips first' },
  { id: 'longestDistance', title: 'Longest Distance', description: 'Farthest trips first' },
  { id: 'fastestTime', title: 'Fastest Time', description: 'Quickest deliveries first' },
  { id: 'longestTime', title: 'Longest Time', description: 'Slowest deliveries first' },
  { id: 'expiringSoon', title: 'Expiring Soon', description: 'Urgent offers first' },
];

export function SortPanel({ currentSort, onApply, onReset, onClose }: SortPanelProps) {
  const [selectedSort, setSelectedSort] = useState<SortOption>(currentSort);

  const handleApply = () => {
    onApply(selectedSort);
    onClose();
  };

  const handleReset = () => {
    setSelectedSort('default');
    onReset();
    onClose();
  };

  return (
    <div className="bg-white rounded-tl-[15px] rounded-tr-[15px] max-h-[90vh] overflow-y-auto">
      <div className="space-y-5 pb-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5 sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <ArrowUpDown className="w-7 h-7" />
            <h2 className="text-[24px]">Sort By...</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sort Options */}
        <div className="px-4 space-y-5">
          {sortOptions.map((option) => {
            const isSelected = selectedSort === option.id;
            
            return (
              <button
                key={option.id}
                onClick={() => setSelectedSort(option.id)}
                className={`w-full rounded-[14px] p-4 text-left transition-all ${
                  isSelected
                    ? 'bg-[#4db3a1] text-white'
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className={`text-[16px] ${isSelected ? 'text-white' : 'text-neutral-950'}`}>
                      {option.title}
                    </p>
                    <p className={`text-[14px] ${isSelected ? 'text-white' : 'text-[#6a7282]'}`}>
                      {option.description}
                    </p>
                  </div>
                  {isSelected && (
                    <Check className="w-5 h-5 text-white flex-shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="px-6 space-y-4 pt-2 sticky bottom-0 bg-white pb-2">
          <button
            onClick={handleApply}
            className="w-full h-[56px] bg-[#4db3a1] text-white rounded-[14px] text-[16px] hover:bg-[#45a08f] transition-colors shadow-md"
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
