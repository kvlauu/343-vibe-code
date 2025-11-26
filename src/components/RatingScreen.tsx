import { useState } from 'react';
import { Star } from 'lucide-react';

interface RatingScreenProps {
  riderName: string;
  onRate: (rating: number) => void;
}

export function RatingScreen({ riderName, onRate }: RatingScreenProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRate = () => {
    if (rating > 0) {
      onRate(rating);
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-start pt-16 px-6">
      {/* Question */}
      <p className="text-[#99a1af] text-[25px] tracking-[-0.75px] mb-8">
        How was your rider?
      </p>

      {/* Rider name */}
      <p className="text-black text-[40px] tracking-[-1.2px] mb-12">
        {riderName}
      </p>

      {/* Star rating */}
      <div className="flex gap-4 mb-20">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="transition-transform hover:scale-110"
          >
            <Star
              className="w-12 h-12"
              fill={star <= (hoverRating || rating) ? '#4db3a1' : 'none'}
              stroke={star <= (hoverRating || rating) ? '#4db3a1' : '#d1d5dc'}
              strokeWidth={2}
            />
          </button>
        ))}
      </div>

      {/* Rate button */}
      <button
        onClick={handleRate}
        disabled={rating === 0}
        className="w-full max-w-[345px] h-[44px] bg-[#4db3a1] rounded-[18px] text-white text-[14px] tracking-[-0.42px] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mt-auto mb-32"
      >
        Rate Rider
      </button>
    </div>
  );
}
