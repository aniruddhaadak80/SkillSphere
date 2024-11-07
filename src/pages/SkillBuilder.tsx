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
  icon: React.ReactNode;
}

const categories = ['All', 'Programming', 'Blockchain', 'AI', 'Quantum Computing', 'Cybersecurity', 'App Development', 'Web Development'];

const SkillBuilder = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const skills: Skill[] = [
    { id: '1', name: 'JavaScript', progress: 80, level: 4, category: 'Programming', nextMilestone: 'Build a Custom Library', color: 'bg-yellow-50', textColor: 'text-yellow-700', progressColor: 'bg-yellow-400', buttonColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600', icon: <i className="fab fa-js"></i> },
    { id: '2', name: 'Ethereum', progress: 75, level: 3, category: 'Blockchain', nextMilestone: 'Create a DApp on Ethereum', color: 'bg-indigo-50', textColor: 'text-indigo-700', progressColor: 'bg-indigo-400', buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600', icon: <i className="fab fa-ethereum"></i> },
    { id: '3', name: 'Jupyter Notebook', progress: 80, level: 4, category: 'AI', nextMilestone: 'Build an ML Model', color: 'bg-purple-50', textColor: 'text-purple-700', progressColor: 'bg-purple-400', buttonColor: 'bg-gradient-to-r from-purple-400 to-purple-600', icon: <i className="fab fa-python"></i> },
    { id: '4', name: 'Quantum Algorithms', progress: 50, level: 2, category: 'Quantum Computing', nextMilestone: 'Complete Qiskit Tutorial', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600', icon: <i className="fas fa-cogs"></i> },
    { id: '5', name: 'Ethical Hacking', progress: 40, level: 2, category: 'Cybersecurity', nextMilestone: 'CEH Certification', color: 'bg-red-50', textColor: 'text-red-700', progressColor: 'bg-red-400', buttonColor: 'bg-gradient-to-r from-red-400 to-red-600', icon: <i className="fas fa-shield-alt"></i> },
    { id: '6', name: 'React Native', progress: 85, level: 4, category: 'App Development', nextMilestone: 'Launch an App', color: 'bg-cyan-50', textColor: 'text-cyan-700', progressColor: 'bg-cyan-400', buttonColor: 'bg-gradient-to-r from-cyan-400 to-cyan-600', icon: <i className="fab fa-react"></i> },
    { id: '7', name: 'Next.js', progress: 75, level: 3, category: 'Web Development', nextMilestone: 'Contribute to Open Source', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600', icon: <i className="fab fa-node"></i> },
    { id: '8', name: 'Bitcoin', progress: 65, level: 3, category: 'Blockchain', nextMilestone: 'Implement Smart Contracts', color: 'bg-orange-50', textColor: 'text-orange-700', progressColor: 'bg-orange-400', buttonColor: 'bg-gradient-to-r from-orange-400 to-orange-600', icon: <i className="fab fa-bitcoin"></i> },
    // Add additional skills as needed...
  ];

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
              className={`px-4 py-2 rounded-lg text-lg font-medium focus:outline-none transition-all duration-300 ${
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

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <motion.div
            key={skill.id}
            layout
            className={`overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${skill.color} border border-transparent hover:border-${skill.textColor} bg-opacity-90`}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-2">
                  <span className={`text-3xl ${skill.textColor}`}>{skill.icon}</span>
                  <h3 className={`text-xl font-semibold ${skill.textColor}`}>
                    {skill.name}
                  </h3>
                </div>
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
                className={`mt-4 w-full flex items-center justify-center py-2 text-white rounded-md ${skill.buttonColor}`}
              >
                <span className="text-sm">Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillBuilder;
