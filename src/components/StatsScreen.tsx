import {
  Clock,
  Package,
  DollarSign,
  TrendingUp,
  User,
  RefreshCw,
} from "lucide-react";
import { BottomNav } from "./BottomNav";

interface StatsScreenProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showNav?: boolean;
}

export function StatsScreen({
  activeTab,
  onTabChange,
  showNav = false,
}: StatsScreenProps) {
  const handleRefresh = () => {
    // Mock refresh action
    console.log("Refreshing stats...");
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-50 flex flex-col max-w-[430px] mx-auto">
      {/* Profile Header */}
      <div className="bg-[#4db3a1] px-6 pt-14 pb-8">
        <div className="flex items-start gap-4 mb-4">
          {/* Profile Picture */}
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0">
            <User className="w-8 h-8 text-[#4db3a1]" />
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h1 className="text-white text-[24px] tracking-[-0.3px] mb-1">
              Oliver Schneider
            </h1>
            <p className="text-[#e4e4e4] text-[14px] mb-3">Driver since Jan 2024</p>
            <div className="bg-black rounded-[4px] px-3 py-2 inline-block">
              <p className="text-white text-[12px]">Verified Driver</p>
            </div>
          </div>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            className="w-10 h-10 flex items-center justify-center"
            aria-label="Refresh stats"
          >
            <RefreshCw className="w-5 h-5 text-black" />
          </button>
        </div>

        <p className="text-white text-[12px] mt-4">Last updated: Just now</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-24 px-6 pt-6">
        {/* Section Title */}
        <h2 className="text-black text-[20px] tracking-[-0.3px] mb-5">
          Your Statistics
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Working Hours Card */}
          <div className="bg-white border border-black rounded-[15px] p-5">
            <div className="w-10 h-10 bg-[#4db3a1] rounded-[8px] flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <p className="text-[#6a7282] text-[12px] tracking-[0.3px] uppercase mb-2">
              Working Hours
            </p>
            <p className="text-black text-[30px] tracking-[0.4px] mb-1">124.5h</p>
            <p className="text-[#6a7282] text-[12px]">Last 30 days</p>
          </div>

          {/* Deliveries Card */}
          <div className="bg-white border border-black rounded-[15px] p-5">
            <div className="w-10 h-10 bg-[#4db3a1] rounded-[8px] flex items-center justify-center mb-3">
              <Package className="w-5 h-5 text-white" />
            </div>
            <p className="text-[#6a7282] text-[12px] tracking-[0.3px] uppercase mb-2">
              Deliveries
            </p>
            <p className="text-black text-[30px] tracking-[0.4px] mb-1">342</p>
            <p className="text-[#6a7282] text-[12px]">Total completed</p>
          </div>

          {/* Earnings Card */}
          <div className="bg-white border border-black rounded-[15px] p-5">
            <div className="w-10 h-10 bg-[#4db3a1] rounded-[8px] flex items-center justify-center mb-3">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <p className="text-[#6a7282] text-[12px] tracking-[0.3px] uppercase mb-2">
              Earnings
            </p>
            <p className="text-black text-[30px] tracking-[0.4px] mb-1">$4,285</p>
            <p className="text-[#6a7282] text-[12px]">Total earned</p>
          </div>

          {/* Average Rating Card */}
          <div className="bg-white border border-black rounded-[15px] p-5">
            <div className="w-10 h-10 bg-[#4db3a1] rounded-[8px] flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <p className="text-[#6a7282] text-[12px] tracking-[0.3px] uppercase mb-2">
              Avg. Rating
            </p>
            <p className="text-black text-[30px] tracking-[0.4px] mb-1">4.89</p>
            <p className="text-[#6a7282] text-[12px]">Based on reviews</p>
          </div>
        </div>

        {/* This Week Summary Card */}
        <div className="bg-white border border-black rounded-[15px] p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[#6a7282] text-[14px] tracking-[0.3px] uppercase">
              This Week
            </p>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-[#4db3a1]" />
              <p className="text-black text-[14px]">+15%</p>
            </div>
          </div>

          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-black text-[40px] tracking-[0.4px] leading-none mb-1">
                $892
              </p>
              <p className="text-[#6a7282] text-[14px]">28 deliveries</p>
            </div>
            <div className="text-right">
              <p className="text-black text-[30px] tracking-[0.4px] leading-none mb-1">
                18.5h
              </p>
              <p className="text-[#6a7282] text-[14px]">Working time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (optional) */}
      {showNav && <BottomNav activeTab={activeTab} onTabChange={onTabChange} />}
    </div>
  );
}
