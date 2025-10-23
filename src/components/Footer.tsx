"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  
  const socialLinks = [
    { icon: <FaInstagram className="h-6 w-6" />, href: 'https://www.instagram.com/camatrust_farms?igsh=MWc0YjI3bTRxbnF5cg==' },
    { icon: <FaFacebook className="h-6 w-6" />, href: 'https://www.facebook.com/share/17HesSYoZh/' },
    { icon: <FaTiktok className="h-6 w-6" />, href: 'https://www.tiktok.com/@camatrust.farms?_t=ZM-90N2vviCqWe&_r=1' },
    { icon: <FaLinkedin className="h-6 w-6" />, href: 'https://www.linkedin.com/company/camatrust-farms/' },
  ];

  return (
    <footer className="bg-white text-gray-700 pt-20 pb-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & About */}
          <div className="md:col-span-2 lg:col-span-1">
            <Image
              src="/logo.png"
              alt="CamaTrust Farms Logo"
              width={80}
              height={35}
              className="mb-4"
            />
            <p className="text-gray-600 text-sm max-w-xs">
              Committed to sustainable and innovative farming that enriches 
              lives and nurtures our environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-green-700">Home</Link></li>
              <li><Link href="/about" className="hover:text-green-700">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-green-700">Projects</Link></li>
              <li><Link href="/gallery" className="hover:text-green-700">Gallery</Link></li>
              <li><Link href="/catalog" className="hover:text-green-700">Catalog</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/catalog/agricultural support" className="hover:text-green-700">Agricultural Support</Link></li>
              <li><Link href="/catalog/livestock" className="hover:text-green-700">Premium Livestock</Link></li>
              <li><Link href="/catalog/produce" className="hover:text-green-700">Organic Produce</Link></li>
              <li><Link href="/projects" className="hover:text-green-700">Consultation</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
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
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-green-700 transition-colors"
                  aria-label={`Follow us on ${['Instagram', 'Facebook', 'TikTok', 'LinkedIn'][index]}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
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