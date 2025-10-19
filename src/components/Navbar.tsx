"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center bg-transparent"
      >
        {/* Logo */}
        <div>
          <Image src="/logo.png" alt="CamaTrust Farms Logo" width={60} height={40} priority />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          <li><a href="#" className="py-2 px-4 rounded-full transition-all duration-300 hover:bg-white/10 hover:text-green-300">Home</a></li>
          <li><a href="#" className="py-2 px-4 rounded-full transition-all duration-300 hover:bg-white/10 hover:text-green-300">About Us</a></li>
          <li><a href="#" className="py-2 px-4 rounded-full transition-all duration-300 hover:bg-white/10 hover:text-green-300">Gallery</a></li>
          <li><a href="#" className="py-2 px-4 rounded-full transition-all duration-300 hover:bg-white/10 hover:text-green-300">Catalog</a></li>
        </ul>

        {/* Desktop Cart Icon */}
        <div className="hidden md:block cursor-pointer hover:text-green-300 transition-colors">
          <CartIcon />
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <div className="cursor-pointer hover:text-green-300 transition-colors">
            <CartIcon />
          </div>
          <button onClick={() => setIsOpen(true)} className="text-white">
            <MenuIcon />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center space-y-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-green-800"
            >
              <CloseIcon />
            </button>
            <ul className="flex flex-col items-center space-y-8 text-green-800 text-2xl font-medium">
              <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href="#" onClick={() => setIsOpen(false)}>About Us</a></li>
              <li><a href="#" onClick={() => setIsOpen(false)}>Gallery</a></li>
              <li><a href="#" onClick={() => setIsOpen(false)}>Catalog</a></li>
              <li className="flex items-center space-x-2">
                <CartIcon />
                <span>Cart</span>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;