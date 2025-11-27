import { RefreshCw, ArrowUpDown, SlidersHorizontal } from 'lucide-react';
import loadingImg from "@/assets/loading.png";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col max-w-[430px] mx-auto">
      {/* Header - Same as main app */}
      <div className="bg-[#4db3a1] px-4 py-3 sticky top-0 z-10">
        {/* Top Row - Time */}
        <div className="flex justify-center mb-4">
          <span className="text-white text-[17px]">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-white text-[24px] tracking-[0.1px]">Live Offer Feed</h1>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full transition-colors opacity-50">
              <RefreshCw className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 rounded-full transition-colors opacity-50">
              <ArrowUpDown className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 rounded-full transition-colors opacity-50">
              <SlidersHorizontal className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between text-[14px]">
          <div className="flex items-center gap-2 bg-[#f3f4f0] px-3 py-1 rounded-full">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" stroke="black" strokeWidth="1.5"/>
            </svg>
            <span className="text-black text-[14px] tracking-[-0.1504px]">Idle</span>
          </div>
          <span className="text-white text-[14px] tracking-[-0.1504px]">Updated just now</span>
        </div>
      </div>

      {/* Loading Content */}
      <div className="flex-1 flex items-center justify-center">
        <img src={loadingImg} alt="Loading offers" className="w-64 h-auto" />
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-black">
        <div className="flex items-center justify-around h-20 px-2">
          <button className="flex flex-col items-center justify-center gap-1 flex-1 py-2 opacity-50">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#99A1AF" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-[12px] text-[#99a1af]">Home</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-1 flex-1 py-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[12px] text-black">Offers</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-1 flex-1 py-2 opacity-50">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#99A1AF" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-[12px] text-[#99a1af]">Map</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-1 flex-1 py-2 opacity-50">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#99A1AF" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-[12px] text-[#99a1af]">Stats</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-1 flex-1 py-2 opacity-50">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#99A1AF" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
            <span className="text-[12px] text-[#99a1af]">More</span>
          </button>
        </div>
      </div>
    </div>
  );
}
