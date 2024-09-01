import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

interface RatingStarsProps {
  rating: number; // Average rating of the tool, assumed to be between 0 and 5
  maxRating?: number; // Maximum possible rating, default is 5
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, maxRating = 5 }) => {
  // Array to determine how many stars to display
  const stars = Array.from({ length: maxRating }, (_, index) => index + 1);

  return (
    <div className="flex items-center space-x-1">
      {stars.map((star) => (
        <StarIcon
          key={star}
          className={`h-5 w-5 ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingStars;
