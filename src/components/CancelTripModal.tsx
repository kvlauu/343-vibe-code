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
  const maxCancellations = 3;
  // Calculate remaining, ensuring it doesn't go below 0
  const remaining = Math.max(0, maxCancellations - cancellationsThisWeek);
  // Calculate percentage for the progress bar
  const progressPercentage = Math.min(100, (cancellationsThisWeek / maxCancellations) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60"
        onClick={onKeepTrip}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[360px] bg-white rounded-[20px] p-6 shadow-lg flex flex-col items-center">
        {/* Warning icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-[#FFF9C2] flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-[#D08800]" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-black text-[24px] tracking-[-0.72px] text-center mb-3 font-bold">
          Cancel Trip?
        </h2>

        {/* Penalty notice */}
        <div className="bg-[#FEFCE8] border border-[#FEF186] rounded-[14px] p-4 mb-6 w-full">
          <p className="text-black text-[14px] tracking-[-0.42px] text-center leading-[20px]">
            <span className="font-semibold">⚠️ Cancellation Penalty:</span>
            <br />
            Your acceptance rate will decrease and this may affect future offer availability.
          </p>
        </div>

        {/* Cancellations this week (Stats Box) */}
        <div className="w-[305px] h-[94px] border border-[#D1D5DC] rounded-[14px] p-4 mb-6 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <p className="text-black text-[14px] font-medium">
              Cancellations this week:
            </p>
            <p className="text-black text-[12px]">
              {cancellationsThisWeek}/{maxCancellations}
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="w-[276px] h-[9px] bg-gray-200 rounded-full overflow-hidden mb-2 mx-auto">
            <div 
              className="h-full bg-[#EAB308] rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <p className="text-center text-[#6a7282] text-[10px]">
            {remaining} cancellations left before penalty
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-4 w-full justify-center">
          <button
            onClick={onKeepTrip}
            className="w-[128.5px] h-[42px] bg-black rounded-[50px] text-white text-[14px] font-medium hover:bg-gray-800 transition-colors"
          >
            Keep Trip
          </button>
          <button
            onClick={onConfirmCancel}
            className="w-[128.5px] h-[42px] bg-white border border-[#FF0000] rounded-[50px] text-[#FF0000] text-[14px] font-medium hover:bg-red-50 transition-colors"
          >
            x Confirm Cancel
          </button>
        </div>
      </div>
    </div>
  );
}