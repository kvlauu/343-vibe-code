import { ArrowLeft, ArrowUp } from 'lucide-react';

interface NavigationHeaderProps {
  streetName: string;
  distance: string;
  direction: 'left' | 'right' | 'straight';
  onBack?: () => void;
}

export function NavigationHeader({ streetName, distance, direction, onBack }: NavigationHeaderProps) {
  const getDirectionIcon = () => {
    switch (direction) {
      case 'left':
        return <ArrowLeft className="w-10 h-10" />;
      case 'right':
        return <ArrowLeft className="w-10 h-10 rotate-180" />;
      case 'straight':
      default:
        return <ArrowUp className="w-10 h-10" />;
    }
  };

  return (
    <div className="relative w-full">
      {onBack && (
        <button
          onClick={onBack}
          className="absolute left-4 top-6 z-10 rounded-full bg-white/80 p-2 text-black shadow"
          aria-label="Back"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      )}
      <div className="bg-[#4db3a1] rounded-b-[25px] px-6 pt-4 pb-8 text-white relative overflow-hidden">
        {/* Top status bar */}
        <div className="flex items-center justify-between pb-4">
          <p className="text-[16px] tracking-[-0.3px]">12:00</p>
          <div className="flex gap-1 items-center">
            <div className="flex gap-0.5">
              <div className="w-1 h-2 bg-white rounded-sm" />
              <div className="w-1 h-3 bg-white rounded-sm" />
              <div className="w-1 h-4 bg-white rounded-sm" />
              <div className="w-1 h-4 bg-white rounded-sm" />
            </div>
            <svg className="w-4 h-4" fill="white" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100 4 2 2 0 000-4zm0-8C5.03 4 1 7.03 1 11h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.97-4.03-7-9-7z"/>
            </svg>
            <div className="w-6 h-3 border border-white rounded-sm relative">
              <div className="absolute inset-0.5 bg-white rounded-sm" />
              <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-white rounded-r" />
            </div>
          </div>
        </div>

        {/* Main navigation header */}
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-[51px] h-[51px] flex items-center justify-center text-white">
            {getDirectionIcon()}
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#fbf7f6] text-[20px] tracking-[-0.6px]">{distance}</p>
            <p className="text-white text-[30px] tracking-[-0.9px]">{streetName}</p>
          </div>
        </div>

        {/* Next turn indicator */}
        <div className="absolute left-6 bottom-[-14px]">
          <div className="flex items-center gap-3 bg-[#345a53] px-3 py-2 rounded-[12px]">
            <p className="text-[#fbf7f6] text-[15px] tracking-[-0.45px]">Then</p>
            <ArrowUp className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
