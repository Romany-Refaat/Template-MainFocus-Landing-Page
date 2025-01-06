import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Twitter, name: 'Twitter', url: '#' },
  { icon: Linkedin, name: 'LinkedIn', url: '#' },
  { icon: Instagram, name: 'Instagram', url: '#' }
];

export default function Footer() {
  return (
    <footer className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
            {socialLinks.map(({ icon: Icon, name, url }) => (
              <motion.a
                key={name}
                href={url}
                className="text-secondary hover:text-secondary/80 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:inline">{name}</span>
              </motion.a>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-text-muted">
            <motion.a 
              href="#" 
              className="hover:text-secondary transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-secondary transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-secondary transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}