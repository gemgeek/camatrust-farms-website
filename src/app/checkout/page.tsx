"use client";

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 

export default function CheckoutPage() {
  const { cartItems, getCartTotal } = useCart();
  const cartTotal = getCartTotal().toFixed(2); 
  const router = useRouter(); 

  // State for the form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(''); 
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatOrderDetails = () => {
    return cartItems
      .map(
        (item) =>
          `${item.name} (x${item.quantity}) - GHS ${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join('\n');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setIsSubmitting(true);

    const orderData = {
      name,
      email,
      phone,
      address,
      orderDetails: formatOrderDetails(),
      cartTotal: cartTotal,
    };

    try {
      // Send the data to our own API route 
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // If successful, redirect to the success page
        console.log('Order placed successfully!');
        router.push('/checkout/success');
      } else {
        // If the server had a problem
        console.log('Failed to send email.');
        alert('Failed to place order. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      // If there was a network error
      console.error('Error:', error);
      alert('An error occurred. Please check your connection and try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-12">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Side: Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Delivery Details</h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  placeholder="For order confirmation"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Delivery Address
                </label>
                <textarea
                  name="address"
                  id="address"
                  rows={4}
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  placeholder="Please include your street address, house number, and any landmarks."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || cartItems.length === 0}
                  className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Placing Order...' : 'Place Order'}
                </button>
              </div>
            </form>

            {/* Right Side: Order Summary */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm h-fit">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Order</h2>
              <ul role="list" className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex py-4">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover object-center"
                        unoptimized={true}
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.name}</h3>
                        <p className="ml-4">GHS {(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Order total</p>
                  <p>GHS {cartTotal}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}