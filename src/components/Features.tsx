import React from 'react';
import { BarChart, Timer, Trophy, Users } from 'lucide-react';

const features = [
  {
    icon: BarChart,
    title: "AI-Powered Insights",
    description: "Get personalized recommendations to optimize your focus sessions based on your performance patterns."
  },
  {
    icon: Timer,
    title: "Smart Pomodoro Timer",
    description: "Customize your work intervals with our intelligent timer that adapts to your productivity peaks."
  },
  {
    icon: Trophy,
    title: "Gamified Progress",
    description: "Turn productivity into a game. Earn points, unlock achievements, and track your improvement."
  },
  {
    icon: Users,
    title: "Social Competition",
    description: "Join focus challenges with friends and colleagues to stay motivated and accountable."
  }
];

const FeatureGrid = () => {
  return (
    <div className="w-full bg-black py-24" id={`features`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Features that <span className="text-yellow-400">Empower</span> You
        </h2>
        
        <div className="grid grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-zinc-900 rounded-xl border border-yellow-400/10 hover:border-yellow-400/30 transition-all"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;