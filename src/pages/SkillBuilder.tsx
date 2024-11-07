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
}

const SkillBuilder = () => {
  const [skills] = useState<Skill[]>([
    { id: '1', name: 'JavaScript', progress: 80, level: 4, category: 'Programming', nextMilestone: 'Build a Custom Library' },
    { id: '2', name: 'TypeScript', progress: 70, level: 3, category: 'Programming', nextMilestone: 'Develop a Complex Project' },
    { id: '3', name: 'React.js', progress: 85, level: 4, category: 'Frontend Development', nextMilestone: 'Contribute to Open Source' },
    { id: '4', name: 'Next.js', progress: 60, level: 3, category: 'Frontend Development', nextMilestone: 'Build a Server-side App' },
    { id: '5', name: 'MongoDB', progress: 55, level: 3, category: 'Database Management', nextMilestone: 'Design a Complex Schema' },
    { id: '6', name: 'React Native', progress: 50, level: 2, category: 'Mobile Development', nextMilestone: 'Publish an App' },
    { id: '7', name: 'Blockchain', progress: 40, level: 2, category: 'Technology', nextMilestone: 'Deploy a Smart Contract' },
    { id: '8', name: 'Ethical Hacking', progress: 30, level: 1, category: 'Cybersecurity', nextMilestone: 'Pass the CEH Exam' },
    { id: '9', name: 'Cybersecurity', progress: 45, level: 2, category: 'Security', nextMilestone: 'Complete a Security Audit' },
    { id: '10', name: 'Artificial Intelligence', progress: 65, level: 3, category: 'Machine Learning', nextMilestone: 'Create a Neural Network' },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform-gpu hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
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
                      className="bg-gradient-to-r from-blue-500 to-teal-400 rounded-full h-2"
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
                  className="mt-4 w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-indigo-500 transition-all duration-200"
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
