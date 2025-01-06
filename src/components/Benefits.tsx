import React from 'react';
import { LineChart, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const benefits = [
  {
    icon: LineChart,
    title: "Track Real Progress",
    description: "Monitor your focus trends and productivity patterns with detailed analytics."
  },
  {
    icon: Zap,
    title: "Boost Productivity",
    description: "Leverage AI insights to optimize your work sessions and achieve more."
  },
  {
    icon: Target,
    title: "Achieve Goals",
    description: "Set and accomplish your objectives with our structured approach to focus."
  }
];

export default function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="benefits" className="bg-[#121212] py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose <span className="text-[#FFD700]">MainFocus</span>
          </h2>
          <p className="text-white/70 text-lg">
            Experience a new way of working that combines focus, fun, and results
          </p>
        </motion.div>
        
        <div className="relative">
          <motion.img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500&h=500"
            alt="Productivity Dashboard"
            className="rounded-full w-64 h-64 object-cover shadow-2xl mx-auto mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-[#FFD700]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}