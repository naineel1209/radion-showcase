"use client";

import { Github, Linkedin, Mail, Twitter } from '@geist-ui/icons';
import { motion } from 'framer-motion';
import SectionSubHeader from './SectionSubHeader';

const Footer = () => {
  return (
    <footer className="bg-primary-dark dark:bg-neutral-950 dark:text-text-light text-text-dark">
      <div className="max-w-7xl mx-auto py-[5rem] px-[5%]">
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Links Column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <SectionSubHeader text="Quick Links" />
            </div>
            <ul className="space-y-3 text-center md:text-left">
              {['Features', 'Pricing', 'Documentation', 'Status'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ translateX: 5 }}
                  className="cursor-pointer hover:text-accent-active transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <SectionSubHeader text="Company" />
            </div>
            <ul className="space-y-3 text-center md:text-left">
              {['About', 'Blog', 'Careers', 'Contact'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ translateX: 5 }}
                  className="cursor-pointer hover:text-accent-active transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <SectionSubHeader text="Stay Updated" />
            </div>
            <div className="w-full max-w-xs">
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-2 border-primary-light/20 dark:border-primary-dark/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-active"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent-active text-white py-2 px-6 rounded-lg font-medium self-start"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-primary-light/10 dark:border-primary-dark/10 my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-text-secondary dark:text-text-secondary-dark text-sm">
            © {new Date().getFullYear()} Radion For AI. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 hover:text-accent-active transition-colors" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 hover:text-accent-active transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 hover:text-accent-active transition-colors" />
            </a>
            <a href="mailto:hello@company.com">
              <Mail className="h-5 w-5 hover:text-accent-active transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;