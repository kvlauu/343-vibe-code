import { AlertTriangle } from 'lucide-react';

interface CancelTripModalProps {
  cancellationsThisWeek: number;
  onKeepTrip: () => void;
  onConfirmCancel: () => void;
}

export function CancelTripModal({
  cancellationsThisWeek,
  onKeepTrip,
  onConfirmCancel
}: CancelTripModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60"
        onClick={onKeepTrip}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[360px] bg-white rounded-[20px] p-6 shadow-lg">
        {/* Warning icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-black text-[24px] tracking-[-0.72px] text-center mb-3">
          Cancel Trip?
        </h2>

        {/* Penalty notice */}
        <div className="bg-red-50 border border-red-200 rounded-[14px] p-4 mb-4">
          <p className="text-red-700 text-[14px] tracking-[-0.42px] text-center leading-[20px]">
            <span className="font-semibold">⚠️ Cancellation Penalty:</span>
            <br />
            Your acceptance rate will decrease and this may affect future offer availability.
          </p>
        </div>

        {/* Cancellations this week */}
        <div className="bg-gray-50 rounded-[14px] p-4 mb-6">
          <div className="flex items-center justify-between">
            <p className="text-[#6a7282] text-[14px] tracking-[-0.42px]">
              Cancellations this week:
            </p>
            <p className="text-black text-[18px] tracking-[-0.54px]">
              {cancellationsThisWeek}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onKeepTrip}
            className="w-full h-[44px] bg-[#4db3a1] rounded-[14px] text-white text-[16px] tracking-[-0.3125px] hover:bg-[#45a08f] transition-colors"
          >
            Keep Trip
          </button>
          <button
            onClick={onConfirmCancel}
            className="w-full h-[44px] bg-white border-2 border-gray-300 rounded-[14px] text-black text-[16px] tracking-[-0.3125px] hover:bg-gray-50 transition-colors"
          >
            Confirm Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
