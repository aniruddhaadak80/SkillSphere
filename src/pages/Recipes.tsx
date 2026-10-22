import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, Users, ChefHat } from 'lucide-react';

interface Recipe {
  id: string;
  title: string;
  image: string;
  prepTime: string;
  servings: number;
  mood: string;
}

const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Energizing Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=60',
    prepTime: '10 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '2',
    title: 'Comforting Mac & Cheese',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=60',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '3',
    title: 'Fresh Mediterranean Salad',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=60',
    prepTime: '15 mins',
    servings: 2,
    mood: 'Fresh',
  },
  {
    id: '4',
    title: 'Hearty Vegetable Soup',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=60',
    prepTime: '25 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '5',
    title: 'Zesty Quinoa Salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=60',
    prepTime: '20 mins',
    servings: 3,
    mood: 'Fresh',
  },
  {
    id: '6',
    title: 'Savory Stuffed Peppers',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=60',
    prepTime: '40 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '7',
    title: 'Simple Stir-Fried Noodles',
    image: 'https://images.unsplash.com/photo-1578419997901-b409e7e400b8?auto=format&fit=crop&w=800&q=60',
    prepTime: '15 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '8',
    title: 'Crispy Chickpea Tacos',
    image: 'https://images.unsplash.com/photo-1464219222984-216ebffaaf85?auto=format&fit=crop&w=800&q=60',
    prepTime: '20 mins',
    servings: 3,
    mood: 'Fresh',
  },
  {
    id: '9',
    title: 'Creamy Tomato Pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=60',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '10',
    title: 'Delicious Berry Smoothie',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=60',
    prepTime: '5 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '11',
    title: 'Warm Lentil Salad',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=60',
    prepTime: '25 mins',
    servings: 4,
    mood: 'Fresh',
  },
  {
    id: '12',
    title: 'Coconut Curry Rice',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=60',
    prepTime: '30 mins',
    servings: 3,
    mood: 'Comfort',
  },
  {
    id: '13',
    title: 'Spicy Shrimp Tacos',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=60',
    prepTime: '20 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '14',
    title: 'Roasted Veggie Bowl',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=60',
    prepTime: '40 mins',
    servings: 4,
    mood: 'Fresh',
  },
  {
    id: '15',
    title: 'Classic Beef Tacos',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=60',
    prepTime: '25 mins',
    servings: 2,
    mood: 'Comfort',
  },
  {
    id: '16',
    title: 'Banana Oatmeal Pancakes',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=60',
    prepTime: '15 mins',
    servings: 3,
    mood: 'Energetic',
  },
  {
    id: '17',
    title: 'Tasty Quiche Lorraine',
    image: 'https://images.unsplash.com/photo-1650844010413-3f24dc1c182b?auto=format&fit=crop&w=800&q=60',
    prepTime: '50 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '18',
    title: 'Green Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=60',
    prepTime: '10 mins',
    servings: 2,
    mood: 'Fresh',
  },
  {
    id: '19',
    title: 'Baked Salmon with Veggies',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=60',
    prepTime: '30 mins',
    servings: 3,
    mood: 'Energetic',
  },
  {
    id: '20',
    title: 'Veggie-Packed Stir Fry',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=60',
    prepTime: '20 mins',
    servings: 4,
    mood: 'Fresh',
  },
  {
    id: '21',
    title: 'One-Pan Chicken and Rice',
    image: 'https://images.unsplash.com/photo-1617651523904-8768096faf40?auto=format&fit=crop&w=800&q=60',
    prepTime: '35 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '22',
    title: 'Spaghetti Aglio e Olio',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=60',
    prepTime: '20 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '23',
    title: 'Garlic Butter Shrimp',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=60',
    prepTime: '15 mins',
    servings: 2,
    mood: 'Fresh',
  },
  {
    id: '24',
    title: 'Creamy Spinach Pasta',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60',
    prepTime: '25 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '25',
    title: 'Fruit & Yogurt Parfait',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=60',
    prepTime: '5 mins',
    servings: 1,
    mood: 'Energetic',
  },
  {
    id: '26',
    title: 'Baked Ziti with Sausage',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=60',
    prepTime: '40 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '27',
    title: 'Savory Pumpkin Soup',
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=800&q=60',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '28',
    title: 'Greek Yogurt Dip',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=60',
    prepTime: '10 mins',
    servings: 4,
    mood: 'Fresh',
  },
  {
    id: '29',
    title: 'Honey Garlic Chicken',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=60',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '30',
    title: 'Sweet Potato Hash',
    image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=800&q=60',
    prepTime: '25 mins',
    servings: 3,
    mood: 'Energetic',
  },
  {
    id: '31',
    title: 'Spiced Lentil Stew',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=60',
    prepTime: '35 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '32',
    title: 'Avocado Toast with Eggs',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=60',
    prepTime: '10 mins',
    servings: 1,
    mood: 'Fresh',
  },
  {
    id: '33',
    title: 'Mushroom Risotto',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=60',
    prepTime: '40 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '34',
    title: 'Berry Chia Pudding',
    image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?auto=format&fit=crop&w=800&q=60',
    prepTime: '10 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '35',
    title: 'Pasta Primavera',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=60',
    prepTime: '25 mins',
    servings: 4,
    mood: 'Fresh',
  },
  {
    id: '36',
    title: 'Eggplant Parmesan',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60',
    prepTime: '50 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '37',
    title: 'Beef Stir Fry',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=60',
    prepTime: '25 mins',
    servings: 4,
    mood: 'Energetic',
  },
  {
    id: '38',
    title: 'Tropical Fruit Salad',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=60',
    prepTime: '15 mins',
    servings: 3,
    mood: 'Fresh',
  },
  {
    id: '39',
    title: 'Chicken Alfredo Pasta',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=60',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '40',
    title: 'Lentil Burger',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=800&q=60',
    prepTime: '30 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '41',
    title: 'Cabbage Roll Casserole',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=60',
    prepTime: '60 mins',
    servings: 6,
    mood: 'Comfort',
  },
  {
    id: '42',
    title: 'Quinoa & Black Bean Bowl',
    image: 'https://images.unsplash.com/photo-1613082410785-22292e8426e7?auto=format&fit=crop&w=800&q=60',
    prepTime: '20 mins',
    servings: 3,
    mood: 'Fresh',
  },
  {
    id: '43',
    title: 'Peanut Butter Banana Smoothie',
    image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?auto=format&fit=crop&w=800&q=60',
    prepTime: '5 mins',
    servings: 1,
    mood: 'Energetic',
  },
  {
    id: '44',
    title: 'Chicken and Broccoli Stir-Fry',
    image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=800&q=60',
    prepTime: '20 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '45',
    title: 'Veggie Sushi Rolls',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=60',
    prepTime: '45 mins',
    servings: 4,
    mood: 'Fresh',
  },
  {
    id: '46',
    title: 'Garlic Parmesan Potatoes',
    image: 'https://images.unsplash.com/photo-1568158879083-c42860933ed7?auto=format&fit=crop&w=800&q=60',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '47',
    title: 'Caprese Salad Skewers',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=60',
    prepTime: '15 mins',
    servings: 6,
    mood: 'Fresh',
  },
  {
    id: '48',
    title: 'Stuffed Zucchini Boats',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=800&q=60',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '49',
    title: 'Peach Smoothie',
    image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=800&q=60',
    prepTime: '5 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '50',
    title: 'Roasted Beet Salad',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=60',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Fresh',
  },
  {
    id: '51',
    title: 'Creamy Avocado Pasta',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=60',
    prepTime: '20 mins',
    servings: 2,
    mood: 'Comfort',
  },
  {
    id: '52',
    title: 'Baked Teriyaki Salmon',
    image: 'https://images.unsplash.com/photo-1732759959723-27f1ba1d1fa5?auto=format&fit=crop&w=800&q=60',
    prepTime: '25 mins',
    servings: 4,
    mood: 'Energetic',
  },
  {
    id: '53',
    title: 'Vegetable Paella',
    image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=800&q=60',
    prepTime: '45 mins',
    servings: 4,
    mood: 'Fresh',
  },
];

const moods = ['All', 'Energetic', 'Comfort', 'Fresh', 'Cozy', 'Light'];

const Recipes = () => {
  const [selectedMood, setSelectedMood] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = recipes.filter(
    (recipe) =>
      (selectedMood === 'All' || recipe.mood === selectedMood) &&
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Mood-Based Recipes
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search recipes..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedMood === mood
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              layout
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {recipe.title}
                </h3>
                <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {recipe.mood}
                  </span>
                  <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-600">
                    <ChefHat className="w-4 h-4" />
                    <span>View Recipe</span>
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

export default Recipes;
