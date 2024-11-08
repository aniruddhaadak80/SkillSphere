import React, { useState } from 'react';
import { motion } from 'framer-motion';
 import { Heart, Activity, Brain, Moon, Sun, Smile ,Music, Droplet, Flame,Coffee, Star, Cloud, Battery, Feather, Leaf, Wind ,Zap} from 'lucide-react';

interface WellnessMetric {
  id: string;
  category: string;
  value: number;
  target: number;
  unit: string;
  icon: React.ElementType;
  colorClass: string;
}

const Wellness = () => {
  const [metrics] = useState<WellnessMetric[]>([
    { id: '1', category: 'Steps', value: 8432, target: 10000, unit: 'steps', icon: Activity, colorClass: 'bg-blue-500' },
    { id: '2', category: 'Sleep', value: 7.5, target: 8, unit: 'hours', icon: Moon, colorClass: 'bg-indigo-500' },
    { id: '3', category: 'Mindfulness', value: 15, target: 20, unit: 'minutes', icon: Brain, colorClass: 'bg-purple-500' },
    { id: '4', category: 'Hydration', value: 2.3, target: 3, unit: 'liters', icon: Droplet, colorClass: 'bg-teal-500' },
    { id: '5', category: 'Sunlight', value: 40, target: 60, unit: 'minutes', icon: Sun, colorClass: 'bg-yellow-500' },
    { id: '6', category: 'Calories Burned', value: 320, target: 500, unit: 'calories', icon: Flame, colorClass: 'bg-orange-500' },
    { id: '7', category: 'Air Quality', value: 90, target: 100, unit: 'AQI', icon: Cloud, colorClass: 'bg-gray-500' },
    { id: '8', category: 'Battery Health', value: 85, target: 100, unit: '%', icon: Battery, colorClass: 'bg-green-500' },
    { id: '9', category: 'Weight Management', value: 72, target: 75, unit: 'kg', icon: Feather, colorClass: 'bg-pink-500' },
    { id: '10', category: 'Carbon Footprint', value: 2.5, target: 5, unit: 'tons', icon: Leaf, colorClass: 'bg-lime-500' },
    { id: '11', category: 'Wind Exposure', value: 12, target: 20, unit: 'minutes', icon: Wind, colorClass: 'bg-cyan-500' },
    { id: '12', category: 'Mental Health', value: 80, target: 100, unit: '%', icon: Brain, colorClass: 'bg-pink-600' },
    { id: '13', category: 'Mood Tracking', value: 7, target: 10, unit: 'mood score', icon: Heart, colorClass: 'bg-red-500' },
    { id: '14', category: 'Exercise', value: 30, target: 45, unit: 'minutes', icon: Flame, colorClass: 'bg-gradient-to-br from-red-400 to-yellow-500' },
  { id: '15', category: 'Heart Health', value: 75, target: 80, unit: 'bpm', icon: Heart, colorClass: 'bg-gradient-to-br from-pink-400 to-red-500' },
  { id: '16', category: 'Meditation', value: 20, target: 30, unit: 'minutes', icon: Smile, colorClass: 'bg-gradient-to-br from-indigo-400 to-blue-500' },
  { id: '17', category: 'Productivity', value: 5, target: 8, unit: 'hours', icon: Coffee, colorClass: 'bg-gradient-to-br from-yellow-400 to-orange-500' },
  { id: '18', category: 'Music Listening', value: 60, target: 90, unit: 'minutes', icon: Music, colorClass: 'bg-gradient-to-br from-teal-400 to-green-500' },
  { id: '19', category: 'Energy Levels', value: 80, target: 100, unit: '%', icon: Zap, colorClass: 'bg-gradient-to-br from-lime-400 to-green-600' },
  { id: '20', category: 'Outdoor Time', value: 40, target: 60, unit: 'minutes', icon: Leaf, colorClass: 'bg-gradient-to-br from-green-400 to-teal-500' },
  { id: '21', category: 'Self-Care', value: 50, target: 60, unit: 'minutes', icon: Star, colorClass: 'bg-gradient-to-br from-purple-400 to-pink-500' },
  ]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Wellness Companion</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            const progress = (metric.value / metric.target) * 100;

            return (
              <motion.div
                key={metric.id}
                layout
                whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                className={`rounded-lg shadow-lg p-6 ${metric.colorClass} bg-opacity-10 dark:bg-opacity-20`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${metric.colorClass}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{metric.category}</h3>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Target: {metric.target} {metric.unit}
                  </span>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-300">Progress</span>
                    <span className="text-gray-600 dark:text-gray-300">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <motion.div
                      className={`rounded-full h-2 ${metric.colorClass}`}
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
            <li className="flex items-start space-x-3 hover:translate-x-1 transition-transform duration-200">
              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2" />
              <p>Take a 5-minute break every hour to stretch and move around.</p>
            </li>
            <li className="flex items-start space-x-3 hover:translate-x-1 transition-transform duration-200">
              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2" />
              <p>Practice deep breathing exercises when feeling stressed.</p>
            </li>
            <li className="flex items-start space-x-3 hover:translate-x-1 transition-transform duration-200">
              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2" />
              <p>Stay hydrated by drinking water throughout the day.</p>
            </li>
            <li className="flex items-start space-x-3 hover:translate-x-1 transition-transform duration-200">
              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2" />
              <p>Engage in mindfulness or meditation for at least 10 minutes.</p>
            </li>
            <li className="flex items-start space-x-3 hover:translate-x-1 transition-transform duration-200">
              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2" />
              <p>Get some sunlight in the morning to boost your mood.</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Wellness;
