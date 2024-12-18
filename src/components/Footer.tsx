import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for client-side navigation
import {
    FaEnvelope, FaGithub, FaPaperPlane, FaRegSmile, FaTasks, FaHeart, FaRocket, FaLightbulb, FaMoon, FaUsers
} from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { Home, Activity, ChefHat, Leaf, Brain, Users, Map, HandHeart, Heart, LayoutDashboard, Share2 } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsEmailValid(/^\S+@\S+\.\S+$/.test(value));
    };

    const handleMessageChange = (e) => setMessage(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEmailValid) {
            alert(`Thank you for contacting us, ${email}!`);
            setEmail('');
            setMessage('');
        } else {
            alert('Please enter a valid email address.');
        }
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark'); // Add dark mode class
        } else {
            document.documentElement.classList.remove('dark'); // Remove dark mode class
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    return (
        <motion.footer
            className="footer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="footer-container grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                    className="quick-links"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="footer-title text-xl font-bold mb-4 flex items-center gap-2">
                        <IoMdRocket className="text-yellow-300" /> Quick Links
                    </h3>
                    <ul className="footer-list space-y-2">
                        {[ 
                            { path: '/', label: 'Home', icon: <Home /> },
                            { path: '/habit', label: 'Habit Tracker', icon: <Activity /> },
                            { path: '/recipes', label: 'Recipes', icon: <ChefHat /> },
                            { path: '/sustainability', label: 'Sustainability', icon: <Leaf /> },
                            { path: '/skillbuilder', label: 'Skill Builder', icon: <Brain /> },
                            { path: '/bodylanguage', label: 'Body Language', icon: <Users /> },
                            { path: '/traveltips', label: 'Travel Tips', icon: <Map /> },
                            { path: '/neighborexchange', label: 'Neighbor Exchange', icon: <HandHeart /> },
                            { path: '/wellness', label: 'Wellness', icon: <Heart /> },
                            { path: '/workspace', label: 'Workspace', icon: <LayoutDashboard /> },
                            { path: '/skillexchange', label: 'Skill Exchange', icon: <Share2 /> }
                        ].map((link, index) => (
                            <motion.li
                                key={index}
                                whileHover={{ scale: 1.1, color: '#ffd700' }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link to={link.path} className="footer-link flex items-center gap-2">
                                    {link.icon} {link.label}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact Me Section */}
                <motion.div
                    className="contact-me"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <h3 className="footer-title text-xl font-bold mb-4 flex items-center gap-2">
                        <FaEnvelope className="text-blue-300" /> Contact Me
                    </h3>
                    <form onSubmit={handleSubmit} className="contact-form space-y-4">
                        <label className="block text-sm font-medium flex items-center gap-2">
                            <FaEnvelope className="text-blue-500" /> Email:
                        </label>
                        <div className="input-group flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-md p-2">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Enter your email"
                                required
                                className={`email-input w-full p-2 rounded-md focus:outline-none bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 ${
                                    isEmailValid ? 'focus:ring-2 focus:ring-blue-400' : 'focus:ring-2 focus:ring-red-500 border-red-500'
                                }`}
                            />
                            {!isEmailValid && (
                                <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
                            )}
                        </div>

                        <label className="block text-sm font-medium flex items-center gap-2">
                            <FaPaperPlane className="text-green-500" /> Message:
                        </label>
                        <div className="input-group flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-md p-2">
                            <textarea
                                value={message}
                                onChange={handleMessageChange}
                                placeholder="Your message here..."
                                required
                                className="message-input w-full p-2 rounded-md focus:outline-none bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: '#3b82f6' }}
                            transition={{ duration: 0.2 }}
                            type="submit"
                            className="submit-button flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            <FaPaperPlane /> Submit
                        </motion.button>
                    </form>

                    <p className="contact-email mt-4">
                        Email: <a href="mailto:aniruddhaadak80@gmail.com" className="footer-link underline hover:text-yellow-300">aniruddhaadak80@gmail.com</a>
                    </p>
                </motion.div>

                {/* Footer Bottom Section */}
                <motion.div
                    className="footer-bottom"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <p className="text-lg">&copy; 2024 Aniruddha Adak. All Rights Reserved.</p>
                    <p className="mt-2 flex items-center gap-2">
                        GitHub Repository:
                        <a
                            href="https://github.com/aniruddhaadak80/SkillSphere"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link underline hover:text-yellow-300 flex items-center gap-1"
                        >
                            <FaGithub /> SkillSphere
                        </a>
                    </p>
                </motion.div>
            </div>

            {/* Light/Dark Mode Toggle */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={toggleDarkMode}
                className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
                {isDarkMode ? <FaMoon /> : <FaLightbulb />} {/* Toggle Icon */}
            </motion.button>

            {/* Scroll to Top Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={scrollToTop}
                className="fixed bottom-20 right-8 p-3 bg-green-600 text-white rounded-full hover:bg-green-700"
            >
                <FaRocket />
            </motion.button>
        </motion.footer>
    );
};

export default Footer;
