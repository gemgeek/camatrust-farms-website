"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionCurve from '@/components/SectionCurve';

const teamMembers = [
  {
    name: 'Godwin Mawuli Atatsi', 
    title: 'Co-Founder & Farm Operations Manager',
    imageUrl: '/ceo-picture.jpg', 
  },
  {
    name: 'Matilda Esenam Gbeve', 
    title: 'Agri-Tech Innovation Manager',
    imageUrl: '/itsupport.png', 
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">

        {/* Page Header */}
        <div className="relative bg-green-900 text-white">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mx-auto"
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Meet Our Team
              </h1>
              <p className="mt-6 text-xl text-green-200 max-w-3xl mx-auto">
                The passionate individuals driving CamaTrust Farms forward.
              </p>
            </motion.div>
          </div>
          <div className="relative z-[5]">
            <SectionCurve />
          </div>
        </div>

        {/* Team Grid */}
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> 
            {teamMembers.map((person, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mx-auto h-48 w-48 relative mb-6"> 
                  <Image
                    className="rounded-full object-cover shadow-lg"
                    src={person.imageUrl}
                    alt={`Photo of ${person.name}`}
                    fill
                    unoptimized={true} 
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                  <p className="text-md font-semibold text-green-700">{person.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}