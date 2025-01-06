import React, { useState, useEffect } from 'react';
import { PieChart, Timer, Trophy, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Analyze from './Analyze';
import TimerData from './TimerData';
import Achievement from './Achievement';
import Friends from './Friends.tsx';
import AIFocusState from './AI';

const features = [
  {
    icon: PieChart,
    component: 'ai',
    title: 'AI',
    description:
      'Get personalized recommendations based on your performance patterns.',
  },
  {
    icon: Timer,
    component: 'timer',
    title: 'Customizable Sessions',
    description:
      'Customize work intervals that adapt to your productivity peaks.',
  },
  {
    icon: Trophy,
    component: 'achievement',
    title: 'Points System',
    description: 'Turn productivity into a game with points and achievements.',
  },
  {
    icon: Users,
    component: 'leaderboard',
    title: 'Leaderboard',
    description: 'Join focus challenges with friends to stay motivated.',
  },
  {
    icon: Users,
    component: 'analyze',
    title: 'Analytics',
    description: 'Join focus challenges with friends to stay motivated.',
  },
];

const FeatureIcon = ({ icon: Icon }) => (
  <div className="p-2 bg-secondary/10 rounded-lg inline-block">
    <Icon className="w-4 h-4 text-secondary" />
  </div>
);

export default function Features() {
  const [currComponent, setCurrComponent] = useState('analyze');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = features.findIndex(
        (f) => f.component === currComponent
      );
      const nextIndex = (currentIndex + 1) % features.length;
      setCurrComponent(features[nextIndex].component);
    }, 5000);

    return () => clearInterval(interval);
  }, [currComponent]);

  const components = {
    ai: <AIFocusState />,
    timer: <TimerData />,
    achievement: <Achievement />,
    leaderboard: <Friends />,
    analyze: <Analyze />,
  };

  return (
    <section className="bg-primary py-12 md:py-24" id={`features`}>
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4 px-20">
            Increase your productivity,{' '}
            <span className="text-secondary">with no distractions</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-sm md:text-base">
            Tools designed to enhance your productivity and keep you focused
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-4 md:gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.button
              key={feature.component}
              onClick={() => setCurrComponent(feature.component)}
              className={`p-3 rounded-md transition-all duration-200 flex-shrink-0 min-w-[120px] 
                ${
                  currComponent === feature.component
                    ? 'bg-backgroundLt text-white shadow-sm'
                    : 'bg-background text-text'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center text-center gap-2">
                <FeatureIcon icon={feature.icon} />
                <h4 className="text-sm font-semibold">{feature.title}</h4>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="mt-8 bg-background rounded-lg p-6 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {components[currComponent as keyof typeof components]}
        </motion.div>
      </div>
    </section>
  );
}