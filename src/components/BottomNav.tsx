import { Home, Zap, Map, BarChart3, MoreHorizontal } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'offers', label: 'Offers', icon: Zap },
    { id: 'map', label: 'Map', icon: Map },
    { id: 'stats', label: 'Stats', icon: BarChart3 },
    { id: 'more', label: 'More', icon: MoreHorizontal },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-[430px] mx-auto">
      <div className="flex items-center justify-around h-20 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center gap-1 flex-1 py-2 transition-colors"
            >
              <Icon 
                className={`w-6 h-6 ${
                  isActive ? 'text-black' : 'text-gray-400'
                }`}
                strokeWidth={isActive ? 2 : 1.5}
              />
              <span className={`text-[11px] ${
                isActive ? 'text-black' : 'text-gray-400'
              }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
