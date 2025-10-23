"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext'; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const cartTotal = getCartTotal();

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-12">
            Shopping Cart
          </h1>

          {/* Check if cart is empty */}
          {cartItems.length === 0 ? (
            <div className="text-center py-20 border-t border-gray-200">
              <h2 className="text-2xl font-medium text-gray-900">Your cart is empty</h2>
              <p className="mt-2 text-gray-500">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link href="/catalog" className="mt-6 inline-block bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700">
                Start Shopping
              </Link>
            </div>
          ) : (
            // If cart is NOT empty, show the table and summary
            <div className="border-t border-gray-200 pt-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
              
              {/* Left Side: Item List */}
              <div className="lg:col-span-2">
                <ul role="list" className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="h-full w-full object-cover object-center"
                          unoptimized={true} 
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link href={`/product/${item.id}`}>{item.name}</Link>
                            </h3>
                            <p className="ml-4">GHS {item.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          {/* Quantity Selector */}
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100 rounded-l-md"
                            >
                              -
                            </button>
                            <span className="px-4 py-1 text-base text-gray-900">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100 rounded-r-md"
                            >
                              +
                            </button>
                          </div>

                          {/* Remove Button */}
                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="font-medium text-red-600 hover:text-red-800 flex items-center space-x-1"
                            >
                              <TrashIcon />
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side: Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <dt className="text-sm text-gray-600">Subtotal</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        GHS {cartTotal.toFixed(2)}
                      </dd>
                    </div>
                    {/* Will add shipping estimates here later */}
                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                      <dt className="text-base font-medium text-gray-900">Order total</dt>
                      <dd className="text-base font-medium text-gray-900">
                        GHS {cartTotal.toFixed(2)}
                      </dd>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/checkout" 
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700"
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <Link href="/catalog" className="font-medium text-green-600 hover:text-green-500">
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}