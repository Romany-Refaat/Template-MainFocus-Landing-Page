import React from 'react';
import { CheckCircle } from 'lucide-react';

const Friends = () => {
  const features = [
    'Beat your personal best.',
    'Challenge your friends to stay focused.',
    'Track who stays focused the longest.'
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold text-text mb-4">Beat your friends</h3>
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

export default Friends;
