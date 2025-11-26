import { RefreshCw, ArrowUpDown, SlidersHorizontal, Car } from 'lucide-react';

interface HeaderProps {
  onFilterClick: () => void;
  onSortClick: () => void;
  onRefresh: () => void;
  lastUpdate: string;
  offersCount: number;
}

export function Header({ onFilterClick, onSortClick, onRefresh, lastUpdate, offersCount }: HeaderProps) {
  return (
    <div className="bg-[#4db3a1] px-4 py-3 sticky top-0 z-20">
      {/* Top Row - Time */}
      <div className="flex justify-center mb-4">
        <span className="text-white text-[17px]">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-white text-[28px]">Live Offer Feed</h1>
        <div className="flex items-center gap-2">
          <button 
            onClick={onRefresh}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Refresh offers"
          >
            <RefreshCw className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={onSortClick}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowUpDown className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={onFilterClick}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between text-[14px]">
        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full">
          <Car className="w-4 h-4 text-black" strokeWidth={1.75} />
          <span className="text-black">Idle</span>
        </div>
        <span className="text-white">
          Updated {lastUpdate} · {offersCount} offers
        </span>
      </div>
    </div>
  );
}
