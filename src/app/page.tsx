"use client";

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import SectionCurve from "@/components/SectionCurve";
import WhyChooseUs from "@/components/WhyChooseUs";
import ImpactSection from "@/components/ImpactSection";
import AnimatedHeroText from "@/components/AnimatedHeroText";
import Footer from "@/components/Footer"; 

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], 
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <main ref={ref} className="relative text-white min-h-screen overflow-hidden">
        
        <motion.div 
          className="absolute inset-0 -z-10 h-[130%] top-[-15%]" 
          style={{ y: backgroundY }} 
        >
          <Image
            src="/farm-back.png"
            alt="CamaTrust Farms background"
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10">
          <Navbar />
          <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Enriching Lives,
              <br />
              Nurturing <AnimatedHeroText />
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 text-base md:text-lg max-w-2xl text-gray-300"
            >
              High-quality produce, livestock, delivered fresh from our farm to you.
            </motion.p>
          </div>
        </div>

        <div className="relative z-[5]">
          <SectionCurve />
        </div>
      </main>
      
      <ServicesSection />
      <WhyChooseUs />
      <ImpactSection />
      <Footer />
    </>
  );
}