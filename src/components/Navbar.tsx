"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';


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
  const pathname = usePathname();
  

  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const isHome = pathname === '/';

  
  const navPosition = isHome ? 'absolute' : 'relative';
  const navBg = isHome ? 'bg-transparent' : 'bg-white shadow-md';
  const navTextColor = isHome ? 'text-white' : 'text-gray-800';
  const hoverBg = isHome ? 'hover:bg-white/10' : 'hover:bg-gray-100';
  const hoverText = 'hover:text-green-600';

  return (
    <>
      <motion.nav
        className={`${navPosition} ${navBg} ${navTextColor} top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300`}
      >
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="CamaTrust Farms Logo" width={80} height={30} priority />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          <li>
            <Link href="/" className={`py-2 px-4 rounded-full ${hoverBg} ${hoverText} transition-all`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`py-2 px-4 rounded-full ${hoverBg} ${hoverText} transition-all`}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/gallery" className={`py-2 px-4 rounded-full ${hoverBg} ${hoverText} transition-all`}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/catalog" className={`py-2 px-4 rounded-full ${hoverBg} ${hoverText} transition-all`}>
              Catalog
            </Link>
          </li>
        </ul>

        {/* Desktop Cart Icon */}
        <div className={`hidden md:flex items-center space-x-4 ${hoverText} transition-colors`}>
          <Link href="/cart" className="cursor-pointer relative" aria-label={`View cart with ${totalItems} items`}>
            <CartIcon />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Buttons Wrapper */}
        <div className="md:hidden flex items-center space-x-4">
          <Link href="/cart" className={`cursor-pointer relative ${hoverText} transition-colors`} aria-label={`View cart with ${totalItems} items`}>
            <CartIcon />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button onClick={() => setIsOpen(true)} className="transition-colors">
            <MenuIcon />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
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
              <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
              <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
              <li><Link href="/catalog" onClick={() => setIsOpen(false)}>Catalog</Link></li>
              
              {/* Mobile Menu Cart */}
              <li>
                <Link href="/cart" onClick={() => setIsOpen(false)} className="flex items-center space-x-2">
                  <CartIcon />
                  <span>Cart</span>
                  {totalItems > 0 && (
                    <span className="ml-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
            
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;