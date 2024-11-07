import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Trophy, Star, ArrowRight } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  progress: number;
  level: number;
  category: string;
  nextMilestone: string;
  color: string;
  textColor: string;
  progressColor: string;
  buttonColor: string;
}

const categories = [
  'All',
  'Programming',
  'Blockchain',
  'AI',
  'Quantum Computing',
  'Cybersecurity',
  'App Development',
  'Web Development',
  'Version Control',
  'Databases',
  'Operating Systems',
  'API Development',
  'Design Tools',
];

const SkillBuilder = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

 const skills: Skill[] = [
    // Programming Languages
    { id: '1', name: 'JavaScript', progress: 80, level: 4, category: 'Programming', nextMilestone: 'Build a Custom Library', color: 'bg-yellow-50', textColor: 'text-yellow-700', progressColor: 'bg-yellow-400', buttonColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { id: '2', name: 'Python', progress: 80, level: 4, category: 'Programming', nextMilestone: 'Complete a Data Science Project', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { id: '3', name: 'Go', progress: 70, level: 3, category: 'Programming', nextMilestone: 'Build a Microservice', color: 'bg-green-50', textColor: 'text-green-700', progressColor: 'bg-green-400', buttonColor: 'bg-gradient-to-r from-green-400 to-green-600' },
    { id: '4', name: 'Java', progress: 75, level: 3, category: 'Programming', nextMilestone: 'Build an Enterprise App', color: 'bg-red-50', textColor: 'text-red-700', progressColor: 'bg-red-400', buttonColor: 'bg-gradient-to-r from-red-400 to-red-600' },
    { id: '5', name: 'C++', progress: 65, level: 3, category: 'Programming', nextMilestone: 'Complete a System Programming Project', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },
    { id: '6', name: 'Rust', progress: 60, level: 2, category: 'Programming', nextMilestone: 'Contribute to an Open-Source Project', color: 'bg-purple-50', textColor: 'text-purple-700', progressColor: 'bg-purple-400', buttonColor: 'bg-gradient-to-r from-purple-400 to-purple-600' },
    { id: '7', name: 'Ruby', progress: 70, level: 3, category: 'Programming', nextMilestone: 'Build a Web Application', color: 'bg-red-50', textColor: 'text-red-700', progressColor: 'bg-red-400', buttonColor: 'bg-gradient-to-r from-red-400 to-red-600' },
    { id: '8', name: 'PHP', progress: 60, level: 3, category: 'Programming', nextMilestone: 'Build an E-commerce Website', color: 'bg-yellow-50', textColor: 'text-yellow-700', progressColor: 'bg-yellow-400', buttonColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { id: '9', name: 'Swift', progress: 80, level: 4, category: 'Programming', nextMilestone: 'Develop an iOS App', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },
    { id: '10', name: 'Kotlin', progress: 75, level: 3, category: 'Programming', nextMilestone: 'Develop an Android App', color: 'bg-purple-50', textColor: 'text-purple-700', progressColor: 'bg-purple-400', buttonColor: 'bg-gradient-to-r from-purple-400 to-purple-600' },

    // Python Libraries
    { id: '11', name: 'TensorFlow', progress: 90, level: 5, category: 'AI', nextMilestone: 'Deploy a Neural Network', color: 'bg-green-50', textColor: 'text-green-700', progressColor: 'bg-green-400', buttonColor: 'bg-gradient-to-r from-green-400 to-green-600' },
    { id: '12', name: 'NumPy', progress: 85, level: 4, category: 'AI', nextMilestone: 'Complete Data Analysis Project', color: 'bg-yellow-50', textColor: 'text-yellow-700', progressColor: 'bg-yellow-400', buttonColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { id: '13', name: 'Pandas', progress: 80, level: 4, category: 'AI', nextMilestone: 'Analyze Complex Datasets', color: 'bg-cyan-50', textColor: 'text-cyan-700', progressColor: 'bg-cyan-400', buttonColor: 'bg-gradient-to-r from-cyan-400 to-cyan-600' },
    { id: '14', name: 'Scikit-Learn', progress: 75, level: 3, category: 'AI', nextMilestone: 'Build a Machine Learning Model', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { id: '15', name: 'Matplotlib', progress: 80, level: 4, category: 'AI', nextMilestone: 'Create Data Visualizations', color: 'bg-indigo-50', textColor: 'text-indigo-700', progressColor: 'bg-indigo-400', buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },
    { id: '16', name: 'PyTorch', progress: 70, level: 3, category: 'AI', nextMilestone: 'Train a Deep Learning Model', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },

    // Web Development
    { id: '17', name: 'React.js', progress: 85, level: 4, category: 'Web Development', nextMilestone: 'Build a Full Stack Application', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { id: '18', name: 'Next.js', progress: 75, level: 3, category: 'Web Development', nextMilestone: 'Contribute to Open Source', color: 'bg-indigo-50', textColor: 'text-indigo-700', progressColor: 'bg-indigo-400', buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },
    { id: '19', name: 'Vue.js', progress: 70, level: 3, category: 'Web Development', nextMilestone: 'Build a Progressive Web App', color: 'bg-green-50', textColor: 'text-green-700', progressColor: 'bg-green-400', buttonColor: 'bg-gradient-to-r from-green-400 to-green-600' },
    { id: '20', name: 'Angular', progress: 80, level: 4, category: 'Web Development', nextMilestone: 'Create an Enterprise Application', color: 'bg-yellow-50', textColor: 'text-yellow-700', progressColor: 'bg-yellow-400', buttonColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { id: '21', name: 'Svelte', progress: 60, level: 2, category: 'Web Development', nextMilestone: 'Learn SvelteKit', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },

    // Blockchain
    { id: '22', name: 'Ethereum', progress: 75, level: 3, category: 'Blockchain', nextMilestone: 'Create a DApp on Ethereum', color: 'bg-indigo-50', textColor: 'text-indigo-700', progressColor: 'bg-indigo-400', buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },
    { id: '23', name: 'Solidity', progress: 70, level: 3, category: 'Blockchain', nextMilestone: 'Deploy Smart Contracts', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },
    { id: '24', name: 'Bitcoin', progress: 65, level: 3, category: 'Blockchain', nextMilestone: 'Understand Bitcoin Network', color: 'bg-purple-50', textColor: 'text-purple-700', progressColor: 'bg-purple-400', buttonColor: 'bg-gradient-to-r from-purple-400 to-purple-600' },

    // Operating Systems
    { id: '25', name: 'Linux', progress: 70, level: 3, category: 'Operating Systems', nextMilestone: 'Master Linux Commands', color: 'bg-purple-50', textColor: 'text-purple-700', progressColor: 'bg-purple-400', buttonColor: 'bg-gradient-to-r from-purple-400 to-purple-600' },
    { id: '26', name: 'Windows', progress: 80, level: 4, category: 'Operating Systems', nextMilestone: 'Become an Advanced User', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { id: '27', name: 'macOS', progress: 65, level: 3, category: 'Operating Systems', nextMilestone: 'Master System Preferences', color: 'bg-gray-50', textColor: 'text-gray-700', progressColor: 'bg-gray-400', buttonColor: 'bg-gradient-to-r from-gray-400 to-gray-600' },

    // Tools & Platforms
    { id: '28', name: 'Git', progress: 90, level: 5, category: 'Version Control', nextMilestone: 'Contribute to Open Source Projects', color: 'bg-green-50', textColor: 'text-green-700', progressColor: 'bg-green-400', buttonColor: 'bg-gradient-to-r from-green-400 to-green-600' },
    { id: '29', name: 'GitHub', progress: 85, level: 4, category: 'Version Control', nextMilestone: 'Build a Personal Project on GitHub', color: 'bg-gray-50', textColor: 'text-gray-700', progressColor: 'bg-gray-400', buttonColor: 'bg-gradient-to-r from-gray-400 to-gray-600' },
    { id: '30', name: 'Docker', progress: 80, level: 4, category: 'App Development', nextMilestone: 'Dockerize an Application', color: 'bg-yellow-50', textColor: 'text-yellow-700', progressColor: 'bg-yellow-400', buttonColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },

    // Design Tools
    { id: '31', name: 'Figma', progress: 85, level: 4, category: 'Design Tools', nextMilestone: 'Create Interactive Prototypes', color: 'bg-pink-50', textColor: 'text-pink-700', progressColor: 'bg-pink-400', buttonColor: 'bg-gradient-to-r from-pink-400 to-pink-600' },
    { id: '32', name: 'Canva', progress: 80, level: 4, category: 'Design Tools', nextMilestone: 'Create a Brand Kit', color: 'bg-pink-50', textColor: 'text-pink-700', progressColor: 'bg-pink-400', buttonColor: 'bg-gradient-to-r from-pink-400 to-pink-600' },

    // Databases
    { id: '33', name: 'SQL', progress: 85, level: 4, category: 'Databases', nextMilestone: 'Optimize SQL Queries', color: 'bg-orange-50', textColor: 'text-orange-700', progressColor: 'bg-orange-400', buttonColor: 'bg-gradient-to-r from-orange-400 to-orange-600' },
    { id: '34', name: 'MongoDB', progress: 80, level: 4, category: 'Databases', nextMilestone: 'Design a NoSQL Database', color: 'bg-green-50', textColor: 'text-green-700', progressColor: 'bg-green-400', buttonColor: 'bg-gradient-to-r from-green-400 to-green-600' },
    { id: '35', name: 'MySQL', progress: 75, level: 3, category: 'Databases', nextMilestone: 'Set Up MySQL for Web Projects', color: 'bg-yellow-50', textColor: 'text-yellow-700', progressColor: 'bg-yellow-400', buttonColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { id: '36', name: 'PostgreSQL', progress: 70, level: 3, category: 'Databases', nextMilestone: 'Design Complex Queries', color: 'bg-indigo-50', textColor: 'text-indigo-700', progressColor: 'bg-indigo-400', buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },
    { id: '37', name: 'Redis', progress: 80, level: 4, category: 'Databases', nextMilestone: 'Implement Caching Strategy', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },
   
    // DevOps
    { id: '38', name: 'Jenkins', progress: 75, level: 3, category: 'DevOps', nextMilestone: 'Set Up Continuous Integration Pipeline', color: 'bg-purple-50', textColor: 'text-purple-700', progressColor: 'bg-purple-400', buttonColor: 'bg-gradient-to-r from-purple-400 to-purple-600' },
    { id: '39', name: 'Kubernetes', progress: 80, level: 4, category: 'DevOps', nextMilestone: 'Deploy a Containerized Application', color: 'bg-green-50', textColor: 'text-green-700', progressColor: 'bg-green-400', buttonColor: 'bg-gradient-to-r from-green-400 to-green-600' },
    { id: '40', name: 'Docker Compose', progress: 70, level: 3, category: 'DevOps', nextMilestone: 'Setup Multi-Container Applications', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { id: '41', name: 'Terraform', progress: 75, level: 3, category: 'DevOps', nextMilestone: 'Deploy Infrastructure as Code', color: 'bg-orange-50', textColor: 'text-orange-700', progressColor: 'bg-orange-400', buttonColor: 'bg-gradient-to-r from-orange-400 to-orange-600' },
    { id: '42', name: 'Ansible', progress: 65, level: 3, category: 'DevOps', nextMilestone: 'Automate Configuration Management', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },

    // Cloud Computing
    { id: '43', name: 'AWS', progress: 80, level: 4, category: 'Cloud', nextMilestone: 'Build Serverless Architecture', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { id: '44', name: 'Google Cloud', progress: 70, level: 3, category: 'Cloud', nextMilestone: 'Deploy Cloud Functions', color: 'bg-yellow-50', textColor: 'text-yellow-700', progressColor: 'bg-yellow-400', buttonColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { id: '45', name: 'Azure', progress: 75, level: 3, category: 'Cloud', nextMilestone: 'Host a Web App on Azure', color: 'bg-indigo-50', textColor: 'text-indigo-700', progressColor: 'bg-indigo-400', buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },
    { id: '46', name: 'Firebase', progress: 80, level: 4, category: 'Cloud', nextMilestone: 'Integrate Firebase with React', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },

    // Mobile Development
    { id: '47', name: 'React Native', progress: 85, level: 4, category: 'Mobile Development', nextMilestone: 'Build a Cross-Platform App', color: 'bg-green-50', textColor: 'text-green-700', progressColor: 'bg-green-400', buttonColor: 'bg-gradient-to-r from-green-400 to-green-600' },
    { id: '48', name: 'Flutter', progress: 80, level: 4, category: 'Mobile Development', nextMilestone: 'Create an iOS/Android App with Flutter', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { id: '49', name: 'Xamarin', progress: 75, level: 3, category: 'Mobile Development', nextMilestone: 'Build a Xamarin App', color: 'bg-yellow-50', textColor: 'text-yellow-700', progressColor: 'bg-yellow-400', buttonColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },

    // Game Development
    { id: '50', name: 'Unity', progress: 90, level: 5, category: 'Game Development', nextMilestone: 'Develop a 2D Game', color: 'bg-pink-50', textColor: 'text-pink-700', progressColor: 'bg-pink-400', buttonColor: 'bg-gradient-to-r from-pink-400 to-pink-600' },
    { id: '51', name: 'Unreal Engine', progress: 80, level: 4, category: 'Game Development', nextMilestone: 'Create a 3D Game', color: 'bg-indigo-50', textColor: 'text-indigo-700', progressColor: 'bg-indigo-400', buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },

    // Networking
    { id: '52', name: 'TCP/IP', progress: 80, level: 4, category: 'Networking', nextMilestone: 'Set Up a Local Network', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { id: '53', name: 'DNS', progress: 75, level: 3, category: 'Networking', nextMilestone: 'Configure DNS Settings', color: 'bg-yellow-50', textColor: 'text-yellow-700', progressColor: 'bg-yellow-400', buttonColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { id: '54', name: 'HTTP/HTTPS', progress: 85, level: 4, category: 'Networking', nextMilestone: 'Optimize HTTP Requests', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },

    // Cybersecurity
    { id: '55', name: 'Firewalls', progress: 75, level: 3, category: 'Cybersecurity', nextMilestone: 'Set Up a Basic Firewall', color: 'bg-orange-50', textColor: 'text-orange-700', progressColor: 'bg-orange-400', buttonColor: 'bg-gradient-to-r from-orange-400 to-orange-600' },
    { id: '56', name: 'Penetration Testing', progress: 70, level: 3, category: 'Cybersecurity', nextMilestone: 'Perform a Security Audit', color: 'bg-red-50', textColor: 'text-red-700', progressColor: 'bg-red-400', buttonColor: 'bg-gradient-to-r from-red-400 to-red-600' },
    { id: '57', name: 'Encryption', progress: 80, level: 4, category: 'Cybersecurity', nextMilestone: 'Implement SSL/TLS for Secure Connections', color: 'bg-purple-50', textColor: 'text-purple-700', progressColor: 'bg-purple-400', buttonColor: 'bg-gradient-to-r from-purple-400 to-purple-600' },
    { id: '58', name: 'VPNs', progress: 70, level: 3, category: 'Cybersecurity', nextMilestone: 'Setup a VPN for Privacy Protection', color: 'bg-cyan-50', textColor: 'text-cyan-700', progressColor: 'bg-cyan-400', buttonColor: 'bg-gradient-to-r from-cyan-400 to-cyan-600' },

    // AI & Machine Learning
    { id: '59', name: 'Deep Learning', progress: 90, level: 5, category: 'AI & Machine Learning', nextMilestone: 'Train a Deep Neural Network', color: 'bg-pink-50', textColor: 'text-pink-700', progressColor: 'bg-pink-400', buttonColor: 'bg-gradient-to-r from-pink-400 to-pink-600' },
    { id: '60', name: 'Reinforcement Learning', progress: 80, level: 4, category: 'AI & Machine Learning', nextMilestone: 'Create an AI Agent for a Game', color: 'bg-indigo-50', textColor: 'text-indigo-700', progressColor: 'bg-indigo-400', buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },
    { id: '61', name: 'Natural Language Processing (NLP)', progress: 85, level: 4, category: 'AI & Machine Learning', nextMilestone: 'Build a Chatbot', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },
    { id: '62', name: 'Scikit-learn', progress: 80, level: 4, category: 'AI & Machine Learning', nextMilestone: 'Build a Machine Learning Model', color: 'bg-orange-50', textColor: 'text-orange-700', progressColor: 'bg-orange-400', buttonColor: 'bg-gradient-to-r from-orange-400 to-orange-600' },

    // Data Science
    { id: '63', name: 'Pandas', progress: 85, level: 4, category: 'Data Science', nextMilestone: 'Analyze a Large Dataset', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { id: '64', name: 'Matplotlib', progress: 80, level: 4, category: 'Data Science', nextMilestone: 'Create Data Visualizations', color: 'bg-green-50', textColor: 'text-green-700', progressColor: 'bg-green-400', buttonColor: 'bg-gradient-to-r from-green-400 to-green-600' },
    { id: '65', name: 'Seaborn', progress: 75, level: 3, category: 'Data Science', nextMilestone: 'Create Advanced Plots', color: 'bg-purple-50', textColor: 'text-purple-700', progressColor: 'bg-purple-400', buttonColor: 'bg-gradient-to-r from-purple-400 to-purple-600' },
    { id: '66', name: 'NumPy', progress: 85, level: 4, category: 'Data Science', nextMilestone: 'Perform Advanced Numerical Computations', color: 'bg-red-50', textColor: 'text-red-700', progressColor: 'bg-red-400', buttonColor: 'bg-gradient-to-r from-red-400 to-red-600' },
    { id: '67', name: 'Jupyter Notebook', progress: 80, level: 4, category: 'Data Science', nextMilestone: 'Build an Interactive Notebook', color: 'bg-indigo-50', textColor: 'text-indigo-700', progressColor: 'bg-indigo-400', buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },
    { id: '68', name: 'SciPy', progress: 80, level: 4, category: 'Data Science', nextMilestone: 'Solve Scientific Computations', color: 'bg-pink-50', textColor: 'text-pink-700', progressColor: 'bg-pink-400', buttonColor: 'bg-gradient-to-r from-pink-400 to-pink-600' },
    { id: '69', name: 'Tableau', progress: 75, level: 3, category: 'Data Science', nextMilestone: 'Create Interactive Dashboards', color: 'bg-orange-50', textColor: 'text-orange-700', progressColor: 'bg-orange-400', buttonColor: 'bg-gradient-to-r from-orange-400 to-orange-600' },

    // Software Testing
    { id: '70', name: 'JUnit', progress: 85, level: 4, category: 'Software Testing', nextMilestone: 'Write Unit Tests for Java Applications', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },
    { id: '71', name: 'Selenium', progress: 80, level: 4, category: 'Software Testing', nextMilestone: 'Automate Browser Testing', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { id: '72', name: 'Postman', progress: 75, level: 3, category: 'Software Testing', nextMilestone: 'Test APIs with Postman', color: 'bg-yellow-50', textColor: 'text-yellow-700', progressColor: 'bg-yellow-400', buttonColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },

    // Web Design
    { id: '73', name: 'Figma', progress: 85, level: 4, category: 'Web Design', nextMilestone: 'Design Interactive Web Prototypes', color: 'bg-green-50', textColor: 'text-green-700', progressColor: 'bg-green-400', buttonColor: 'bg-gradient-to-r from-green-400 to-green-600' },
    { id: '74', name: 'Sketch', progress: 80, level: 4, category: 'Web Design', nextMilestone: 'Create Visual Designs for Web Apps', color: 'bg-indigo-50', textColor: 'text-indigo-700', progressColor: 'bg-indigo-400', buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },
    { id: '75', name: 'Adobe XD', progress: 80, level: 4, category: 'Web Design', nextMilestone: 'Create UX/UI Designs for Websites', color: 'bg-pink-50', textColor: 'text-pink-700', progressColor: 'bg-pink-400', buttonColor: 'bg-gradient-to-r from-pink-400 to-pink-600' },

    // Project Management
    { id: '76', name: 'Agile', progress: 80, level: 4, category: 'Project Management', nextMilestone: 'Run a Sprint Planning Meeting', color: 'bg-orange-50', textColor: 'text-orange-700', progressColor: 'bg-orange-400', buttonColor: 'bg-gradient-to-r from-orange-400 to-orange-600' },
    { id: '77', name: 'Scrum', progress: 85, level: 4, category: 'Project Management', nextMilestone: 'Lead a Scrum Team', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { id: '78', name: 'Kanban', progress: 75, level: 3, category: 'Project Management', nextMilestone: 'Set Up Kanban Workflow', color: 'bg-green-50', textColor: 'text-green-700', progressColor: 'bg-green-400', buttonColor: 'bg-gradient-to-r from-green-400 to-green-600' },

    // Business Intelligence
    { id: '79', name: 'Power BI', progress: 80, level: 4, category: 'Business Intelligence', nextMilestone: 'Build Data Reports', color: 'bg-indigo-50', textColor: 'text-indigo-700', progressColor: 'bg-indigo-400', buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },
    { id: '80', name: 'Looker', progress: 75, level: 3, category: 'Business Intelligence', nextMilestone: 'Create Data Dashboards', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },
    { id: '81', name: 'QlikView', progress: 70, level: 3, category: 'Business Intelligence', nextMilestone: 'Generate Interactive Data Insights', color: 'bg-pink-50', textColor: 'text-pink-700', progressColor: 'bg-pink-400', buttonColor: 'bg-gradient-to-r from-pink-400 to-pink-600' },

    // Cloud Security
    { id: '82', name: 'Cloudflare', progress: 80, level: 4, category: 'Cloud Security', nextMilestone: 'Secure a Web Application with Cloudflare', color: 'bg-orange-50', textColor: 'text-orange-700', progressColor: 'bg-orange-400', buttonColor: 'bg-gradient-to-r from-orange-400 to-orange-600' },
    { id: '83', name: 'AWS Security', progress: 75, level: 3, category: 'Cloud Security', nextMilestone: 'Configure IAM Roles', color: 'bg-red-50', textColor: 'text-red-700', progressColor: 'bg-red-400', buttonColor: 'bg-gradient-to-r from-red-400 to-red-600' },

    // Big Data
    { id: '84', name: 'Hadoop', progress: 80, level: 4, category: 'Big Data', nextMilestone: 'Process Large Datasets with Hadoop', color: 'bg-cyan-50', textColor: 'text-cyan-700', progressColor: 'bg-cyan-400', buttonColor: 'bg-gradient-to-r from-cyan-400 to-cyan-600' },
    { id: '85', name: 'Apache Spark', progress: 85, level: 4, category: 'Big Data', nextMilestone: 'Analyze Big Data with Spark', color: 'bg-green-50', textColor: 'text-green-700', progressColor: 'bg-green-400', buttonColor: 'bg-gradient-to-r from-green-400 to-green-600' },
    { id: '86', name: 'Kafka', progress: 75, level: 3, category: 'Big Data', nextMilestone: 'Set Up Real-Time Data Streaming', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },

    // Database Management
    { id: '87', name: 'SQL Server', progress: 85, level: 4, category: 'Database Management', nextMilestone: 'Optimize Queries and Database Performance', color: 'bg-yellow-50', textColor: 'text-yellow-700', progressColor: 'bg-yellow-400', buttonColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { id: '88', name: 'MySQL', progress: 80, level: 4, category: 'Database Management', nextMilestone: 'Set Up and Manage MySQL Databases', color: 'bg-pink-50', textColor: 'text-pink-700', progressColor: 'bg-pink-400', buttonColor: 'bg-gradient-to-r from-pink-400 to-pink-600' },
    { id: '89', name: 'MongoDB', progress: 75, level: 3, category: 'Database Management', nextMilestone: 'Build NoSQL Databases with MongoDB', color: 'bg-indigo-50', textColor: 'text-indigo-700', progressColor: 'bg-indigo-400', buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },

    // IoT (Internet of Things)
    { id: '90', name: 'Raspberry Pi', progress: 80, level: 4, category: 'IoT', nextMilestone: 'Build an IoT Device with Raspberry Pi', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },
    { id: '91', name: 'Arduino', progress: 75, level: 3, category: 'IoT', nextMilestone: 'Create IoT Projects with Arduino', color: 'bg-orange-50', textColor: 'text-orange-700', progressColor: 'bg-orange-400', buttonColor: 'bg-gradient-to-r from-orange-400 to-orange-600' },
    { id: '92', name: 'MQTT', progress: 70, level: 3, category: 'IoT', nextMilestone: 'Set Up MQTT Communication Protocol', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },

    // Machine Learning
    { id: '93', name: 'Scikit-Learn', progress: 80, level: 4, category: 'Machine Learning', nextMilestone: 'Build a Predictive Model', color: 'bg-green-50', textColor: 'text-green-700', progressColor: 'bg-green-400', buttonColor: 'bg-gradient-to-r from-green-400 to-green-600' },
    { id: '94', name: 'PyTorch', progress: 85, level: 4, category: 'Machine Learning', nextMilestone: 'Deploy a Neural Network', color: 'bg-indigo-50', textColor: 'text-indigo-700', progressColor: 'bg-indigo-400', buttonColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },
    { id: '95', name: 'Keras', progress: 80, level: 4, category: 'Machine Learning', nextMilestone: 'Train Deep Learning Models', color: 'bg-yellow-50', textColor: 'text-yellow-700', progressColor: 'bg-yellow-400', buttonColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },

  
    // Mobile Development
    { id: '99', name: 'Swift', progress: 75, level: 3, category: 'Mobile Development', nextMilestone: 'Build an iOS Application', color: 'bg-green-50', textColor: 'text-green-700', progressColor: 'bg-green-400', buttonColor: 'bg-gradient-to-r from-green-400 to-green-600' },
    { id: '100', name: 'Flutter', progress: 80, level: 4, category: 'Mobile Development', nextMilestone: 'Develop Cross-Platform Mobile Apps', color: 'bg-pink-50', textColor: 'text-pink-700', progressColor: 'bg-pink-400', buttonColor: 'bg-gradient-to-r from-pink-400 to-pink-600' }

     
    // DevOps
    { id: '96', name: 'Jenkins', progress: 85, level: 4, category: 'DevOps', nextMilestone: 'Set Up CI/CD Pipeline', color: 'bg-teal-50', textColor: 'text-teal-700', progressColor: 'bg-teal-400', buttonColor: 'bg-gradient-to-r from-teal-400 to-teal-600' },
    { id: '97', name: 'Docker Compose', progress: 80, level: 4, category: 'DevOps', nextMilestone: 'Manage Multi-Container Docker Applications', color: 'bg-blue-50', textColor: 'text-blue-700', progressColor: 'bg-blue-400', buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { id: '98', name: 'Kubernetes', progress: 85, level: 4, category: 'DevOps', nextMilestone: 'Deploy Microservices with Kubernetes', color: 'bg-cyan-50', textColor: 'text-cyan-700', progressColor: 'bg-cyan-400', buttonColor: 'bg-gradient-to-r from-cyan-400 to-cyan-600' },

    // More skills can be added to reach 100 as needed...
];


  const filteredSkills = selectedCategory === 'All' ? skills : skills.filter(skill => skill.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Categories Navigation */}
      <div className="mb-6">
        <div className="flex overflow-x-auto space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-lg font-medium focus:outline-none transition-all duration-200 ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-transparent text-blue-600 hover:bg-blue-500 hover:text-white'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <motion.div
            key={skill.id}
            layout
            className={`overflow-hidden rounded-lg shadow-lg ${skill.color} hover:scale-105 transition-transform duration-300`}
          >
            <div className="p-6" style={{ backgroundColor: `${skill.color}`, opacity: 0.8 }}>
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-xl font-semibold ${skill.textColor}`}>
                  {skill.name}
                </h3>
                <span className="flex items-center space-x-1">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-600">{`Level ${skill.level}`}</span>
                </span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>{`Progress`}</span>
                  <span>{`${skill.progress}%`}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`rounded-full h-2 ${skill.progressColor}`}
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Book className="w-4 h-4 text-blue-500" />
                  <span>{skill.category}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{`Next: ${skill.nextMilestone}`}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`mt-4 w-full flex items-center justify-center space-x-2 text-white py-2 px-4 rounded-lg transition-all duration-200 ${skill.buttonColor}`}
              >
                <span>Continue Learning</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillBuilder;
