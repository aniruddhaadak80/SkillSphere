import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Clock, Users, ThumbsUp } from 'lucide-react';

interface TravelTip {
  id: string;
  location: string;
  title: string;
  description: string;
  rating: number;
  author: string;
  date: string;
  likes: number;
  image: string;
}

const initialTips: TravelTip[] = [
  {
    id: '1',
    location: 'Paris, France',
    title: 'Hidden Café Gems',
    description: 'Discover these amazing local cafés away from tourist spots...',
    rating: 4.8,
    author: 'Travel Explorer',
    date: '2 days ago',
    likes: 342,
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
  },
  {
    id: '2',
    location: 'Tokyo, Japan',
    title: 'Local Market Guide',
    description: 'Navigate the bustling markets like a local with these tips...',
    rating: 4.9,
    author: 'Culture Seeker',
    date: '1 week ago',
    likes: 567,
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26',
  },
  {
    id: '3',
    location: 'New York, USA',
    title: 'Budget Art Scene',
    description: "Experience NYC's vibrant art scene without breaking the bank...",
    rating: 4.7,
    author: 'Urban Explorer',
    date: '3 days ago',
    likes: 289,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
  },
];

const TravelTips = () => {
  const [tips] = useState<TravelTip[]>(initialTips);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Travel Tips
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <motion.div
              key={tip.id}
              layout
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-full px-3 py-1 flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {tip.location}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {tip.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {tip.rating}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {tip.likes}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{tip.author}</span>
                  <span>{tip.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TravelTips;