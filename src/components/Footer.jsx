import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-center p-6 border-t border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="list-none mt-2">
                        <li><a href="#1-habit-tracker-" className="text-blue-600 hover:underline">Habit Tracker</a></li>
                        <li><a href="#2-mood-based-recipe-recommender-%EF%B8%8F" className="text-blue-600 hover:underline">Mood-Based Recipe Recommender</a></li>
                        <li><a href="#3-sustainable-product-comparison-" className="text-blue-600 hover:underline">Sustainable Product Comparison</a></li>
                        <li><a href="#4-personalized-skill-builder-" className="text-blue-600 hover:underline">Personalized Skill Builder</a></li>
                        <li><a href="#5-virtual-body-language-coach-%EF%B8%8F" className="text-blue-600 hover:underline">Virtual Body Language Coach</a></li>
                        <li><a href="#6-crowdsourced-travel-recommendations-" className="text-blue-600 hover:underline">Crowdsourced Travel Recommendations</a></li>
                        <li><a href="#7-neighborhood-micro-task-exchange-" className="text-blue-600 hover:underline">Neighborhood Micro-Task Exchange</a></li>
                        <li><a href="#8-wellness-companion-" className="text-blue-600 hover:underline">Wellness Companion</a></li>
                        <li><a href="#9-ar-workspace-planner-%EF%B8%8F" className="text-blue-600 hover:underline">AR Workspace Planner</a></li>
                        <li><a href="#10-live-skill-exchange-network-" className="text-blue-600 hover:underline">Live Skill Exchange Network</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Contact Me</h3>
                    <p className="mt-2">
                        Email: <a href="mailto:aniruddhaadak80@gmail.com" className="text-blue-600 hover:underline">aniruddhaadak80@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="text-sm">
                <p className="mb-2">&copy; 2024 Aniruddha Adak. All Rights Reserved.</p>
                <p>
                    GitHub Repository: <a href="https://github.com/aniruddhaadak80/SkillSphere" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SkillSphere</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
