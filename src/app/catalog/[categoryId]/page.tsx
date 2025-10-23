"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation'; 
import { CATEGORIES, PRODUCTS } from '@/data/products';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';


const CategoryPage = () => {
  const params = useParams(); 
  const categoryId = params.categoryId as string; 

  const category = CATEGORIES.find((cat) => cat.id === categoryId);

  const filteredProducts = PRODUCTS.filter(
    (product) => product.category === categoryId
  );

  if (!category) {
    
    return (
      <>
        <Navbar />
        <div className="text-center py-40 bg-white">
          <h1 className="text-2xl font-bold text-gray-900">Category not found</h1>
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
        {/* Page Header */}
        <div className="mb-16">
          <Link href="/catalog" className="text-green-600 hover:text-green-800">&larr; Back to All Categories</Link>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mt-4">{category.name}</h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 gap-x-8">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  unoptimized={true}
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-500">View Details</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default CategoryPage;