"use client";

import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const stats = [
  { value: 100, suffix: '%', label: 'Organic & Sustainable' },
  { value: 50, suffix: '+', label: 'Product Varieties' },
  { value: 365, suffix: '', label: 'Days of Freshness' },
  { value: 24, suffix: '/7', label: 'Community Support' },
];

const ImpactSection = () => {
  return (
    <section 
      className="bg-green-900 text-white py-32 px-4 md:px-12 relative"
      style={{ backgroundImage: "url('/map-pattern.png')", backgroundBlendMode: 'multiply', backgroundSize: 'contain' }}
   >
      <div className="absolute inset-0 bg-green-900/80" />
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-center text-4xl md:text-5xl font-bold">
            Our Commitment to You
          </h2>
          <p className="mt-4 text-lg text-green-200 max-w-3xl mx-auto">
            We are committed to serving the nation by nurturing our environment and 
            providing products you can trust, every single day.
          </p>
        </motion.div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl md:text-7xl font-bold text-green-300">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-lg font-medium text-green-100">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;