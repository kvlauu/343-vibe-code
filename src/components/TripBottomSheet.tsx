import { Phone, User } from 'lucide-react';

export type TripState = 'pickup' | 'notified' | 'waiting' | 'enroute' | 'arrived';

interface TripBottomSheetProps {
  state: TripState;
  riderName: string;
  timeEstimate?: string;
  distance?: string;
  onStartHustle?: () => void;
  onComplete?: () => void;
  onContact: () => void;
  onCancel: () => void;
  onBack?: () => void;
}

export function TripBottomSheet({
  state,
  riderName,
  timeEstimate,
  distance,
  onStartHustle,
  onComplete,
  onContact,
  onCancel,
  onBack
}: TripBottomSheetProps) {
  const getMainMessage = () => {
    switch (state) {
      case 'pickup':
        return `Picking up ${riderName}`;
      case 'notified':
        return 'Rider Notified';
      case 'waiting':
        return 'Waiting for Rider';
      case 'enroute':
        return `En route with ${riderName}`;
      case 'arrived':
        return 'Arrived at dropoff';
      default:
        return '';
    }
  };

  const showTimeDistance = state === 'pickup' || state === 'enroute' || state === 'arrived';
  const showStartButton = state === 'pickup';
  const showCompleteButton = state === 'arrived';

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[20px] shadow-lg border-t border-gray-200">
      {/* Handle bar */}
      <div className="flex justify-center pt-3 pb-2">
        <div className="w-[57px] h-[3px] bg-[#AFAEAE] rounded-full" />
      </div>

      <div className="px-6 pb-6">
        {/* Time and distance (if applicable) */}
        {showTimeDistance && (
          <div className="flex items-center justify-center gap-6 mb-4">
            {timeEstimate && (
              <div className="flex items-center gap-2">
                <p className="text-[18px] text-black tracking-[-0.54px]">{timeEstimate}</p>
              </div>
            )}
            <User className="w-[30px] h-[30px] text-[#4db3a1]" />
            {distance && (
              <div className="flex items-center gap-2">
                <p className="text-[18px] text-black tracking-[-0.54px]">{distance}</p>
              </div>
            )}
          </div>
        )}

        {/* Rider name and status */}
        <div className="text-center mb-6">
          {state === 'notified' || state === 'waiting' ? (
            <>
              <p className="text-[#99a1af] text-[14px] tracking-[-0.42px] mb-2">
                {getMainMessage()}
              </p>
              <p className="text-black text-[25px] tracking-[-0.75px]">{riderName}</p>
            </>
          ) : (
            <p className="text-[#99a1af] text-[14px] tracking-[-0.42px]">
              {getMainMessage()}
            </p>
          )}
        </div>

        {/* Action buttons row */}
        <div className="flex items-center gap-3 mb-4">
          {/* Back/Contact button */}
          {onBack ? (
            <button
              onClick={onBack}
              className="w-[54px] h-[39px] bg-[#4db3a1] rounded-[18px] flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-white rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          ) : (
            <button
              onClick={onContact}
              className="flex items-center gap-2 px-4"
            >
              <Phone className="w-[17px] h-[17px] text-black" />
              <span className="text-[12px] text-black tracking-[-0.36px]">Contact</span>
            </button>
          )}

          {/* Main action button */}
          {showStartButton && (
            <button
              onClick={onStartHustle}
              className="flex-1 h-[39px] bg-[rgba(77,179,161,0.44)] rounded-[18px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            >
              <span className="text-[14px] text-black tracking-[-0.42px]">Start Hustle</span>
            </button>
          )}

          {showCompleteButton && (
            <button
              onClick={onComplete}
              className="flex-1 h-[39px] bg-[#4db3a1] rounded-[18px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            >
              <span className="text-[14px] text-white tracking-[-0.42px]">Complete Hustle</span>
            </button>
          )}

          {/* Cancel button */}
          <button
            onClick={onCancel}
            className="flex items-center gap-2 px-4"
          >
            <span className="text-[12px] text-black tracking-[-0.36px]">Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
}
