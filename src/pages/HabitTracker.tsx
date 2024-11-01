import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, X, TrendingUp } from 'lucide-react';

interface Habit {
  id: string;
  name: string;
  streak: number;
  completed: boolean;
}

const HabitTracker = () => {
  const [habits, setHabits] = useState<Habit[]>([
    { id: '1', name: 'Morning Meditation', streak: 5, completed: false },
    { id: '2', name: 'Daily Exercise', streak: 3, completed: false },
    { id: '3', name: 'Reading', streak: 7, completed: false },
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
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {habits.map((habit) => (
            <motion.div
              key={habit.id}
              layout
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => toggleHabit(habit.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    habit.completed
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-600'
                  }`}
                >
                  {habit.completed ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                </button>
                <span className="text-gray-900 dark:text-white font-medium">
                  {habit.name}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <TrendingUp className="w-4 h-4" />
                <span>{habit.streak} days</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HabitTracker;