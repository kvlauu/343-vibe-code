import { BottomNav } from "./BottomNav";
import { MapView } from "./MapView";

interface MapScreenProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showNav?: boolean;
}

export function MapScreen({ activeTab, onTabChange, showNav = false }: MapScreenProps) {
  return (
    <div className="relative w-full min-h-screen bg-gray-50 flex flex-col max-w-[430px] mx-auto">
      {/* Map View */}
      <div className="flex-1 relative">
        <MapView className="absolute inset-0" />

        {/* Center message */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-gray-600 text-[16px] mb-2">No active trips</p>
            <p className="text-gray-400 text-[14px]">Accept an offer to start navigation</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      {showNav && <BottomNav activeTab={activeTab} onTabChange={onTabChange} />}
    </div>
  );
}
