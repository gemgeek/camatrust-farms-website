"use client";

import React from 'react';
import Image from 'next/image'; 
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const LeafIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-green-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.121 14.121L14.121 14.121c-1.172 1.172-3.071 1.172-4.243 0L7.12 11.364c-1.172-1.172-1.172-3.071 0-4.243l.001-.001c1.172-1.172 3.071-1.172 4.243 0l2.758 2.758c1.172 1.172 1.172 3.071 0 4.243z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 008.32-6.002 8.991 8.991 0 00-6.002-10.315 8.99 8.99 0 00-10.314 6.002A9.004 9.004 0 0012 21z"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-green-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2H15a2 2 0 002-2v-1a2 2 0 012-2h1.945M12 4v7m0 11v-7m0 7a8.963 8.963 0 01-4.18-1.154A8.963 8.963 0 014.154 12 8.963 8.963 0 018.82 4.154A8.963 8.963 0 0112 3c1.928 0 3.716.617 5.18 1.154A8.963 8.963 0 0119.846 12a8.963 8.963 0 01-4.666 7.846A8.963 8.963 0 0112 21z"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-green-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
    />
  </svg>
);

const features = [
  {
    icon: <LeafIcon />,
    title: 'Quality & Integrity',
    description: 'We are driven by a commitment to integrity and quality, offering produce, livestock, and products you can trust.',
  },
  {
    icon: <GlobeIcon />,
    title: 'Sustainable & Innovative',
    description: 'Committed to sustainable and innovative farming that enriches lives and nurtures our environment for a greener future.',
  },
  {
    icon: <HeartIcon />,
    title: 'Community Focused',
    description: 'We believe in building a strong connection between the farm and the community, supporting a healthier, local food system.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white text-gray-900 py-20 px-4 md:px-12"> 
     <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image Column (Left) */}
          <motion.div
            className="w-full h-80 md:h-[32rem] rounded-2xl shadow-lg overflow-hidden relative" 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src="/happyharvest.png"
              alt="CamaTrust Farms"
              fill 
              className="w-full h-full object-cover"
              unoptimized={true} 
            />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-800">
              Why Choose CamaTrust Farms?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We are not just a farm; we are a reliable partner in fostering a
              healthier and more sustainable food system.
            </p>

            {/* Features List */}
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;