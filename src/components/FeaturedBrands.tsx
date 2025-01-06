import React from 'react';
import { motion } from 'framer-motion';
import { FaProductHunt, FaReddit } from 'react-icons/fa';

const brands = [
  {
    name: 'Product Hunt',
    icon: FaProductHunt,
    hoverColor: '#DA552F'
  },
  {
    name: 'Reddit',
    icon: FaReddit,
    hoverColor: '#FF4500'
  }
];

export default function FeaturedBrands() {
  return (
    <div className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12">
          <span className="text-text-muted font-medium text-center sm:text-left">Featured On</span>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {brands.map((brand) => (
              <motion.a
                key={brand.name}
                href="#"
                className="flex items-center gap-2 text-text-muted hover:text-text transition-colors"
                whileHover={{ scale: 1.05 }}
                style={{ color: brand.hoverColor }}
              >
                <brand.icon className="w-6 h-6" />
                <span className="font-medium">{brand.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}