import React from 'react';
import { Tool } from '../../types/tool';
import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import RatingStars from './RatingStars';

interface CardProps {
  tool: Tool;
}

const Card: React.FC<CardProps> = ({ tool }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{tool.name}</h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2">{tool.description}</p>
        <RatingStars rating={tool.average_rating} />
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">{tool.pricing}</span>
          <div className="flex space-x-2">
            <button className="text-red-500 hover:text-red-600">
              <HeartIcon className="h-5 w-5" />
            </button>
            <button className="text-blue-500 hover:text-blue-600">
              <ShareIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mt-4">
          <a
            href={tool.affiliate_link}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
