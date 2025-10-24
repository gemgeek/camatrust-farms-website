"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionCurve from '@/components/SectionCurve'; // For the header

export default function ServicesPage() {
  // Simple animation variant for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">

        {/* --- Page Header (Green with Curve) --- */}
        <div className="relative bg-green-900 text-white">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mx-auto"
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Our Services
              </h1>
              <p className="mt-6 text-xl text-green-200 max-w-3xl mx-auto">
                Dedicated to sustainable agriculture and providing high-quality farm products.
              </p>
            </motion.div>
          </div>
          <div className="relative z-[5]">
            <SectionCurve />
          </div>
        </div>

        {/* --- Main Content Area --- */}
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 space-y-24"> {/* Added space-y-24 */}

          {/* --- Service 1: Agricultural Support --- */}
          <motion.section 
            id="agricultural-support" // <-- CHANGED ID
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-20" 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Agricultural Support</h2> {/* <-- CHANGED TITLE */}
              <p className="text-lg text-gray-700 leading-relaxed">
                {/* --- UPDATED TEXT --- */}
                We provide comprehensive agricultural support services, including personalized consultations and hands-on training. We empower farmers and enthusiasts with the knowledge to implement sustainable and effective practices for success.
                {/* -------------------- */}
              </p>
            </div>
            <div className="order-1 md:order-2 aspect-video relative rounded-lg overflow-hidden shadow-md">
               {/* --- UPDATED IMAGE (using community farm image as example) --- */}
               <Image src="/community-farm.png" alt="Agricultural Support" fill className="object-cover"/> 
            </div>
          </motion.section>

          <motion.section 
            id="consultation" 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
             <div className="aspect-video relative rounded-lg overflow-hidden shadow-md">
               <Image src="/backyard-garden.jpg" alt="Farming Consultation" fill className="object-cover"/>
             </div>
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Farming Consultation</h2> {/* <-- Kept this specific */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Our specialized consultation services cover everything from backyard garden setups to large-scale farm planning. We offer tailored advice on soil health, crop selection, aquaculture, livestock management, and implementing eco-friendly techniques.
              </p>
            </div>
          </motion.section>

          
          <motion.section 
            id="livestock" 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
             <div className="aspect-video relative rounded-lg overflow-hidden shadow-md">
               <Image src="/free-range.png" alt="Premium Livestock" fill className="object-cover"/>
             </div>
             <div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Premium Livestock</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our premium livestock, raised with a focus on ethical practices, meets our clients' needs for high-quality meat and dairy products. We ensure healthy living conditions and nutritious feed for all our animals.
              </p>
            </div>
          </motion.section>

          <motion.section 
            id="produce" 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Organic Produce</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                CamaTrust Farms specializes in a diverse range of farm-fresh produce, including organic vegetables, fruits, and herbs cultivated with care and attention to the highest standards of quality, free from synthetic pesticides and fertilizers.
              </p>
            </div>
             <div className="order-1 md:order-2 aspect-video relative rounded-lg overflow-hidden shadow-md">
               <Image src="/cama-harvest.png" alt="Organic Produce" fill className="object-cover"/>
             </div>
          </motion.section>


        </div>
      </div>
      <Footer />
    </>
  );
}