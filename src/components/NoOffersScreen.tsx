import { Bell, SlidersHorizontal } from 'lucide-react';

interface NoOffersScreenProps {
  type: 'empty' | 'filtered';
  onRetry?: () => void;
  onAdjustFilters?: () => void;
}

export function NoOffersScreen({ type, onRetry, onAdjustFilters }: NoOffersScreenProps) {
  return (
    <>
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-white border border-gray-200 rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-8 w-full max-w-[361px]">
        {/* Bell Icon */}
        <div className="flex justify-center mb-6">
          <Bell className="w-16 h-16 text-[#d1d5dc]" strokeWidth={1.5} />
        </div>

        {/* Content based on type */}
        {type === 'empty' ? (
          <>
            {/* Title */}
            <h2 className="text-[#101828] text-[16px] font-semibold text-center mb-4 tracking-[-0.3125px]">
              No offers available right now
            </h2>

            {/* Description */}
            <p className="text-[#6a7282] text-[14px] text-center leading-[20px] tracking-[-0.1504px] mb-6">
              The feed is currently empty. This could be due to low demand, time of day, or temporary connection issues.
            </p>

            {/* Retry Button */}
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

            {/* Auto-update message */}
            <p className="text-[#99a1af] text-[14px] text-center leading-[20px] tracking-[-0.1504px]">
              Feed updates automatically every 15 seconds
            </p>
          </>
        ) : (
          <>
            {/* Title */}
            <h2 className="text-[#101828] text-[16px] font-semibold text-center mb-4 tracking-[-0.3125px]">
              No offers match your filters
            </h2>

            {/* Description */}
            <p className="text-[#6a7282] text-[14px] text-center leading-[20px] tracking-[-0.1504px] mb-6">
              Try adjusting your filters to see more offers
            </p>

            {/* Adjust Filters Button */}
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
        </>

  );
}