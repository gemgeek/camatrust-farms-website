"use client";

import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaInstagram className="h-6 w-6" />, href: '#' },
    { icon: <FaFacebook className="h-6 w-6" />, href: '#' },
    { icon: <FaTiktok className="h-6 w-6" />, href: '#' },
    { icon: <FaLinkedin className="h-6 w-6" />, href: '#' },
  ];

  return (
    <footer className="bg-white text-gray-700 pt-20 pb-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="md:col-span-2 lg:col-span-1">
            <Image
              src="/logo.png"
              alt="CamaTrust Farms Logo"
              width={100}
              height={35}
              className="mb-4"
            />
            <p className="text-gray-600 text-sm max-w-xs">
              Committed to sustainable and innovative farming that enriches 
              lives and nurtures our environment.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-700">Home</a></li>
              <li><a href="#" className="hover:text-green-700">About Us</a></li>
              <li><a href="#" className="hover:text-green-700">Gallery</a></li>
              <li><a href="#" className="hover:text-green-700">Catalog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-700">Premium Livestock</a></li>
              <li><a href="#" className="hover:text-green-700">Organic Produce</a></li>
              <li><a href="#" className="hover:text-green-700">Consultation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:camatrust.farms@gmail.com" 
                  className="hover:text-green-700"
                >
                  camatrust.farms@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+233201810023" 
                  className="hover:text-green-700"
                >
                  +233 20 181 0023
                </a>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-gray-500 hover:text-green-700 transition-colors"
                  aria-label={`Follow us on ${['Instagram', 'Facebook', 'TikTok', 'LinkedIn'][index]}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-8 text-sm text-gray-500 flex flex-col md:flex-row md:justify-center items-center">
          <p>
            &copy; {new Date().getFullYear()} CamaTrust Farms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;