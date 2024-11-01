import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
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

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const links = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/habit', icon: Activity, label: 'Habit Tracker' },
    { path: '/recipes', icon: ChefHat, label: 'Recipes' },
    { path: '/sustainability', icon: Leaf, label: 'Sustainability' },
    { path: '/skillbuilder', icon: Brain, label: 'Skill Builder' },
    { path: '/bodylanguage', icon: Users, label: 'Body Language' },
    { path: '/traveltips', icon: Map, label: 'Travel Tips' },
    { path: '/neighborexchange', icon: HandHeart, label: 'Neighbor Exchange' },
    { path: '/wellness', icon: Heart, label: 'Wellness' },
    { path: '/workspace', icon: LayoutDashboard, label: 'Workspace' },
    { path: '/skillexchange', icon: Share2, label: 'Skill Exchange' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide py-2">
            {links.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  isActive(path)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;