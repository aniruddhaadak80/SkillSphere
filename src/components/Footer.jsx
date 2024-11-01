import React, { useState } from 'react';
import './Footer.css'; // Importing the CSS file
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for contacting us, ${email}!`);
        setEmail(''); // Clear input after submission
        setMessage(''); // Clear message after submission
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="quick-links">
                    <h3 className="footer-title">🌐 Quick Links</h3>
                    <ul className="footer-list">
                        <li><a href="#1-habit-tracker-" className="footer-link">Habit Tracker</a></li>
                        <li><a href="#2-mood-based-recipe-recommender-" className="footer-link">Mood-Based Recipe Recommender</a></li>
                        <li><a href="#3-sustainable-product-comparison-" className="footer-link">Sustainable Product Comparison</a></li>
                        <li><a href="#4-personalized-skill-builder-" className="footer-link">Personalized Skill Builder</a></li>
                        <li><a href="#5-virtual-body-language-coach-" className="footer-link">Virtual Body Language Coach</a></li>
                        <li><a href="#6-crowdsourced-travel-recommendations-" className="footer-link">Crowdsourced Travel Recommendations</a></li>
                        <li><a href="#7-neighborhood-micro-task-exchange-" className="footer-link">Neighborhood Micro-Task Exchange</a></li>
                        <li><a href="#8-wellness-companion-" className="footer-link">Wellness Companion</a></li>
                        <li><a href="#9-ar-workspace-planner-" className="footer-link">AR Workspace Planner</a></li>
                        <li><a href="#10-live-skill-exchange-network-" className="footer-link">Live Skill Exchange Network</a></li>
                    </ul>
                </div>
                <div className="contact-me">
                    <h3 className="footer-title">📫 Contact Me</h3>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="input-group">
                            <input 
                                type="email" 
                                value={email} 
                                onChange={handleEmailChange} 
                                placeholder="Enter your email"
                                required 
                                className="email-input" 
                            />
                        </div>
                        <div className="input-group">
                            <textarea 
                                value={message} 
                                onChange={handleMessageChange} 
                                placeholder="Your message here..."
                                required 
                                className="message-input"
                            />
                        </div>
                        <button type="submit" className="submit-button">
                            Submit ✈️
                        </button>
                    </form>
                    <p className="contact-email">
                        Email: <a href="mailto:aniruddhaadak80@gmail.com" className="footer-link">aniruddhaadak80@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Aniruddha Adak. All Rights Reserved.</p>
                <p>
                    GitHub Repository: 
                    <a 
                        href="https://github.com/aniruddhaadak80/SkillSphere" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="footer-link github-link"
                    >
                        <FaGithub size={20} />
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
