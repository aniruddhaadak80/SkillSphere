import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaSmile, FaSeedling, FaUserGraduate, FaRegSmile, FaGlobe, FaHandsHelping, FaHeartbeat, FaDraftingCompass, FaUsers } from 'react-icons/fa';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you for contacting us, ${email}!`);
        setEmail(''); // Clear input after submission
        setMessage(''); // Clear message after submission
    };

    return (
        <motion.footer
            className="footer text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="footer-container flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                {/* Quick Links Section */}
                <motion.div
                    className="quick-links"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    <h3 className="footer-title text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500">
                        🌐 Quick Links
                    </h3>
                    <ul className="footer-list space-y-2">
                        {[
                            { icon: <FaDumbbell />, text: 'Habit Tracker' },
                            { icon: <FaSmile />, text: 'Mood-Based Recipe Recommender' },
                            { icon: <FaSeedling />, text: 'Sustainable Product Comparison' },
                            { icon: <FaUserGraduate />, text: 'Personalized Skill Builder' },
                            { icon: <FaRegSmile />, text: 'Virtual Body Language Coach' },
                            { icon: <FaGlobe />, text: 'Crowdsourced Travel Recommendations' },
                            { icon: <FaHandsHelping />, text: 'Neighborhood Micro-Task Exchange' },
                            { icon: <FaHeartbeat />, text: 'Wellness Companion' },
                            { icon: <FaDraftingCompass />, text: 'AR Workspace Planner' },
                            { icon: <FaUsers />, text: 'Live Skill Exchange Network' },
                        ].map((link, index) => (
                            <motion.li
                                key={index}
                                whileHover={{ translateY: -3, color: '#fff' }}
                                className="flex items-center space-x-2 text-lg"
                            >
                                <span className="icon text-yellow-200">{link.icon}</span>
                                <a href={`#${index + 1}-${link.text.toLowerCase().replace(/ /g, '-')}-`} className="footer-link transition-colors duration-300 hover:text-yellow-300">
                                    {link.text}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact Me Section */}
                <div className="contact-me">
                    <h3 className="footer-title text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500">
                        📫 Contact Me
                    </h3>
                    <motion.form
                        onSubmit={handleSubmit}
                        className="contact-form space-y-4"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="input-group">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Enter your email"
                                required
                                className="email-input w-full p-3 rounded-lg border border-transparent focus:ring-4 ring-blue-500 transition-colors duration-300"
                            />
                        </div>
                        <div className="input-group">
                            <textarea
                                value={message}
                                onChange={handleMessageChange}
                                placeholder="Your message here..."
                                required
                                className="message-input w-full p-3 rounded-lg border border-transparent focus:ring-4 ring-green-500 transition-colors duration-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="submit-button w-full p-3 bg-yellow-500 text-white font-bold rounded-lg transition-transform transform hover:scale-105"
                        >
                            Submit ✈️
                        </button>
                    </motion.form>
                    <p className="contact-email mt-4 text-white text-sm">
                        Email: <a href="mailto:aniruddhaadak80@gmail.com" className="footer-link hover:underline">aniruddhaadak80@gmail.com</a>
                    </p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom mt-10 border-t border-white pt-6 text-center text-sm text-white">
                <p>&copy; 2024 Aniruddha Adak. All Rights Reserved.</p>
                <p className="mt-2">
                    GitHub Repository:{' '}
                    <a
                        href="https://github.com/aniruddhaadak80/SkillSphere"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link hover:text-yellow-400"
                    >
                        SkillSphere
                    </a>
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;
