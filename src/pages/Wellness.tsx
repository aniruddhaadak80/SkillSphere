import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Brain, Moon, Flame, Coffee, Running } from 'lucide-react';

interface WellnessMetric {
  id: string;
  category: string;
  value: number;
  target: number;
  unit: string;
  icon: React.ElementType;
  color: string;
  progressColor: string;
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
      color: 'bg-gradient-to-br from-green-100 to-green-50 dark:from-green-700 dark:to-green-800',
      progressColor: 'bg-green-500',
    },
    {
      id: '2',
      category: 'Sleep',
      value: 7.5,
      target: 8,
      unit: 'hours',
      icon: Moon,
      color: 'bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-700 dark:to-blue-800',
      progressColor: 'bg-blue-500',
    },
    {
      id: '3',
      category: 'Mindfulness',
      value: 15,
      target: 20,
      unit: 'minutes',
      icon: Brain,
      color: 'bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-700 dark:to-purple-800',
      progressColor: 'bg-purple-500',
    },
    {
      id: '4',
      category: 'Calories Burned',
      value: 400,
      target: 500,
      unit: 'cal',
      icon: Flame,
      color: 'bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-700 dark:to-orange-800',
      progressColor: 'bg-orange-500',
    },
    {
      id: '5',
      category: 'Caffeine Intake',
      value: 2,
      target: 3,
      unit: 'cups',
      icon: Coffee,
      color: 'bg-gradient-to-br from-teal-100 to-teal-50 dark:from-teal-700 dark:to-teal-800',
      progressColor: 'bg-teal-500',
    },
    {
      id: '6',
      category: 'Running Distance',
      value: 3,
      target: 5,
      unit: 'km',
      icon: Running,
      color: 'bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-700 dark:to-pink-800',
      progressColor: 'bg-pink-500',
    },
  ]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
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
                whileHover={{ scale: 1.05, translateY: -5 }}
                className={`${metric.color} rounded-lg shadow-lg p-6 transition-all duration-200 ease-in-out`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-opacity-50 rounded-lg">
                      <Icon className="w-6 h-6 text-current" />
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
                    <motion.div
                      className={`${metric.progressColor} rounded-full h-2`}
                      style={{ width: `${progress}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>

                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {metric.value} <span className="text-sm text-gray-500 dark:text-gray-400">{metric.unit}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-6 text-white shadow-xl"
        >
          <div className="flex items-center space-x-4 mb-4">
            <Heart className="w-8 h-8 animate-pulse" />
            <h2 className="text-2xl font-bold">Daily Wellness Tips</h2>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 hover:translate-x-1 transition-transform duration-200 ease-out">
              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2" />
              <p className="hover:scale-105 transition-transform duration-200">Take a 5-minute break every hour to stretch and move around.</p>
            </li>
            <li className="flex items-start space-x-3 hover:translate-x-1 transition-transform duration-200 ease-out">
              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2" />
              <p className="hover:scale-105 transition-transform duration-200">Practice deep breathing exercises when feeling stressed.</p>
            </li>
            <li className="flex items-start space-x-3 hover:translate-x-1 transition-transform duration-200 ease-out">
              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2" />
              <p className="hover:scale-105 transition-transform duration-200">Stay hydrated by drinking water throughout the day.</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Wellness;
