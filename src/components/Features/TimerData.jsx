import React from 'react';
import { CheckCircle } from 'lucide-react';

const TimerData = () => {
  const features = [
    'Track Your Progress',
    'Optimize Breaks',
    'Personalize Settings',
    'Set Custom Intervals',
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold text-text mb-4">Customizable Sessions</h3>
      <ul className="text-text-muted list-disc pl-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            {index === 3 ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <CheckCircle className="w-5 h-5 text-white-500" />
            )}
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimerData;
