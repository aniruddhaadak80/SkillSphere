// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="quick-links">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-list">
                        <li><a href="#1-habit-tracker-" className="footer-link">Habit Tracker</a></li>
                        <li><a href="#2-mood-based-recipe-recommender-%EF%B8%8F" className="footer-link">Mood-Based Recipe Recommender</a></li>
                        <li><a href="#3-sustainable-product-comparison-" className="footer-link">Sustainable Product Comparison</a></li>
                        <li><a href="#4-personalized-skill-builder-" className="footer-link">Personalized Skill Builder</a></li>
                        <li><a href="#5-virtual-body-language-coach-%EF%B8%8F" className="footer-link">Virtual Body Language Coach</a></li>
                        <li><a href="#6-crowdsourced-travel-recommendations-" className="footer-link">Crowdsourced Travel Recommendations</a></li>
                        <li><a href="#7-neighborhood-micro-task-exchange-" className="footer-link">Neighborhood Micro-Task Exchange</a></li>
                        <li><a href="#8-wellness-companion-" className="footer-link">Wellness Companion</a></li>
                        <li><a href="#9-ar-workspace-planner-%EF%B8%8F" className="footer-link">AR Workspace Planner</a></li>
                        <li><a href="#10-live-skill-exchange-network-" className="footer-link">Live Skill Exchange Network</a></li>
                    </ul>
                </div>
                <div className="contact-me">
                    <h3 className="footer-title">Contact Me</h3>
                    <form className="contact-form">
                        <div className="input-group">
                            <input type="email" className="email-input" placeholder="Your Email" required />
                        </div>
                        <div className="input-group">
                            <textarea className="message-input" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                    <div className="contact-email">Email: aniruddhaadak80@gmail.com</div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Aniruddha Adak. All rights reserved.</p>
                <p>GitHub Repository: <a href="https://github.com/aniruddhaadak80/SkillSphere" className="footer-link">SkillSphere</a></p>
            </div>
        </footer>
    );
};

export default Footer;
