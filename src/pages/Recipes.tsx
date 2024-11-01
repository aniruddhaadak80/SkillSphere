import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, Users, ChefHat } from 'lucide-react';

interface Recipe {
  id: string;
  title: string;
  image: string;
  prepTime: string;
  servings: number;
  mood: string;
}

const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Energizing Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02',
    prepTime: '10 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '2',
    title: 'Comforting Mac & Cheese',
    image: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '3',
    title: 'Fresh Mediterranean Salad',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
    prepTime: '15 mins',
    servings: 2,
    mood: 'Fresh',
  },
];

const moods = ['All', 'Energetic', 'Comfort', 'Fresh', 'Cozy', 'Light'];

const Recipes = () => {
  const [selectedMood, setSelectedMood] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = recipes.filter(
    (recipe) =>
      (selectedMood === 'All' || recipe.mood === selectedMood) &&
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Mood-Based Recipes
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search recipes..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedMood === mood
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              layout
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {recipe.title}
                </h3>
                <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {recipe.mood}
                  </span>
                  <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-600">
                    <ChefHat className="w-4 h-4" />
                    <span>View Recipe</span>
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

export default Recipes;