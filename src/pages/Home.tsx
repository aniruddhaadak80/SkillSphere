import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  ChefHat,
  Leaf,
  Brain,
  Users,
  Map,
  HandHeart,
  Heart,
  LayoutDashboard,
  Share2,
} from 'lucide-react';

const apps = [
  { path: '/habit', icon: Activity, title: 'Habit Tracker', color: 'bg-blue-500' },
  { path: '/recipes', icon: ChefHat, title: 'Recipe Recommender', color: 'bg-green-500' },
  { path: '/sustainability', icon: Leaf, title: 'Sustainability', color: 'bg-emerald-500' },
  { path: '/skillbuilder', icon: Brain, title: 'Skill Builder', color: 'bg-purple-500' },
  { path: '/bodylanguage', icon: Users, title: 'Body Language Coach', color: 'bg-indigo-500' },
  { path: '/traveltips', icon: Map, title: 'Travel Tips', color: 'bg-yellow-500' },
  { path: '/neighborexchange', icon: HandHeart, title: 'Neighbor Exchange', color: 'bg-red-500' },
  { path: '/wellness', icon: Heart, title: 'Wellness Companion', color: 'bg-pink-500' },
  { path: '/workspace', icon: LayoutDashboard, title: 'Workspace Planner', color: 'bg-orange-500' },
  { path: '/skillexchange', icon: Share2, title: 'Skill Exchange', color: 'bg-teal-500' },
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Your Digital Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Discover our suite of tools designed to enhance your daily life
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map(({ path, icon: Icon, title, color }, index) => (
          <motion.div
            key={path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 5 }} // Add scaling and rotation on hover
            whileInView={{ opacity: 1 }} // Scroll effect
            viewport={{ once: true }}
          >
            <Link
              to={path}
              className="block group hover:transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className={`${color} p-6 flex items-center justify-center transition-all duration-300 ease-in-out`}>
                  <Icon className="w-12 h-12 text-white group-hover:text-gray-900 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-900 transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Click to explore and get started
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
