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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Workspace Planner
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 aspect-video relative">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="absolute bg-blue-500 bg-opacity-20 border-2 border-blue-500 rounded-lg cursor-move"
                  style={{
                    left: `${item.position.x}px`,
                    top: `${item.position.y}px`,
                    width: `${item.dimensions.width}px`,
                    height: `${item.dimensions.height}px`,
                  }}
                >
                  <div className="absolute -top-6 left-0 text-sm text-gray-600 dark:text-gray-300">
                    {item.name}
                  </div>
                </div>
              ))}
              <div className="absolute bottom-4 right-4 space-x-2">
                <button className="btn btn-secondary">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Workspace Items
              </h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-600 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      {item.category === 'Furniture' ? (
                        <ArrowDownCircle className="w-5 h-5 text-blue-500" />
                      ) : (
                        <Monitor className="w-5 h-5 text-green-500" />
                      )}
                      <span className="text-gray-700 dark:text-gray-300">
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

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Ergonomic Tips
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Workspace;