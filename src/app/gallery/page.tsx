"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionCurve from '@/components/SectionCurve'; 

// Gallery Items
const galleryItems = [
  // Images
  { id: 1, type: 'image', src: '/cama-farm.png', alt: 'Scenic view of CamaTrust Farms' },
  { id: 2, type: 'image', src: '/free-range.png', alt: 'Healthy livestock grazing' },
  { id: 3, type: 'image', src: '/working-farm.png', alt: 'Men working on the farm' },
  { id: 4, type: 'image', src: '/cama-harvest.png', alt: 'Close-up of fresh organic vegetables' },

  // Videos
  { id: 5, type: 'video', src: '/tractor.mp4', alt: 'Tractor ploughing the farm' },
  { id: 6, type: 'video', src: '/menatwork.mp4', alt: 'Men at work' },
  { id: 7, type: 'image', src: '/camatrust-onion.png', alt: 'onion' },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      {/* Outer background */}
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
                Gallery
              </h1>
              <p className="mt-6 text-xl text-green-200 max-w-3xl mx-auto"> 
                A glimpse into life and work at CamaTrust Farms.
              </p>
            </motion.div>
          </div>
          
          <div className="relative z-[5]">
            <SectionCurve />
          </div>
        </div>

        {/* Media Grid */}
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8" 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                className={`
                  relative overflow-hidden rounded-lg shadow-md group bg-gray-100
                  ${item.type === 'video' ? 'aspect-video' : 'aspect-square'}
                `}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Conditional Rendering */}
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    unoptimized={true}
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
      <Footer />
    </>
  );
}