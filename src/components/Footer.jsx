import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for contacting us, ${email}!`);
        setEmail('');
        setMessage('');
    };

    return (
        <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-10 px-6 md:px-12 lg:px-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="footer-container max-w-5xl mx-auto space-y-12"
            >
                <div className="flex flex-col lg:flex-row gap-10 justify-between">
                    {/* Quick Links Section */}
                    <div className="quick-links w-full lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-yellow-300 animate-pulse">🌐 Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "Habit Tracker", link: "#1-habit-tracker-" },
                                { name: "Mood-Based Recipe Recommender", link: "#2-mood-based-recipe-recommender-" },
                                { name: "Sustainable Product Comparison", link: "#3-sustainable-product-comparison-" },
                                { name: "Personalized Skill Builder", link: "#4-personalized-skill-builder-" },
                                { name: "Virtual Body Language Coach", link: "#5-virtual-body-language-coach-" },
                                { name: "Crowdsourced Travel Recommendations", link: "#6-crowdsourced-travel-recommendations-" },
                                { name: "Neighborhood Micro-Task Exchange", link: "#7-neighborhood-micro-task-exchange-" },
                                { name: "Wellness Companion", link: "#8-wellness-companion-" },
                                { name: "AR Workspace Planner", link: "#9-ar-workspace-planner-" },
                                { name: "Live Skill Exchange Network", link: "#10-live-skill-exchange-network-" },
                            ].map(({ name, link }, index) => (
                                <li key={index}>
                                    <a href={link} className="footer-link text-lg text-white hover:text-yellow-300 transition duration-300 ease-in-out">
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Me Section */}
                    <div className="contact-me w-full lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-yellow-300 animate-pulse">📫 Contact Me</h3>
                        <form onSubmit={handleSubmit} className="contact-form space-y-4">
                            <motion.div whileHover={{ scale: 1.05 }} className="input-group">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white text-gray-700 placeholder-gray-500 focus:ring-4 focus:ring-yellow-300 focus:outline-none transition"
                                />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="input-group">
                                <textarea
                                    value={message}
                                    onChange={handleMessageChange}
                                    placeholder="Your message here..."
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white text-gray-700 placeholder-gray-500 focus:ring-4 focus:ring-yellow-300 focus:outline-none transition"
                                />
                            </motion.div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                type="submit"
                                className="w-full py-2 bg-yellow-300 text-gray-800 rounded-lg font-semibold hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition"
                            >
                                Submit ✈️
                            </motion.button>
                        </form>
                        <p className="contact-email mt-4">
                            Email: <a href="mailto:aniruddhaadak80@gmail.com" className="footer-link text-white hover:text-yellow-300 transition duration-300 ease-in-out">aniruddhaadak80@gmail.com</a>
                        </p>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="footer-bottom text-center text-sm text-white mt-10">
                    <p>&copy; 2024 Aniruddha Adak. All Rights Reserved.</p>
                    <p>
                        GitHub Repository:{" "}
                        <a
                            href="https://github.com/aniruddhaadak80/SkillSphere"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link text-yellow-300 hover:text-white transition duration-300 ease-in-out"
                        >
                            SkillSphere
                        </a>
                    </p>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
