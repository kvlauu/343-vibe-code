import type { Offer } from '../types';
import { AlertCircle } from 'lucide-react';

interface ConfirmationModalProps {
  offer: Offer;
  onAccept: () => void;
  onCancel: () => void;
}

export function ConfirmationModal({ offer, onAccept, onCancel }: ConfirmationModalProps) {
  return (
    <div className="bg-white rounded-[15px] overflow-hidden shadow-2xl">
      {/* Top Section with Teal Background */}
      <div className="bg-[#4db3a1] pt-[18px] pb-[28px] relative h-[138px]">
        <div className="flex flex-col items-center">
          {/* Gray Circle Icon */}
          <div className="w-[62px] h-[62px] bg-[#D9D9D9] rounded-full mb-3" />
          {/* Title */}
          <h2 className="text-white text-[24px] text-center tracking-[0.1px]">Accept Trip?</h2>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-4">
        {/* Offer Info */}
        <div className="text-center space-y-2">
          <p className="text-[#4a5565] text-[16px] tracking-[-0.3125px]">
            You are about to accept this offer:
          </p>
          <p className="text-neutral-950 text-[30px] tracking-[0.3955px]">
            ${offer.payout.toFixed(2)}
          </p>
          <p className="text-[#6a7282] text-[16px] tracking-[-0.3125px]">
            {offer.platform}
          </p>
        </div>

        {/* Navigation Warning */}
        <div className="bg-gray-100 border border-[#b2b2b2] rounded-[14px] p-4 flex gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-black" />
          <p className="text-black text-[14px] tracking-[-0.1504px] leading-[20px]">
            Navigation will start automatically after accepting
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button
            onClick={onAccept}
            className="w-full h-[56px] bg-[#4db3a1] text-white rounded-[14px] text-[16px] tracking-[-0.3125px] hover:bg-[#45a08f] transition-colors shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          >
            Yes, Accept
          </button>
          <button
            onClick={onCancel}
            className="w-full h-[42px] bg-gray-100 text-black rounded-[14px] text-[16px] tracking-[-0.3125px] hover:bg-gray-200 transition-colors"
          >
            No, Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
