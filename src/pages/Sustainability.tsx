import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplet, Wind, Sun } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  carbonFootprint: number;
  waterUsage: number;
  recyclable: boolean;
  energyEfficiency: 'A' | 'B' | 'C' | 'D' | 'E';
  image: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Eco-Friendly Water Bottle',
    category: 'Kitchen',
    carbonFootprint: 2.5,
    waterUsage: 50,
    recyclable: true,
    energyEfficiency: 'A',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
  },
  {
    id: '2',
    name: 'Bamboo Toothbrush',
    category: 'Bathroom',
    carbonFootprint: 0.8,
    waterUsage: 20,
    recyclable: true,
    energyEfficiency: 'A',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04',
  },
  {
    id: '3',
    name: 'Solar-Powered Charger',
    category: 'Electronics',
    carbonFootprint: 5.2,
    waterUsage: 100,
    recyclable: true,
    energyEfficiency: 'B',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399',
  },
  {
    id: '4',
    name: 'Reusable Shopping Bag',
    category: 'Accessories',
    carbonFootprint: 1.2,
    waterUsage: 10,
    recyclable: true,
    energyEfficiency: 'A',
    image: 'https://tinyurl.com/2akorrxx',
  },
  {
    id: '5',
    name: 'Biodegradable Plate Set',
    category: 'Kitchen',
    carbonFootprint: 3.0,
    waterUsage: 30,
    recyclable: false,
    energyEfficiency: 'C',
    image: 'https://tinyurl.com/25jx73gq',
  },
];

const Sustainability = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleProduct = (id: string) => {
    setSelectedProducts((prev) =>
      prev.includes(id)
        ? prev.filter((productId) => productId !== id)
        : [...prev, id]
    );
    // Vibration effect on selection toggle
    navigator.vibrate(100);
  };

  const getImpactColor = (value: number, max: number) => {
    const percentage = (value / max) * 100;
    if (percentage <= 33) return 'text-green-500';
    if (percentage <= 66) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Sustainable Product Comparison
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              layout
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg border-2 transition-all duration-300 ${
                selectedProducts.includes(product.id)
                  ? 'border-blue-500 scale-105'
                  : 'border-transparent'
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Leaf className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600 dark:text-gray-300">
                        Carbon Footprint
                      </span>
                    </div>
                    <span
                      className={getImpactColor(product.carbonFootprint, 10)}
                    >
                      {product.carbonFootprint} kg CO2
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Droplet className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-600 dark:text-gray-300">
                        Water Usage
                      </span>
                    </div>
                    <span
                      className={getImpactColor(product.waterUsage, 150)}
                    >
                      {product.waterUsage} L
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Wind className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-600 dark:text-gray-300">
                        Recyclable
                      </span>
                    </div>
                    <span
                      className={
                        product.recyclable
                          ? 'text-green-500'
                          : 'text-red-500'
                      }
                    >
                      {product.recyclable ? 'Yes' : 'No'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Sun className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-600 dark:text-gray-300">
                        Energy Rating
                      </span>
                    </div>
                    <span
                      className={`font-bold ${
                        product.energyEfficiency === 'A'
                          ? 'text-green-500'
                          : product.energyEfficiency === 'B'
                          ? 'text-yellow-500'
                          : 'text-red-500'
                      }`}
                    >
                      {product.energyEfficiency}
                    </span>
                  </div>
                </div>

                <motion.button
                  onClick={() => toggleProduct(product.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-4 w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                    selectedProducts.includes(product.id)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  {selectedProducts.includes(product.id)
                    ? 'Selected for Comparison'
                    : 'Select for Comparison'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Sustainability;
