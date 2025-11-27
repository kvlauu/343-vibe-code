import { BottomNav } from "./BottomNav";
import { MapView } from "./MapView";
import { MapPin } from "lucide-react";

interface MapScreenProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showNav?: boolean;
}

export function MapScreen({ activeTab, onTabChange }: MapScreenProps) {
  return (
    <div className="relative w-full min-h-screen bg-gray-50 flex flex-col max-w-[430px] mx-auto">
      {/* Map View */}
      <div className="flex-1 relative">
        <MapView className="absolute inset-0" />

        {/* Pinpoint centered */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-10">
            <MapPin className="h-10 w-10 text-[#4db3a1] fill-current" />
        </div>

        {/* Center message */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8 text-center w-full px-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <p className="text-gray-900 font-semibold text-lg mb-1">No active trip</p>
            <p className="text-gray-500 text-sm">Head to the Offers tab to find your next hustle.</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}