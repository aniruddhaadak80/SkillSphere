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
    image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02',
    prepTime: '10 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '2',
    title: 'Comforting Mac & Cheese',
    image: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '3',
    title: 'Fresh Mediterranean Salad',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
    prepTime: '15 mins',
    servings: 2,
    mood: 'Fresh',
  },
  {
    id: '4',
    title: 'Hearty Vegetable Soup',
    image: 'https://images.unsplash.com/photo-1603052874026-25808408c7b1',
    prepTime: '25 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '5',
    title: 'Zesty Quinoa Salad',
    image: 'https://images.unsplash.com/photo-1506811512021-1b4b3d4c6e53',
    prepTime: '20 mins',
    servings: 3,
    mood: 'Fresh',
  },
  {
    id: '6',
    title: 'Savory Stuffed Peppers',
    image: 'https://images.unsplash.com/photo-1602726586340-081c7d60a5bc',
    prepTime: '40 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '7',
    title: 'Simple Stir-Fried Noodles',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    prepTime: '15 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '8',
    title: 'Crispy Chickpea Tacos',
    image: 'https://images.unsplash.com/photo-1586481080578-491f43b4ff63',
    prepTime: '20 mins',
    servings: 3,
    mood: 'Fresh',
  },
  {
    id: '9',
    title: 'Creamy Tomato Pasta',
    image: 'https://images.unsplash.com/photo-1571002022760-e67e48167660',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '10',
    title: 'Delicious Berry Smoothie',
    image: 'https://images.unsplash.com/photo-1542831371-c5c43c55f982',
    prepTime: '5 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '11',
    title: 'Warm Lentil Salad',
    image: 'https://images.unsplash.com/photo-1553883991-1c25e7b7e04d',
    prepTime: '25 mins',
    servings: 4,
    mood: 'Fresh',
  },
  {
    id: '12',
    title: 'Coconut Curry Rice',
    image: 'https://images.unsplash.com/photo-1584301608914-3c14d3deecb1',
    prepTime: '30 mins',
    servings: 3,
    mood: 'Comfort',
  },
  {
    id: '13',
    title: 'Spicy Shrimp Tacos',
    image: 'https://images.unsplash.com/photo-1528501460088-64f2fda63851',
    prepTime: '20 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '14',
    title: 'Roasted Veggie Bowl',
    image: 'https://images.unsplash.com/photo-1573481981962-69c1f42a7a80',
    prepTime: '40 mins',
    servings: 4,
    mood: 'Fresh',
  },
  {
    id: '15',
    title: 'Classic Beef Tacos',
    image: 'https://images.unsplash.com/photo-1572410303220-4a48c8b6d82b',
    prepTime: '25 mins',
    servings: 2,
    mood: 'Comfort',
  },
  {
    id: '16',
    title: 'Banana Oatmeal Pancakes',
    image: 'https://images.unsplash.com/photo-1582111811308-3ccfbffec24b',
    prepTime: '15 mins',
    servings: 3,
    mood: 'Energetic',
  },
  {
    id: '17',
    title: 'Tasty Quiche Lorraine',
    image: 'https://images.unsplash.com/photo-1529111675423-94d4c6b4870e',
    prepTime: '50 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '18',
    title: 'Green Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1572042373674-9a431fa64b64',
    prepTime: '10 mins',
    servings: 2,
    mood: 'Fresh',
  },
  {
    id: '19',
    title: 'Baked Salmon with Veggies',
    image: 'https://images.unsplash.com/photo-1516409891440-7e865d508c4d',
    prepTime: '30 mins',
    servings: 3,
    mood: 'Energetic',
  },
  {
    id: '20',
    title: 'Veggie-Packed Stir Fry',
    image: 'https://images.unsplash.com/photo-1582841374203-19b185f26429',
    prepTime: '20 mins',
    servings: 4,
    mood: 'Fresh',
  },
  {
    id: '21',
    title: 'One-Pan Chicken and Rice',
    image: 'https://images.unsplash.com/photo-1616687811344-3c3543ec2bc0',
    prepTime: '35 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '22',
    title: 'Spaghetti Aglio e Olio',
    image: 'https://images.unsplash.com/photo-1524702940256-df1b992f18f4',
    prepTime: '20 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '23',
    title: 'Garlic Butter Shrimp',
    image: 'https://images.unsplash.com/photo-1584868324479-c7eb6d68b9d3',
    prepTime: '15 mins',
    servings: 2,
    mood: 'Fresh',
  },
  {
    id: '24',
    title: 'Creamy Spinach Pasta',
    image: 'https://images.unsplash.com/photo-1564566009161-7f164d546582',
    prepTime: '25 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '25',
    title: 'Fruit & Yogurt Parfait',
    image: 'https://images.unsplash.com/photo-1600481360206-982b72fda02e',
    prepTime: '5 mins',
    servings: 1,
    mood: 'Energetic',
  },
  {
    id: '26',
    title: 'Baked Ziti with Sausage',
    image: 'https://images.unsplash.com/photo-1603052874026-25808408c7b1',
    prepTime: '40 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '27',
    title: 'Savory Pumpkin Soup',
    image: 'https://images.unsplash.com/photo-1602352580737-9e6e6d634eeb',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '28',
    title: 'Greek Yogurt Dip',
    image: 'https://images.unsplash.com/photo-1581383036235-7f5c9c1ed3fc',
    prepTime: '10 mins',
    servings: 4,
    mood: 'Fresh',
  },
  {
    id: '29',
    title: 'Honey Garlic Chicken',
    image: 'https://images.unsplash.com/photo-1582820301182-84c1ac303ec1',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '30',
    title: 'Sweet Potato Hash',
    image: 'https://images.unsplash.com/photo-1544400542-5b1ffed28c36',
    prepTime: '25 mins',
    servings: 3,
    mood: 'Energetic',
  },
  {
    id: '31',
    title: 'Spiced Lentil Stew',
    image: 'https://images.unsplash.com/photo-1584942032140-09b0c67dbec5',
    prepTime: '35 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '32',
    title: 'Avocado Toast with Eggs',
    image: 'https://images.unsplash.com/photo-1551786122-7a8d1523a9f1',
    prepTime: '10 mins',
    servings: 1,
    mood: 'Fresh',
  },
  {
    id: '33',
    title: 'Mushroom Risotto',
    image: 'https://images.unsplash.com/photo-1590212787522-c7f5b7a24be4',
    prepTime: '40 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '34',
    title: 'Berry Chia Pudding',
    image: 'https://images.unsplash.com/photo-1546468680-6b0f6d3d47d8',
    prepTime: '10 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '35',
    title: 'Pasta Primavera',
    image: 'https://images.unsplash.com/photo-1556937393-7c7e83dcb4c3',
    prepTime: '25 mins',
    servings: 4,
    mood: 'Fresh',
  },
  {
    id: '36',
    title: 'Eggplant Parmesan',
    image: 'https://images.unsplash.com/photo-1596770430213-dff3c0b1f17b',
    prepTime: '50 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '37',
    title: 'Beef Stir Fry',
    image: 'https://images.unsplash.com/photo-1597611919622-df6af81f0b80',
    prepTime: '25 mins',
    servings: 4,
    mood: 'Energetic',
  },
  {
    id: '38',
    title: 'Tropical Fruit Salad',
    image: 'https://images.unsplash.com/photo-1583305760593-0cb84867dc99',
    prepTime: '15 mins',
    servings: 3,
    mood: 'Fresh',
  },
  {
    id: '39',
    title: 'Chicken Alfredo Pasta',
    image: 'https://images.unsplash.com/photo-1577228189587-e0479da33802',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '40',
    title: 'Lentil Burger',
    image: 'https://images.unsplash.com/photo-1506790182087-3f21e54d2e43',
    prepTime: '30 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '41',
    title: 'Cabbage Roll Casserole',
    image: 'https://images.unsplash.com/photo-1565772878946-c6bcd08f6e99',
    prepTime: '60 mins',
    servings: 6,
    mood: 'Comfort',
  },
  {
    id: '42',
    title: 'Quinoa & Black Bean Bowl',
    image: 'https://images.unsplash.com/photo-1581851432340-379c31a64c54',
    prepTime: '20 mins',
    servings: 3,
    mood: 'Fresh',
  },
  {
    id: '43',
    title: 'Peanut Butter Banana Smoothie',
    image: 'https://images.unsplash.com/photo-1541231101517-51505b005b5a',
    prepTime: '5 mins',
    servings: 1,
    mood: 'Energetic',
  },
  {
    id: '44',
    title: 'Chicken and Broccoli Stir-Fry',
    image: 'https://images.unsplash.com/photo-1584302601248-67be1d4ab1d3',
    prepTime: '20 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '45',
    title: 'Veggie Sushi Rolls',
    image: 'https://images.unsplash.com/photo-1550440686-1109a91c46cb',
    prepTime: '45 mins',
    servings: 4,
    mood: 'Fresh',
  },
  {
    id: '46',
    title: 'Garlic Parmesan Potatoes',
    image: 'https://images.unsplash.com/photo-1572378533637-2051ff37de69',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '47',
    title: 'Caprese Salad Skewers',
    image: 'https://images.unsplash.com/photo-1590430421466-5b2e05c6c2b3',
    prepTime: '15 mins',
    servings: 6,
    mood: 'Fresh',
  },
  {
    id: '48',
    title: 'Stuffed Zucchini Boats',
    image: 'https://images.unsplash.com/photo-1567306858415-a292c77b1e94',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Comfort',
  },
  {
    id: '49',
    title: 'Peach Smoothie',
    image: 'https://images.unsplash.com/photo-1562198119-925e785c8b4c',
    prepTime: '5 mins',
    servings: 2,
    mood: 'Energetic',
  },
  {
    id: '50',
    title: 'Roasted Beet Salad',
    image: 'https://images.unsplash.com/photo-1608307522040-bb8ac8a22673',
    prepTime: '30 mins',
    servings: 4,
    mood: 'Fresh',
  },
  {
    id: '51',
    title: 'Creamy Avocado Pasta',
    image: 'https://images.unsplash.com/photo-1584113404044-d5c6d3a5d702',
    prepTime: '20 mins',
    servings: 2,
    mood: 'Comfort',
  },
  {
    id: '52',
    title: 'Baked Teriyaki Salmon',
    image: 'https://images.unsplash.com/photo-1573479799143-0e4f20b4b5b2',
    prepTime: '25 mins',
    servings: 4,
    mood: 'Energetic',
  },
  {
    id: '53',
    title: 'Vegetable Paella',
    image: 'https://images.unsplash.com/photo-1590461408812-e20069b2a7a8',
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
