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

const categories = [
  'All',
  'Programming',
  'Blockchain',
  'AI',
  'Quantum Computing',
  'Cybersecurity',
  'App Development',
  'Web Development',
  'Version Control',
  'Databases',
  'Operating Systems',
  'API Development',
  'Design Tools',
];

const SkillBuilder = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const skills: Skill[] = [
    { id: '1', name: 'JavaScript', progress: 80, level: 4, category: 'Programming', nextMilestone: 'Build a Custom Library', color: 'bg-yellow-50', textColor: 'text-yellow-700', progressColor: 'bg-yellow-400', buttonColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { id: '2', name: 'Ethereum', progress: 75, level: 3, category: 'Blockchain', nextMilestone: 'Create a DApp on Ethereum', color: 'bg-indigo-50', textColor: 'text-indigo-700', progressColor: 'bg-indigo-400', buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },
    { id: '3', name: 'Jupyter Notebook', progress: 80, level: 4, category: 'AI', nextMilestone: 'Build an ML Model', color: 'bg-purple-50', textColor: 'text-purple-700', progressColor: 'bg-purple-400', buttonColor: 'bg-gradient-to-r from-purple-400 to-purple-600' },
    { id: '4', name: 'Quantum Algorithms', progress: 50, level: 2, category: 'Quantum Computing', nextMilestone: 'Complete Qiskit Tutorial', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },
    { id: '5', name: 'Ethical Hacking', progress: 40, level: 2, category: 'Cybersecurity', nextMilestone: 'CEH Certification', color: 'bg-red-50', textColor: 'text-red-700', progressColor: 'bg-red-400', buttonColor: 'bg-gradient-to-r from-red-400 to-red-600' },
    { id: '6', name: 'React Native', progress: 85, level: 4, category: 'App Development', nextMilestone: 'Launch an App', color: 'bg-cyan-50', textColor: 'text-cyan-700', progressColor: 'bg-cyan-400', buttonColor: 'bg-gradient-to-r from-cyan-400 to-cyan-600' },
    { id: '7', name: 'Next.js', progress: 75, level: 3, category: 'Web Development', nextMilestone: 'Contribute to Open Source', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { id: '8', name: 'Git', progress: 90, level: 5, category: 'Version Control', nextMilestone: 'Contribute to Open Source Projects', color: 'bg-green-50', textColor: 'text-green-700', progressColor: 'bg-green-400', buttonColor: 'bg-gradient-to-r from-green-400 to-green-600' },
    { id: '9', name: 'GitHub', progress: 85, level: 4, category: 'Version Control', nextMilestone: 'Build a Personal Project on GitHub', color: 'bg-gray-50', textColor: 'text-gray-700', progressColor: 'bg-gray-400', buttonColor: 'bg-gradient-to-r from-gray-400 to-gray-600' },
    { id: '10', name: 'Python', progress: 80, level: 4, category: 'Programming', nextMilestone: 'Complete a Data Science Project', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { id: '11', name: 'TensorFlow', progress: 90, level: 5, category: 'AI', nextMilestone: 'Deploy a Neural Network', color: 'bg-green-50', textColor: 'text-green-700', progressColor: 'bg-green-400', buttonColor: 'bg-gradient-to-r from-green-400 to-green-600' },
    { id: '12', name: 'Linux', progress: 70, level: 3, category: 'Operating Systems', nextMilestone: 'Master Linux Commands', color: 'bg-purple-50', textColor: 'text-purple-700', progressColor: 'bg-purple-400', buttonColor: 'bg-gradient-to-r from-purple-400 to-purple-600' },
    { id: '13', name: 'Docker', progress: 80, level: 4, category: 'App Development', nextMilestone: 'Dockerize an Application', color: 'bg-yellow-50', textColor: 'text-yellow-700', progressColor: 'bg-yellow-400', buttonColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { id: '14', name: 'Postman', progress: 75, level: 3, category: 'API Development', nextMilestone: 'Test a REST API', color: 'bg-cyan-50', textColor: 'text-cyan-700', progressColor: 'bg-cyan-400', buttonColor: 'bg-gradient-to-r from-cyan-400 to-cyan-600' },
    { id: '15', name: 'Kali Linux', progress: 65, level: 3, category: 'Operating Systems', nextMilestone: 'Complete Security Training', color: 'bg-red-50', textColor: 'text-red-700', progressColor: 'bg-red-400', buttonColor: 'bg-gradient-to-r from-red-400 to-red-600' },
    { id: '16', name: 'Redux', progress: 60, level: 3, category: 'Web Development', nextMilestone: 'Build a Complex React Application', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },
    { id: '17', name: 'SQL', progress: 85, level: 4, category: 'Databases', nextMilestone: 'Optimize SQL Queries', color: 'bg-orange-50', textColor: 'text-orange-700', progressColor: 'bg-orange-400', buttonColor: 'bg-gradient-to-r from-orange-400 to-orange-600' },
    { id: '18', name: 'GraphQL', progress: 70, level: 3, category: 'API Development', nextMilestone: 'Learn Advanced Queries', color: 'bg-indigo-50', textColor: 'text-indigo-700', progressColor: 'bg-indigo-400', buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },
    { id: '19', name: 'Canva', progress: 80, level: 4, category: 'Design Tools', nextMilestone: 'Create a Brand Kit', color: 'bg-pink-50', textColor: 'text-pink-700', progressColor: 'bg-pink-400', buttonColor: 'bg-gradient-to-r from-pink-400 to-pink-600' },
    // Add more skills as needed...
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
              className={`px-4 py-2 rounded-lg text-lg font-medium focus:outline-none transition-all duration-200 ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-transparent text-blue-600 hover:bg-blue-500 hover:text-white'}`}
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
            <div className="p-6" style={{ backgroundColor: `${skill.color}`, opacity: 0.8 }}>
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-xl font-semibold ${skill.textColor}`}>
                  {skill.name}
                </h3>
                <span className="flex items-center space-x-1">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-600">{`Level ${skill.level}`}</span>
                </span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>{`Progress`}</span>
                  <span>{`${skill.progress}%`}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`rounded-full h-2 ${skill.progressColor}`}
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Book className="w-4 h-4 text-blue-500" />
                  <span>{skill.category}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{`Next: ${skill.nextMilestone}`}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`mt-4 w-full flex items-center justify-center space-x-2 text-white py-2 px-4 rounded-lg transition-all duration-200 ${skill.buttonColor}`}
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
