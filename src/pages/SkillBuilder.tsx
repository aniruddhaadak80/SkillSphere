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
  buttonGradient: string;
}

const categories = ['All', 'Programming', 'Blockchain', 'AI', 'Cybersecurity', 'Web Development'];

const SkillBuilder = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const skills: Skill[] = [
    { id: '1', name: 'JavaScript', progress: 80, level: 4, category: 'Programming', nextMilestone: 'Build a Custom Library', color: 'bg-yellow-50', textColor: 'text-yellow-600', buttonGradient: 'from-yellow-400 to-yellow-600' },
    { id: '2', name: 'TypeScript', progress: 70, level: 3, category: 'Programming', nextMilestone: 'Develop a Complex Project', color: 'bg-blue-50', textColor: 'text-blue-600', buttonGradient: 'from-blue-400 to-blue-600' },
    { id: '3', name: 'React.js', progress: 85, level: 4, category: 'Web Development', nextMilestone: 'Contribute to Open Source', color: 'bg-cyan-50', textColor: 'text-cyan-600', buttonGradient: 'from-cyan-400 to-cyan-600' },
    { id: '4', name: 'Next.js', progress: 60, level: 3, category: 'Web Development', nextMilestone: 'Build a Server-side App', color: 'bg-gray-50', textColor: 'text-gray-600', buttonGradient: 'from-gray-400 to-gray-600' },
    { id: '5', name: 'MongoDB', progress: 55, level: 3, category: 'Database', nextMilestone: 'Design a Complex Schema', color: 'bg-green-50', textColor: 'text-green-600', buttonGradient: 'from-green-400 to-green-600' },
    { id: '6', name: 'Blockchain Basics', progress: 50, level: 2, category: 'Blockchain', nextMilestone: 'Publish a Smart Contract', color: 'bg-indigo-50', textColor: 'text-indigo-600', buttonGradient: 'from-indigo-400 to-indigo-600' },
    { id: '7', name: 'Ethical Hacking', progress: 40, level: 2, category: 'Cybersecurity', nextMilestone: 'Earn CEH Certification', color: 'bg-red-50', textColor: 'text-red-600', buttonGradient: 'from-red-400 to-red-600' },
    { id: '8', name: 'Machine Learning', progress: 75, level: 3, category: 'AI', nextMilestone: 'Build a Neural Network', color: 'bg-teal-50', textColor: 'text-teal-600', buttonGradient: 'from-teal-400 to-teal-600' },
    // Add more skills here, repeating similar color and structure for new skills
  ];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto p-6"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-blue-300 dark:to-teal-200 mb-8 text-center"
        >
          Skill Builder
        </motion.h1>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 dark:text-gray-300'
              } hover:bg-blue-500 dark:hover:bg-blue-500`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.05 }}
              className={`${skill.color} dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform-gpu hover:shadow-xl`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-xl font-semibold ${skill.textColor} dark:text-white`}>
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
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1 }}
                      className={`rounded-full h-2 ${skill.buttonGradient}`}
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
                  className={`mt-4 w-full flex items-center justify-center space-x-2 text-white py-2 px-4 rounded-lg transition-all duration-200 ${skill.buttonGradient} hover:from-purple-500 hover:to-indigo-500`}
                >
                  <span>Continue Learning</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillBuilder;
