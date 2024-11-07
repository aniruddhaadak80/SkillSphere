import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Trophy, Star, ArrowRight } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  progress: number;
  level: number;
  category: string;
  nextMilestone: string;
  color: string;
  textColor: string;
  progressColor: string;
  buttonColor: string;
}

const SkillBuilder = () => {
  // Skills with categories and unique colors
  const [skills] = useState<Skill[]>([
    {
      id: '1',
      name: 'Ethereum',
      progress: 75,
      level: 3,
      category: 'Blockchain',
      nextMilestone: 'Create Smart Contract',
      color: 'bg-indigo-50',
      textColor: 'text-indigo-700',
      progressColor: 'bg-indigo-400',
      buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600',
    },
    {
      id: '2',
      name: 'Bitcoin',
      progress: 65,
      level: 4,
      category: 'Blockchain',
      nextMilestone: 'Implement Blockchain',
      color: 'bg-orange-50',
      textColor: 'text-orange-700',
      progressColor: 'bg-orange-400',
      buttonColor: 'bg-gradient-to-r from-orange-400 to-orange-600',
    },
    {
      id: '3',
      name: 'TensorFlow',
      progress: 90,
      level: 5,
      category: 'AI',
      nextMilestone: 'Deploy Neural Network',
      color: 'bg-green-50',
      textColor: 'text-green-700',
      progressColor: 'bg-green-400',
      buttonColor: 'bg-gradient-to-r from-green-400 to-green-600',
    },
    {
      id: '4',
      name: 'React.js',
      progress: 80,
      level: 4,
      category: 'Web Development',
      nextMilestone: 'Build a Full-Stack App',
      color: 'bg-blue-50',
      textColor: 'text-blue-700',
      progressColor: 'bg-blue-400',
      buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600',
    },
    {
      id: '5',
      name: 'Cybersecurity',
      progress: 70,
      level: 3,
      category: 'Cybersecurity',
      nextMilestone: 'Pass CEH Exam',
      color: 'bg-red-50',
      textColor: 'text-red-700',
      progressColor: 'bg-red-400',
      buttonColor: 'bg-gradient-to-r from-red-400 to-red-600',
    },
    {
      id: '6',
      name: 'Ethical Hacking',
      progress: 60,
      level: 2,
      category: 'Cybersecurity',
      nextMilestone: 'Complete OWASP Training',
      color: 'bg-teal-50',
      textColor: 'text-teal-700',
      progressColor: 'bg-teal-400',
      buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600',
    },
    // Add more skills as needed...
  ]);

  const categories = ['All', 'Blockchain', 'AI', 'Web Development', 'Cybersecurity'];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredSkills = selectedCategory === 'All' ? skills : skills.filter(skill => skill.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Categories Navigation */}
      <div className="mb-6">
        <div className="flex overflow-x-auto space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-lg font-medium focus:outline-none transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <motion.div
            key={skill.id}
            layout
            className={`overflow-hidden rounded-lg shadow-lg ${skill.color} hover:scale-105 transition-transform duration-300`}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-xl font-semibold ${skill.textColor}`}>
                  {skill.name}
                </h3>
                <span className="flex items-center space-x-1">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Level {skill.level}
                  </span>
                </span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-300">Progress</span>
                  <span className="text-gray-600 dark:text-gray-300">{skill.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className={`rounded-full h-2 ${skill.progressColor}`}
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Book className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-600 dark:text-gray-300">{skill.category}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-gray-600 dark:text-gray-300">Next: {skill.nextMilestone}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`mt-4 w-full flex items-center justify-center space-x-2 text-white py-2 px-4 rounded-lg transition-all duration-200 ${skill.buttonColor} hover:bg-opacity-90`}
              >
                <span>Continue Learning</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillBuilder;
