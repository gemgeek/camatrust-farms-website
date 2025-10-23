"use client"; 

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { useParams } from 'next/navigation';
import { PRODUCTS, CATEGORIES } from '@/data/products'; 
import { useCart } from '@/context/CartContext'; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProductPage() {
  const params = useParams(); 
  const productId = params.productId as string; 
  
  const { addToCart } = useCart(); 
  
  const [quantity, setQuantity] = useState(1); 
  const [addedMessage, setAddedMessage] = useState(false); 

  const product = PRODUCTS.find((p) => p.id === productId);

    // --------- GET CATEGORY INFO ---------
  const category = product 
    ? CATEGORIES.find((cat) => cat.id === product.category) 
    : null;
  // -------------------------

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    if (!product) return; 
    
    addToCart(product, quantity);
    
    setAddedMessage(true);
    setTimeout(() => {
      setAddedMessage(false);
    }, 2000); 
  };
  
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="bg-white text-center py-40">
          <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

            {/* --------- BACK LINK --------- */}
          <div className="mb-6">
            <Link 
              href={`/catalog/${product.category}`} 
              className="text-green-600 hover:text-green-800"
            >
              &larr; Back to {category ? category.name : 'Catalog'}
            </Link>
          </div>
          {/* ---------------------------------- */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Column: Image */}
            <div className="aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
                unoptimized={true}
              />
            </div>

            {/* Right Column: Details */}
            <div>
              <p className="text-sm font-medium text-green-600 uppercase">
                {product.category}
              </p>
              <h1 className="text-4xl font-bold text-gray-900 mt-2">
                {product.name}
              </h1>
              
              <p className="text-3xl text-gray-800 mt-4">
                GHS {product.price.toFixed(2)}
              </p>
              
              <p className="text-lg text-gray-600 mt-6">
                {product.description}
              </p>

              <div className="mt-8 flex items-center">
                <label htmlFor="quantity" className="mr-4 font-medium text-gray-700">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={decreaseQuantity} 
                    className="px-4 py-2 text-xl font-bold text-gray-600 hover:bg-gray-100 rounded-l-md"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-5 py-2 text-lg text-gray-900">
                    {quantity}
                  </span>
                  <button 
                    onClick={increaseQuantity} 
                    className="px-4 py-2 text-xl font-bold text-gray-600 hover:bg-gray-100 rounded-r-md"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-3 px-6 rounded-md text-white font-semibold text-lg transition-colors duration-300
                    ${addedMessage 
                      ? 'bg-blue-500' 
                      : 'bg-green-600 hover:bg-green-700' 
                    }
                  `}
                >
                  {addedMessage ? 'Added to Cart!' : 'Add to Cart'}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}