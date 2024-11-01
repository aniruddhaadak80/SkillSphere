import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Award, Star, Trophy, ArrowRight } from 'lucide-react';

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
    {
      id: '1',
      name: 'Web Development',
      progress: 75,
      level: 3,
      category: 'Technology',
      nextMilestone: 'Build a Full-Stack App',
    },
    {
      id: '2',
      name: 'Public Speaking',
      progress: 45,
      level: 2,
      category: 'Communication',
      nextMilestone: 'Give a Conference Talk',
    },
    {
      id: '3',
      name: 'Data Analysis',
      progress: 60,
      level: 2,
      category: 'Analytics',
      nextMilestone: 'Complete Advanced SQL',
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Skill Builder
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              layout
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
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
                    <div
                      className="bg-blue-500 rounded-full h-2"
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

                <button className="mt-4 w-full flex items-center justify-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                  <span>Continue Learning</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillBuilder;