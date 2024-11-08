import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaPaperPlane, FaLink } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you for contacting us, ${email}!`);
        setEmail('');
        setMessage('');
    };

    return (
        <motion.footer 
            className="footer bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 text-white"
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
                            'Habit Tracker',
                            'Mood-Based Recipe Recommender',
                            'Sustainable Product Comparison',
                            'Personalized Skill Builder',
                            'Virtual Body Language Coach',
                            'Crowdsourced Travel Recommendations',
                            'Neighborhood Micro-Task Exchange',
                            'Wellness Companion',
                            'AR Workspace Planner',
                            'Live Skill Exchange Network'
                        ].map((link, index) => (
                            <motion.li
                                key={index}
                                whileHover={{ scale: 1.1, color: '#ffd700' }}
                                transition={{ duration: 0.2 }}
                            >
                                <a href={`#${index + 1}-${link.toLowerCase().replace(/ /g, '-')}`} className="footer-link flex items-center gap-2">
                                    <FaLink /> {link}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

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
                        <div className="input-group">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Enter your email"
                                required
                                className="email-input w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="input-group">
                            <textarea
                                value={message}
                                onChange={handleMessageChange}
                                placeholder="Your message here..."
                                required
                                className="message-input w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="submit-button flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            <FaPaperPlane /> Submit
                        </button>
                    </form>
                    <p className="contact-email mt-4">
                        Email: <a href="mailto:aniruddhaadak80@gmail.com" className="footer-link underline hover:text-yellow-300">aniruddhaadak80@gmail.com</a>
                    </p>
                </motion.div>

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
        </motion.footer>
    );
};

export default Footer;
