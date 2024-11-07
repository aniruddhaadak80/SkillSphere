import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, X, TrendingUp } from 'lucide-react';

interface Habit {
  id: string;
  name: string;
  streak: number;
  completed: boolean;
  color: string; // New property to hold the color for each habit
}

const HabitTracker = () => {
  // Function to generate random color
  const generateRandomColor = () => {
    const colors = [
      'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-red-200',
      'bg-purple-200', 'bg-pink-200', 'bg-indigo-200', 'bg-teal-200',
      'bg-orange-200', 'bg-gray-200',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [habits, setHabits] = useState<Habit[]>([
    { id: '1', name: 'Morning Meditation', streak: 5, completed: false, color: generateRandomColor() },
    { id: '2', name: 'Daily Exercise', streak: 3, completed: false, color: generateRandomColor() },
    { id: '3', name: 'Reading', streak: 7, completed: false, color: generateRandomColor() },
  ]);

  const [newHabit, setNewHabit] = useState('');

  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([
        ...habits,
        {
          id: Date.now().toString(),
          name: newHabit,
          streak: 0,
          completed: false,
          color: generateRandomColor(), // Assign random color to new habit
        },
      ]);
      setNewHabit('');
    }
  };

  const toggleHabit = (id: string) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed: !habit.completed,
              streak: !habit.completed ? habit.streak + 1 : habit.streak - 1,
            }
          : habit
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Habit Tracker
        </h1>

        <div className="flex gap-4 mb-8">
          <input
            type="text"
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            placeholder="Add a new habit..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={addHabit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {habits.map((habit) => (
            <motion.div
              key={habit.id}
              layout
              whileHover={{ scale: 1.05 }}
              className={`rounded-lg p-4 flex items-center justify-between shadow-lg hover:shadow-xl transition-all duration-300 ${habit.color}`}
            >
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => toggleHabit(habit.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    habit.completed
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-gray-200 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  } transition-colors`}
                >
                  {habit.completed ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <X className="w-5 h-5" />
                  )}
                </button>
                <span className="text-gray-900 dark:text-white font-medium transition-colors">
                  {habit.name}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <TrendingUp className="w-4 h-4" />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {habit.streak} days
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HabitTracker;
