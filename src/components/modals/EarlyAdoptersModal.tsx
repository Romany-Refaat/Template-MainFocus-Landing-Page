import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { ModalContext } from '../../contexts/modalContext';

const EarlyAdoptersModal = () => {
  const { closeModal } = useContext(ModalContext) || {};

  return (
    <motion.div 
      className="bg-background p-6 sm:p-8 max-w-2xl mx-auto overflow-y-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="sticky top-0 bg-background pt-4 pb-6 z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-secondary leading-tight">
          Attention, Focus Warriors! ✨
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-text-muted mt-3">
          Are you ready to supercharge your productivity and claim some epic rewards? 🚀
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl sm:text-2xl text-text font-medium mb-4">
            Here's how it works:
          </h2>
          <ul className="space-y-3 text-base sm:text-lg">
            {steps.map((step, index) => (
              <li key={index} className={`flex items-center gap-3 ${step.className}`}>
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-secondary" />
                {step.text}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl text-text font-medium mb-4">
            Epic Rewards Await:
          </h2>
          <ul className="space-y-3">
            {rewards.map((reward, index) => (
              <li key={index} className={`flex items-center gap-3 ${reward.className}`}>
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-secondary" />
                {reward.text}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4 text-lg sm:text-xl">
          <p className="text-text">
            This is your chance to shape the future of focus and be part of something groundbreaking.
            Let's make productivity fun, rewarding, and competitive!
          </p>
          <p className="text-text font-bold">
            👉 Spots are limited to 200 early adopters.
            Join the waitlist today and secure your place! Ready, set... FOCUS! 🏆
          </p>
        </section>
      </div>
    </motion.div>
  );
};

const steps = [
  {
    text: 'Be one of the first 200 people to join our waitlist',
    className: 'text-text'
  },
  {
    text: 'Use MainFocus to earn Focus Points by crushing your goals',
    className: 'text-text-muted'
  },
  {
    text: 'Compete with fellow early adopters on the leaderboard',
    className: 'text-text-muted'
  }
];

const rewards = [
  {
    text: '🥇 50% off Lifetime Subscription',
    className: 'text-background-light'
  },
  {
    text: '🌟 Exclusive EarlyWarrior Status Badge',
    className: 'text-text-muted'
  },
  {
    text: '👕 Limited Edition MainFocus T-shirt',
    className: 'text-secondary'
  }
];

export default EarlyAdoptersModal;