import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Monitor, ArrowDownCircle, Sun, Maximize2 } from 'lucide-react';

interface WorkspaceItem {
  id: string;
  name: string;
  category: string;
  position: { x: number; y: number };
  dimensions: { width: number; height: number };
}

const Workspace = () => {
  const [items] = useState<WorkspaceItem[]>([
    {
      id: '1',
      name: 'Standing Desk',
      category: 'Furniture',
      position: { x: 100, y: 100 },
      dimensions: { width: 160, height: 80 },
    },
    {
      id: '2',
      name: 'Ergonomic Chair',
      category: 'Furniture',
      position: { x: 120, y: 140 },
      dimensions: { width: 60, height: 60 },
    },
    {
      id: '3',
      name: 'Monitor',
      category: 'Equipment',
      position: { x: 110, y: 80 },
      dimensions: { width: 120, height: 20 },
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto p-4"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center space-x-3">
          <LayoutDashboard className="text-blue-500 w-8 h-8" />
          <span>Workspace Planner</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2 relative bg-gray-100 dark:bg-gray-700 rounded-lg p-4 aspect-video overflow-hidden"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {items.map((item) => (
              <motion.div
                key={item.id}
                className="absolute bg-blue-500 bg-opacity-20 border-2 border-blue-500 rounded-lg cursor-move hover:scale-105 transition-transform duration-300"
                style={{
                  left: `${item.position.x}px`,
                  top: `${item.position.y}px`,
                  width: `${item.dimensions.width}px`,
                  height: `${item.dimensions.height}px`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="absolute -top-6 left-0 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {item.name}
                </div>
              </motion.div>
            ))}
            <div className="absolute bottom-4 right-4 space-x-2">
              <button className="btn btn-secondary hover:bg-blue-600 hover:text-white p-2 rounded-full">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 transition-transform duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <Monitor className="text-green-500 w-6 h-6" />
                <span>Workspace Items</span>
              </h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.category === 'Furniture' ? (
                        <ArrowDownCircle className="w-5 h-5 text-blue-500" />
                      ) : (
                        <Monitor className="w-5 h-5 text-green-500" />
                      )}
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 transition-transform duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <Sun className="text-yellow-500 w-6 h-6" />
                <span>Ergonomic Tips</span>
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <Sun className="w-4 h-4 text-yellow-500" />
                  <span>Position desk near natural light</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Monitor className="w-4 h-4 text-blue-500" />
                  <span>Monitor at arm's length distance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowDownCircle className="w-4 h-4 text-green-500" />
                  <span>Chair height for 90° knee angle</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Workspace;
