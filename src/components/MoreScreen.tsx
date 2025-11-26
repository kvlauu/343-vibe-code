import { ArrowLeft, MessageCircle, AlertCircle, HelpCircle } from "lucide-react";
import { BottomNav } from "./BottomNav";

interface MoreScreenProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showNav?: boolean;
}

export function MoreScreen({ activeTab, onTabChange, showNav = false }: MoreScreenProps) {
  const handleLiveChat = () => {
    console.log("Opening live chat...");
  };

  const handleReportProblem = () => {
    console.log("Opening report problem...");
  };

  const handleFAQ = () => {
    console.log("Opening FAQ...");
  };

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col max-w-[430px] mx-auto">
      {/* Header */}
      <div className="bg-[#4db3a1] px-4 py-4 flex items-center gap-4">
        <button
          onClick={() => onTabChange("home")}
          className="w-9 h-9 flex items-center justify-center"
          aria-label="Back to home"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-white text-[24px] tracking-[0.07px]">More</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-24 px-3 pt-10">
        <div className="space-y-4">
          {/* Live Chat Card */}
          <button
            onClick={handleLiveChat}
            className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-[17px] w-full text-left"
          >
            <div className="flex items-start gap-3 mb-4">
              <MessageCircle className="w-6 h-6 text-black flex-shrink-0" />
              <div className="flex-1">
                <p className="text-[#0f172b] text-[16px] tracking-[-0.3125px] leading-[24px]">
                  Live Chat
                </p>
              </div>
            </div>
            <p className="text-[#45556c] text-[14px] tracking-[-0.3125px] leading-[24px] mb-4">
              Get instant help from our support team. You can also call us +1 800 000 0000
            </p>
            <div className="inline-flex items-center gap-3 bg-green-100 rounded-[8px] px-[9px] py-[2px]">
              <div className="w-2 h-2 rounded-full bg-[#00a63e]" />
              <p className="text-[#016630] text-[12px] leading-[16px]">Online now</p>
            </div>
          </button>

          {/* Report a Problem Card */}
          <button
            onClick={handleReportProblem}
            className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-[25px] w-full text-left"
          >
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-black flex-shrink-0" />
              <p className="text-[#0f172b] text-[16px] tracking-[-0.3125px] leading-[24px]">
                Report a Problem
              </p>
            </div>
          </button>

          {/* FAQ Card */}
          <button
            onClick={handleFAQ}
            className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-[25px] w-full text-left"
          >
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-black flex-shrink-0" />
              <p className="text-[#0f172b] text-[16px] tracking-[-0.3125px] leading-[24px]">
                Frequently Asked Questions
              </p>
            </div>
          </button>

          {/* Contact Information */}
          <div className="pt-6 px-6">
            <p className="text-[#45556c] text-[16px] tracking-[-0.3125px] leading-[24px] mb-0">
              support@deliverysmart.app
            </p>
            <p className="text-[#45556c] text-[16px] tracking-[-0.3125px] leading-[24px]">
              +1 800 000 0000
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      {showNav && <BottomNav activeTab={activeTab} onTabChange={onTabChange} />}
    </div>
  );
}
