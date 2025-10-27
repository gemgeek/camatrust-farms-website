"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PRODUCTS, CATEGORIES, ProductVariant } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProductPage() {
  const params = useParams();
  const productId = params.productId as string;

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);

  const product = PRODUCTS.find((p) => p.id === productId);
  const category = product
    ? CATEGORIES.find((cat) => cat.id === product.category)
    : null;

  useEffect(() => {
    if (product?.variants && product.variants.length > 0) {
      setSelectedVariantId(product.variants[0].id);
    } else {
      setSelectedVariantId(null);
    }
  }, [product]);

  const selectedVariant = product?.variants?.find(v => v.id === selectedVariantId);
  const displayPrice = selectedVariant ? selectedVariant.price : product?.price ?? 0;

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    if (!product) return;
    if (product.variants && !selectedVariant) {
        alert("Please select an option.");
        return;
    }

    const itemToAdd = {
        ...product,
        price: displayPrice,
        ...(selectedVariant && {
            variantId: selectedVariant.id,
            variantName: selectedVariant.name,
            id: `${product.id}-${selectedVariant.id}`
        })
    };

    addToCart(itemToAdd, quantity);

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

          <div className="mb-6">
            <Link
              href={`/catalog/${product.category}`}
              className="text-green-600 hover:text-green-800"
            >
              &larr; Back to {category ? category.name : 'Market'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className="aspect-square w-full overflow-hidden rounded-lg relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="w-full h-full object-cover"
                priority
                unoptimized={true}
              />
            </div>

            {/* Right Column: Details */}
            <div>
              <p className="text-sm font-medium text-green-600 uppercase">
                {category?.name ?? product.category}
              </p>
              <h1 className="text-4xl font-bold text-gray-900 mt-2">
                {product.name}
              </h1>

              {/* Conditional Price / Variant Display */}
              {product.variants && product.variants.length > 0 ? (
                <>
                  <div className="mt-4">
                    <label htmlFor="variant-select" className="block text-sm font-medium text-gray-700">
                      Select Option:
                    </label>
                    <select
                      id="variant-select"
                      name="variant-select"
                      value={selectedVariantId ?? ''}
                      onChange={(e) => setSelectedVariantId(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                    >
                      {product.variants.map((variant) => (
                        <option key={variant.id} value={variant.id}>
                          {variant.name} - GHS {variant.price.toFixed(2)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="text-3xl text-gray-800 mt-4">
                    GHS {displayPrice.toFixed(2)}
                  </p>
                </>
              ) : (
                <p className="text-3xl text-gray-800 mt-4">
                  GHS {displayPrice.toFixed(2)}
                  {product.unit && <span className="text-lg text-gray-500 ml-2"> / {product.unit}</span>}
                </p>
              )}

              <p className="text-lg text-gray-600 mt-6">
                {product.description}
              </p>

              <div className="mt-8 flex items-center">
                <label htmlFor="quantity" className="mr-4 font-medium text-gray-700">Quantity:</label>
                <div className="flex items-center"> 
                  <button
                    onClick={decreaseQuantity}
                    className="px-3 py-1 text-lg font-semibold text-gray-600 border border-gray-300 rounded-l-md hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-green-500"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-5 py-1 text-lg text-gray-900 border-t border-b border-gray-300"> 
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="px-3 py-1 text-lg font-semibold text-gray-600 border border-gray-300 rounded-r-md hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-green-500"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!!(product.variants && !selectedVariantId)}
                  className={`w-full py-3 px-6 rounded-md text-white font-semibold text-lg transition-colors duration-300 ${addedMessage ? 'bg-blue-500' : 'bg-green-600 hover:bg-green-700'} disabled:bg-gray-400`}
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