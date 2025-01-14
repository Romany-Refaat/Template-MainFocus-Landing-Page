import React from 'react';
import { motion } from 'framer-motion';
import EmailSignup from './EmailSignup';

export default function Hero() {
  return (
    <div className="relative bg-primary flex items-center justify-center overflow-hidden min-h-[calc(100vh-60px)] py-12 pt-20">
      <div className="container mx-auto px-4 md:px-[16px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl sm:text-7xl md:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-text">Focus with no</span>{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-background">
                  distractions
                </span>
                <span
                  className="bg-text absolute inset-0 -left-2 -top-0.5 -z-10 transform -rotate-1"
                  style={{ width: 'calc(100% + 20px)' }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-text-muted text-lg xl:text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Track your focus, earn points, and compete with friends in a
              unique productivity experience
            </motion.p>

            <EmailSignup className="mb-8" />
          </motion.div>

          <motion.div
            className="relative w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <iframe
                className="w-full h-full"
                src="https://drive.google.com/file/d/1XspUyzwOUWkJcTVLS5Ne0vIxuIsUqlFj/preview?autoplay=1&loop=1"
                allow="autoplay; encrypted-media"
                title="MainFocus Video"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}