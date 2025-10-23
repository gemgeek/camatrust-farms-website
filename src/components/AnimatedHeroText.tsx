"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  "Environments",
  "Communities",
  "Families",
  "Ghana",
  "Futures",
];

const AnimatedHeroText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block bg-green-500/20 text-green-300 px-4 py-2 rounded-full">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]} 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="inline-block" 
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default AnimatedHeroText;