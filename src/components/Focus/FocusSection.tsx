import React from 'react';
import { motion } from 'framer-motion';
import EmailSignup from '../EmailSignup';

export default function FocusSection() {
  return (
    <section className="bg-background py-14" id="join-us">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-text mb-4 relative">
            Drive your focus to the moon
            <span className="text-secondary select-none text-[25px] absolute -top-5 -right-0 transform rotate-[20deg]">
              🌚
            </span>
          </h2>
          <p className="text-text-muted mb-8">
            Turn your goals into achievements with MainFocus, it's trained to keep you in the zone.
          </p>
          <EmailSignup className="w-full max-w-md" />
        </motion.div>
      </div>
    </section>
  );
}