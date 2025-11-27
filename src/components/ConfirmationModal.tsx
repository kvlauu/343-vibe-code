import { useEffect, useState, useRef, useLayoutEffect, useMemo } from 'react';
import type { Offer } from '../types';
import { AlertCircle } from 'lucide-react';
import uberLogo from "@/assets/uber-icon.svg";
import lyftLogo from "@/assets/lyft.png";
import doordashLogo from "@/assets/doordash.svg";
import skipLogo from "@/assets/skip.png";

interface ConfirmationModalProps {
  offer: Offer;
  onAccept: () => void;
  onCancel: () => void;
}

export function ConfirmationModal({ offer, onAccept, onCancel }: ConfirmationModalProps) {
  const DURATION = 15;
  const [secondsLeft, setSecondsLeft] = useState(DURATION);
  const [isFilling, setIsFilling] = useState(false);
  
  // Refs for stability and layout measurements
  const onAcceptRef = useRef(onAccept);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = useState(0);

  // Keep the callback ref current to avoid resetting the timer effect
  useEffect(() => {
    onAcceptRef.current = onAccept;
  }, [onAccept]);

  // Measure button width to align the text layers perfectly
  useLayoutEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
    // Optional: Add resize listener if modal can change size dynamically
    const handleResize = () => {
      if (buttonRef.current) setButtonWidth(buttonRef.current.offsetWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset logic when offer changes
  useEffect(() => {
    setSecondsLeft(DURATION);
    setIsFilling(false);
    const timeout = setTimeout(() => setIsFilling(true), 50);
    return () => clearTimeout(timeout);
  }, [offer]);

  // Countdown Logic (Decoupled from onAccept to prevent "stuck" timer)
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onAcceptRef.current(); // Call the latest ref
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures timer doesn't reset unnecessarily

  const logo = useMemo(() => {
    const map: Record<Offer["platform"], string> = {
      Uber: uberLogo,
      Lyft: lyftLogo,
      DoorDash: doordashLogo,
      SkipTheDishes: skipLogo,
    };
    return map[offer.platform];
  }, [offer.platform]);

  return (
    <div className="bg-white rounded-[15px] overflow-hidden shadow-2xl w-full max-w-md mx-auto">
      {/* Top Section */}
      <div className="bg-[#4db3a1] pt-[18px] pb-[28px] relative h-[138px]">
        <div className="flex flex-col items-center">
          <div className="w-[62px] h-[62px] bg-white rounded-full mb-3 overflow-hidden flex items-center justify-center">
            {logo && (
              <img
                src={logo}
                alt={offer.platform}
                className="h-full w-full object-contain"
              />
            )}
          </div>
          <h2 className="text-white text-[24px] text-center tracking-[0.1px] font-semibold">Accept Trip?</h2>
        </div>
      </div>

      <div className="px-4 py-6 space-y-4">
        {/* Offer Info */}
        <div className="text-center space-y-2">
          <p className="text-[#4a5565] text-[16px] tracking-[-0.3125px]">
            You are about to accept this offer:
          </p>
          <p className="text-neutral-950 text-[30px] font-bold tracking-[0.3955px]">
            ${offer.payout.toFixed(2)}
          </p>
          <p className="text-[#6a7282] text-[16px] tracking-[-0.3125px]">
            {offer.platform}
          </p>
        </div>

        {/* Warning */}
        <div className="bg-gray-100 border border-[#b2b2b2] rounded-[14px] p-4 flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-black" />
          <p className="text-black text-[14px] tracking-[-0.1504px] leading-[20px]">
            Navigation will start automatically after accepting
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button
            ref={buttonRef}
            onClick={() => onAcceptRef.current()}
            className="w-full h-[56px] rounded-[14px] text-[16px] tracking-[-0.3125px] relative overflow-hidden border border-[#4db3a1] bg-[#bfe5dd] group"
          >
            {/* LAYER 1: Base Text (Dark Teal) - Always visible in the background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-semibold text-[#1a5c50]">
                Auto accepts in {secondsLeft}s
              </span>
            </div>

            {/* LAYER 2: The Filling Mask (Dark Aqua Background + White Text) */}
            <div
              className="absolute inset-y-0 left-0 bg-[#4db3a1] overflow-hidden ease-linear"
              style={{
                width: isFilling ? '100%' : '0%',
                transitionProperty: 'width',
                transitionDuration: `${DURATION}s`,
              }}
            >
              {/* Inner Container: Must match the parent button's width exactly 
                 so the text aligns perfectly with the layer below.
              */}
              <div 
                className="h-full flex items-center justify-center"
                style={{ width: buttonWidth ? `${buttonWidth}px` : '100%' }}
              >
                <span className="font-semibold text-white">
                  Auto accepts in {secondsLeft}s
                </span>
              </div>
            </div>
          </button>
          
          <button
            onClick={onCancel}
            className="w-full text-gray-600 hover:text-gray-800 underline text-[14px] tracking-[-0.1px] py-2"
          >
            Cancel Trip
          </button>
        </div>
      </div>
    </div>
  );
}
