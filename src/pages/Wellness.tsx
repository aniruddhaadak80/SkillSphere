import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Brain, Moon } from 'lucide-react';

interface WellnessMetric {
  id: string;
  category: string;
  value: number;
  target: number;
  unit: string;
  icon: React.ElementType;
}

const Wellness = () => {
  const [metrics] = useState<WellnessMetric[]>([
    {
      id: '1',
      category: 'Steps',
      value: 8432,
      target: 10000,
      unit: 'steps',
      icon: Activity,
    },
    {
      id: '2',
      category: 'Sleep',
      value: 7.5,
      target: 8,
      unit: 'hours',
      icon: Moon,
    },
    {
      id: '3',
      category: 'Mindfulness',
      value: 15,
      target: 20,
      unit: 'minutes',
      icon: Brain,
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
          Wellness Companion
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            const progress = (metric.value / metric.target) * 100;

            return (
              <motion.div
                key={metric.id}
                layout
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {metric.category}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Target: {metric.target} {metric.unit}
                  </span>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-300">Progress</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-blue-500 rounded-full h-2"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {metric.value} <span className="text-sm text-gray-500">{metric.unit}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 text-white">
          <div className="flex items-center space-x-4 mb-4">
            <Heart className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Daily Wellness Tips</h2>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2" />
              <p>Take a 5-minute break every hour to stretch and move around</p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2" />
              <p>Practice deep breathing exercises when feeling stressed</p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2" />
              <p>Stay hydrated by drinking water throughout the day</p>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Wellness;