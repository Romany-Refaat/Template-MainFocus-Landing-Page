import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Demo() {
  return (
    <section id="demo" className="bg-primary py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-8">
            See MainFocus in Action<span className={`text-xl text-text-muted`}>, 2x if it's too slow 😉</span>
          </h2>
          <div className="relative rounded-2xl overflow-hidden bg-primary/50 aspect-video flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="text-center">
                <div className="bg-secondary/20 p-4 rounded-full mb-4 inline-block">
                  <Play className="w-12 h-12 text-secondary" />
                </div>
                <p className="text-text text-xl font-medium">
                  Demo Coming Soon!
                </p>
                <p className="text-text-muted mt-2">
                  We're putting the finishing touches on our demo video.
                  Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}