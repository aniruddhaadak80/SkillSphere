import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaPaperPlane, FaLink, FaRegSmile, FaTasks, FaHeart, FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        setIsEmailValid(/^\S+@\S+\.\S+$/.test(value));
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEmailValid) {
            alert(`Thank you for contacting us, ${email}!`);
            setEmail('');
            setMessage('');
        } else {
            alert('Please enter a valid email address.');
        }
    };

    return (
        <motion.footer 
            className="footer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="footer-container grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Quick Links Section */}
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
                            { name: 'Habit Tracker', icon: <FaTasks /> },
                            { name: 'Mood-Based Recipe Recommender', icon: <FaRegSmile /> },
                            { name: 'Sustainable Product Comparison', icon: <FaHeart /> },
                            { name: 'Personalized Skill Builder', icon: <FaRocket /> },
                            { name: 'Virtual Body Language Coach', icon: <FaLightbulb /> },
                            { name: 'Crowdsourced Travel Recommendations', icon: <FaUsers /> },
                            { name: 'Neighborhood Micro-Task Exchange', icon: <FaTasks /> },
                            { name: 'Wellness Companion', icon: <FaHeart /> },
                            { name: 'AR Workspace Planner', icon: <FaRocket /> },
                            { name: 'Live Skill Exchange Network', icon: <FaUsers /> }
                        ].map((link, index) => (
                            <motion.li
                                key={index}
                                whileHover={{ scale: 1.1, color: '#ffd700' }}
                                transition={{ duration: 0.2 }}
                            >
                                <a href={`#${index + 1}-${link.name.toLowerCase().replace(/ /g, '-')}`} className="footer-link flex items-center gap-2">
                                    {link.icon} {link.name}
                                </a>
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
        {/* Email Input with Icon */}
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
        
        {/* Message Input with Icon */}
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

        {/* Submit Button with Animation and Hover Effect */}
        <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#3b82f6' }}
            transition={{ duration: 0.2 }}
            type="submit"
            className="submit-button flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
            <FaPaperPlane /> Submit
        </motion.button>
    </form>
    
    {/* Contact Email */}
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
        </motion.footer>
    );
};

export default Footer;
