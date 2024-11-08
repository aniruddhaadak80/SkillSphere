import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Brain, Moon, Droplet, Sun, Leaf } from 'lucide-react';

interface WellnessMetric {
  id: string;
  category: string;
  value: number;
  target: number;
  unit: string;
  icon: React.ElementType;
  bgColor: string;
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
      bgColor: 'from-blue-100 to-blue-50',
      progressColor: 'bg-blue-500',
    },
    {
      id: '2',
      category: 'Sleep',
      value: 7.5,
      target: 8,
      unit: 'hours',
      icon: Moon,
      bgColor: 'from-purple-100 to-purple-50',
      progressColor: 'bg-purple-500',
    },
    {
      id: '3',
      category: 'Mindfulness',
      value: 15,
      target: 20,
      unit: 'minutes',
      icon: Brain,
      bgColor: 'from-green-100 to-green-50',
      progressColor: 'bg-green-500',
    },
    {
      id: '4',
      category: 'Hydration',
      value: 2.3,
      target: 3,
      unit: 'liters',
      icon: Droplet,
      bgColor: 'from-teal-100 to-teal-50',
      progressColor: 'bg-teal-500',
    },
    {
      id: '5',
      category: 'Sunlight',
      value: 45,
      target: 60,
      unit: 'minutes',
      icon: Sun,
      bgColor: 'from-yellow-100 to-yellow-50',
      progressColor: 'bg-yellow-500',
    },
    {
      id: '6',
      category: 'Recycling',
      value: 4,
      target: 5,
      unit: 'items',
      icon: Leaf,
      bgColor: 'from-pink-100 to-pink-50',
      progressColor: 'bg-pink-500',
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto"
    >
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
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${metric.bgColor} rounded-lg shadow-lg p-6`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-opacity-20 rounded-lg">
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
                      className={`rounded-full h-2 ${metric.progressColor}`}
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
      </div>
    </motion.div>
  );
};

export default Wellness;
