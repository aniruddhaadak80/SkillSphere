import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rnd } from 'react-rnd';
import { LayoutDashboard, Monitor, ArrowDownCircle, Sun, Maximize2, Settings, Clock } from 'lucide-react';

interface WorkspaceItem {
  id: string;
  name: string;
  category: string;
  position: { x: number; y: number };
  dimensions: { width: number; height: number };
}

const Workspace = () => {
  const [items, setItems] = useState<WorkspaceItem[]>([
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

  const [theme, setTheme] = useState('light');
  const [mode, setMode] = useState('Focus Mode');
  
  const toggleMode = () => setMode(mode === 'Focus Mode' ? 'Relax Mode' : 'Focus Mode');
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`max-w-7xl mx-auto ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="rounded-lg shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-4">
            Workspace Planner
          </h1>
          <div className="space-x-4">
            <button onClick={toggleMode} className="btn btn-primary">
              {mode === 'Focus Mode' ? <Sun /> : <Clock />} {mode}
            </button>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="btn btn-secondary">
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative bg-gray-200 dark:bg-gray-600 rounded-lg p-4 aspect-video">
              {items.map((item, index) => (
                <Rnd
                  key={item.id}
                  default={{
                    x: item.position.x,
                    y: item.position.y,
                    width: item.dimensions.width,
                    height: item.dimensions.height,
                  }}
                  onDragStop={(e, d) => {
                    const updatedItems = [...items];
                    updatedItems[index].position = { x: d.x, y: d.y };
                    setItems(updatedItems);
                  }}
                  onResizeStop={(e, direction, ref, delta, position) => {
                    const updatedItems = [...items];
                    updatedItems[index].dimensions = {
                      width: parseInt(ref.style.width),
                      height: parseInt(ref.style.height),
                    };
                    updatedItems[index].position = position;
                    setItems(updatedItems);
                  }}
                >
                  <div className="bg-blue-500 bg-opacity-30 border-2 border-blue-500 rounded-lg flex items-center justify-center cursor-move">
                    {item.name}
                  </div>
                </Rnd>
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
              <h2 className="text-xl font-semibold mb-4">
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
                      <span>
                        {item.name}
                      </span>
                    </div>
                    <span className="text-sm">
                      {item.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                Ergonomic Tips
              </h2>
              <ul className="space-y-3">
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
