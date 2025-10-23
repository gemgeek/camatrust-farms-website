"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionCurve from '@/components/SectionCurve'; 

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L14.121 14.121c-1.172 1.172-3.071 1.172-4.243 0L7.12 11.364c-1.172-1.172-1.172-3.071 0-4.243l.001-.001c1.172-1.172 3.071-1.172 4.243 0l2.758 2.758c1.172 1.172 1.172 3.071 0 4.243z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.32-6.002 8.991 8.991 0 00-6.002-10.315 8.99 8.99 0 00-10.314 6.002A9.004 9.004 0 0012 21z" /></svg>
);
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2H15a2 2 0 002-2v-1a2 2 0 012-2h1.945M12 4v7m0 11v-7m0 7a8.963 8.963 0 01-4.18-1.154A8.963 8.963 0 014.154 12 8.963 8.963 0 018.82 4.154A8.963 8.963 0 0112 3c1.928 0 3.716.617 5.18 1.154A8.963 8.963 0 0119.846 12a8.963 8.963 0 01-4.666 7.846A8.963 8.963 0 0112 21z" /></svg>
);
const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
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

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">

        <div className="relative bg-green-900 text-white"> 
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mx-auto" 
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"> 
                About CamaTrust Farms
              </h1>
              <p className="mt-6 text-xl text-green-200 max-w-3xl mx-auto"> 
                Sustainable and innovative farming that enriches lives and nurtures our environment.
              </p>
            </motion.div>
          </div>
          
          <div className="relative z-[5]">
            <SectionCurve />
          </div>
        </div>

        <div className="py-24 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Our Commitment
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed space-y-4">
                At CamaTrust Farms, we are committed to sustainable and innovative farming that enriches lives and nurtures our environment. Established with a passion for agriculture and community welfare, CamaTrust Farms has grown into a trusted provider of high-quality produce, and livestock, dedicated to delivering fresh and nutritious products to our customers.
              </p>
            </motion.div>
            
            {/* Right Column: Image */}
            <motion.div
              className="w-full h-80 md:h-96 rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/produce.png" 
                alt="Organic Produce"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                unoptimized={true} 
              />
            </motion.div>
          </div>
        </div>

        {/* Products and Services Section */}
        <div className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Our Products and Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                CamaTrust Farms specializes in a diverse range of farm-fresh produce, including organic vegetables, fruits, and herbs. Our premium livestock meets our clients&apos; needs for poultry and dairy, and our frozen foods division focuses on providing fresh meats and seafoods you can trust.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4">
                Our services also extend to personalized farming consultations, sustainable agricultural training, backyard gardening, and support, empowering farmers with the knowledge to implement eco-friendly practices.
              </p>
            </motion.div>
          </div>
        </div>

        {/* "Why Choose Us" Section */}
        <div className="py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-12">
              Why Choose Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="flex-shrink-0 p-4 bg-green-100 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}