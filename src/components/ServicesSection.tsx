"use client";

import React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
);
const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
);

const services = [
  {
    title: "Premium Livestock",
    description: "Ethically raised livestock to meet your needs for high-quality meat and dairy products.",
    imageUrl: "/livestock.png"
  },
  {
    title: "Organic Produce",
    description: "A diverse range of farm-fresh organic vegetables, fruits, and herbs, cultivated with care.",
    imageUrl: "/farm-produce.png" 
  },
  {
  title: "Frozen Meat & Seafood Supply",
  description: "Supplying premium-quality meat, prawns, crabs, and seafood, expertly preserved to maintain freshness from our farms to your kitchen.",
  imageUrl: "/meat-seafood.jpg"
  },
 {
    title: "Farming Consultation",
    description: "Personalized consultations and training to empower farmers with sustainable practices.",
    imageUrl: "/farming-consulting.png"
  },
{
  title: "Agricultural Support & Training",
  description: "Empowering farmers through expert guidance, modern techniques, and hands-on training for sustainable agriculture success.",
  imageUrl: "/agro-support.jpg"
},
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const ServicesSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' }, 
    [Autoplay({ delay: 2000, stopOnInteraction: false })] 
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="bg-white text-gray-900 py-20 px-4 md:px-12">
     <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">What we do</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              We specialize in a diverse range of farm-fresh produce and livestock to foster a healthier food system.
            </p>
          </motion.div>

          <div className="hidden md:flex space-x-2">
            <button
              onClick={scrollPrev} 
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={scrollNext} 
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <motion.div 
            className="embla__container"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <div className="embla__slide" key={index}>
                <div
                  className="group relative flex-shrink-0 w-80 h-[28rem] rounded-2xl overflow-hidden shadow-lg"
                >
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-gray-300">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;