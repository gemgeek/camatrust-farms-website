"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from 'framer-motion';
import ServicesSection from "@/components/ServicesSection"; 
import SectionCurve from "@/components/SectionCurve";

export default function Home() {
  return (
    <>
      <main className="relative text-white min-h-screen">
        
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-background.jpg"
            alt="CamaTrust Farms background"
            fill
            style={{ objectFit: "cover" }}
            quality={80}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10">
          <Navbar />

          {/* Hero Section Content */}
          <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Enriching Lives,
              <br />
              Nurturing <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full">Environments</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 text-base md:text-lg max-w-2xl text-gray-300"
            >
              High-quality produce, livestock, and aquaculture, delivered fresh from our farm to you.
            </motion.p>
          </div>
        </div>
        <div className="relative z-[5]"> 
          <SectionCurve />
        </div>
      </main>
      
      <ServicesSection />
    </>
  );
}