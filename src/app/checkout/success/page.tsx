"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext'; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SuccessPage() {
  const { clearCart } = useCart(); 

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-40 px-4 text-center">
          <h1 className="text-4xl font-bold text-green-600">
            Thank You!
          </h1>
          <p className="mt-4 text-2xl text-gray-900">
            Your order has been placed successfully.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            We've received your order and will get back to you soon with delivery details.
          </p>
          <Link href="/catalog" className="mt-10 inline-block bg-green-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-green-700">
            Continue Shopping
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}