import React from 'react';
import { CheckCircle } from 'lucide-react';

const Achievement = () => {
  const features = [
    'Earn points for every milestone you reach',
    'Increase your score with smarter productivity strategies',
    'Buy themes to make your app look unique',
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold text-text mb-4">
        Achievement System
      </h3>
      <ul className="text-text-muted list-disc pl-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            {index === 2 ? (
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

export default Achievement;
