import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HandHeart, MessageCircle, Package, Calendar } from 'lucide-react';

interface Task {
  id: string;
  type: 'borrow' | 'lend' | 'help';
  title: string;
  description: string;
  user: string;
  distance: string;
  duration: string;
  status: 'open' | 'in-progress' | 'completed';
}

const NeighborExchange = () => {
  const [tasks] = useState<Task[]>([
    {
      id: '1',
      type: 'borrow',
      title: 'Need a Ladder',
      description: 'Looking to borrow a ladder for some quick home maintenance',
      user: 'Sarah M.',
      distance: '0.3 miles',
      duration: '2 hours',
      status: 'open',
    },
    {
      id: '2',
      type: 'help',
      title: 'Moving Assistance',
      description: 'Need help moving some furniture to my new apartment',
      user: 'Mike R.',
      distance: '0.5 miles',
      duration: '3 hours',
      status: 'in-progress',
    },
    {
      id: '3',
      type: 'lend',
      title: 'Power Tools Available',
      description: 'Various power tools available for borrowing',
      user: 'David K.',
      distance: '0.2 miles',
      duration: 'Flexible',
      status: 'open',
    },
  ]);

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'open':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'completed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Neighbor Exchange
          </h1>
          <button className="btn btn-primary flex items-center space-x-2">
            <HandHeart className="w-5 h-5" />
            <span>Post Request</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              layout
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {task.title}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {task.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Package className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {task.type}
                      </span>
                    </div>
                    <span className="text-gray-500">{task.distance}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600 dark:text-gray-300">
                        Duration
                      </span>
                    </div>
                    <span className="text-gray-500">{task.duration}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <button className="w-full flex items-center justify-center space-x-2 text-blue-500 hover:text-blue-600">
                    <MessageCircle className="w-4 h-4" />
                    <span>Contact {task.user}</span>
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

export default NeighborExchange;