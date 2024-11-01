import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import HabitTracker from './pages/HabitTracker';
import Recipes from './pages/Recipes';
import Sustainability from './pages/Sustainability';
import SkillBuilder from './pages/SkillBuilder';
import BodyLanguage from './pages/BodyLanguage';
import TravelTips from './pages/TravelTips';
import NeighborExchange from './pages/NeighborExchange';
import Wellness from './pages/Wellness';
import Workspace from './pages/Workspace';
import SkillExchange from './pages/SkillExchange';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/habit" element={<HabitTracker />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/skillbuilder" element={<SkillBuilder />} />
            <Route path="/bodylanguage" element={<BodyLanguage />} />
            <Route path="/traveltips" element={<TravelTips />} />
            <Route path="/neighborexchange" element={<NeighborExchange />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/skillexchange" element={<SkillExchange />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;