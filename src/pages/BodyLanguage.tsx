import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, Camera, MessageSquare, BarChart } from 'lucide-react';

interface Feedback {
  id: string;
  aspect: string;
  score: number;
  suggestion: string;
}

const BodyLanguage = () => {
  const [feedbacks] = useState<Feedback[]>([
    {
      id: '1',
      aspect: 'Posture',
      score: 85,
      suggestion: 'Great upright posture! Try to maintain shoulder alignment.',
    },
    {
      id: '2',
      aspect: 'Hand Gestures',
      score: 70,
      suggestion: 'Use more open palm gestures to appear more engaging.',
    },
    {
      id: '3',
      aspect: 'Eye Contact',
      score: 90,
      suggestion: 'Excellent eye contact! Keep scanning the room naturally.',
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Body Language Coach
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 aspect-video flex items-center justify-center">
            <div className="text-center">
              <Camera className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-300">
                Camera feed will appear here
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Real-time Analysis
              </h2>
              
              {feedbacks.map((feedback) => (
                <div key={feedback.id} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300">
                      {feedback.aspect}
                    </span>
                    <span className="text-blue-500 font-semibold">
                      {feedback.score}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                    <div
                      className="bg-blue-500 rounded-full h-2"
                      style={{ width: `${feedback.score}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feedback.suggestion}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600">
                <Video className="w-5 h-5" />
                <span>Start Recording</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
                <BarChart className="w-5 h-5" />
                <span>View History</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BodyLanguage;