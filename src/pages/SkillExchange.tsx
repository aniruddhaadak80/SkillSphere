import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Video, Calendar, Clock, Star } from 'lucide-react';

interface SkillOffer {
  id: string;
  skill: string;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  availability: string;
  duration: string;
  image: string;
}

const SkillExchange = () => {
  const [offers] = useState<SkillOffer[]>([
    {
      id: '1',
      skill: 'Spanish Conversation',
      instructor: 'Maria G.',
      level: 'Intermediate',
      rating: 4.8,
      availability: 'Weekday evenings',
      duration: '45 minutes',
      image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd',
    },
    {
      id: '2',
      skill: 'Guitar Basics',
      instructor: 'James R.',
      level: 'Beginner',
      rating: 4.9,
      availability: 'Weekends',
      duration: '60 minutes',
      image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0',
    },
    {
      id: '3',
      skill: 'Digital Photography',
      instructor: 'Emma L.',
      level: 'Advanced',
      rating: 4.7,
      availability: 'Flexible',
      duration: '90 minutes',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d',
    },
  ]);

  const getLevelColor = (level: SkillOffer['level']) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Skill Exchange Network
          </h1>
          <button className="btn btn-primary flex items-center space-x-2">
            <Share2 className="w-5 h-5" />
            <span>Offer Your Skills</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              layout
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={offer.image}
                  alt={offer.skill}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(
                    offer.level
                  )}`}
                >
                  {offer.level}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {offer.skill}
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-gray-600 dark:text-gray-300">with</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {offer.instructor}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {offer.rating}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span>{offer.availability}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{offer.duration} per session</span>
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 btn btn-primary flex items-center justify-center space-x-2">
                    <Video className="w-4 h-4" />
                    <span>Book Session</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillExchange;