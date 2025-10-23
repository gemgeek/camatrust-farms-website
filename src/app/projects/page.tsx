"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionCurve from '@/components/SectionCurve'; 
import { FaCheckCircle, FaSpinner, FaClock } from 'react-icons/fa'; 

const projects = [
  {
    id: 'backyard-garden',
    title: 'Backyard Garden Transformation',
    description:
      'We helped a client establish a thriving vegetable garden in their backyard, providing consultation on soil preparation, planting, and sustainable pest management.',
    imageUrl: '/backyard-garden.jpg',
    category: 'Consultation',
    status: 'Completed', 
  },
  {
    id: 'community-farm-setup',
    title: 'Community Farm Initiative Setup',
    description:
      'Assisted a local community group in planning and setting up a small-scale organic farm to promote local food production and empower local farmers.',
    imageUrl: '/community-farm.png',
    category: 'Consultation & Setup',
    status: 'Completed', 
  },
  {
    id: 'aquaculture-expansion',
    title: 'Aquaculture Expansion Project',
    description:
      'Our team is expanding our catfish farming operation with modern aquaculture technology to increase yield while maintaining sustainability standards.',
    imageUrl: '/acquaculture-expand.png',
    category: 'Aquaculture',
    status: 'Ongoing', 
  },
  {
    id: 'plantain-plantation',
    title: 'Plantain Plantation Development',
    description:
      'An upcoming large-scale plantain plantation designed to support food security, create local employment, and promote organic farming methods in Ghana.',
    imageUrl: '/Plantain-farm.png',
    category: 'Crop Farming',
    status: 'Upcoming', 
  },
  {
    id: 'cold-storage-facility',
    title: 'Cold Storage & Processing Facility',
    description:
      'CamaTrust Farms is developing a cold storage and meat processing facility to ensure freshness and quality for our livestock and seafood products.',
    imageUrl: '/cold-store.png',
    category: 'Infrastructure',
    status: 'Upcoming', 
  },
  {
    id: 'school-garden-program',
    title: 'School Garden Initiative',
    description:
      'Partnering with local schools to establish educational gardens that teach students about agriculture, nutrition, and sustainability.',
    imageUrl: '/school-garden.png',
    category: 'Community Outreach',
    status: 'Upcoming', 
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Completed':
      return { icon: <FaCheckCircle className="mr-1.5" />, text: 'Completed', color: 'bg-green-600' };
    case 'Ongoing':
      return { icon: <FaSpinner className="mr-1.5 animate-spin" />, text: 'Ongoing', color: 'bg-blue-600' };
    case 'Upcoming':
      return { icon: <FaClock className="mr-1.5" />, text: 'Upcoming', color: 'bg-yellow-600' };
    default:
      return null;
  }
};


export default function ProjectsPage() {
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
                Our Projects
              </h1>
              <p className="mt-6 text-xl text-green-200 max-w-3xl mx-auto"> 
                See how we help individuals and communities grow sustainably.
              </p>
            </motion.div>
          </div>
          <div className="relative z-[5]">
            <SectionCurve />
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => {
              const statusBadge = getStatusBadge(project.status); 

              return (
                <motion.div
                  key={project.id}
                  className="group flex flex-col overflow-hidden rounded-lg shadow-lg"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Image Container with Status Badge */}
                  <div className="flex-shrink-0 relative"> 
                    
                    {/* Image */}
                    <Image
                      className="h-64 w-full object-cover" 
                      src={project.imageUrl}
                      alt={project.title}
                      width={500}
                      height={400}
                      unoptimized={true} 
                    />
                    

                    {/* Status Badge */}
                    {statusBadge && (
                      <div className={`absolute top-3 right-3 z-10 ${statusBadge.color} text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center shadow-md`}>
                        {statusBadge.icon}
                        {statusBadge.text}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-green-600">
                        {project.category}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-green-700">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-500">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}