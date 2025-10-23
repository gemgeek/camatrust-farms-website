"use client";

import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { animate } from 'framer-motion';

type AnimatedCounterProps = {
  to: number;
  suffix?: string;
};

const AnimatedCounter = ({ to, suffix }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true }); 

  useEffect(() => {
    if (inView && ref.current) {
      const node = ref.current;

      const controls = animate(0, to, {
        duration: 2, // 2-second animation
        onUpdate(value) {
          node.textContent = Math.round(value).toString();
        },
        onComplete() {
          if (suffix) {
            node.textContent += suffix;
          }
        },
      });

      return () => controls.stop();
    }
  }, [inView, to, suffix]);

  return <span ref={ref}>0</span>;
};

export default AnimatedCounter;