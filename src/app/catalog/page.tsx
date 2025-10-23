import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '@/data/products';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';

const CatalogPage = () => {
  return (
   <>
    <Navbar />
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Catalog</h1>
          <p className="mt-4 text-xl text-gray-600">Browse our farm-fresh products by category.</p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 mb-24">
          {CATEGORIES.map((category) => (
            <Link key={category.id} href={`/catalog/${category.id}`} className="group block">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  unoptimized={true}
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <Footer />
   </>
  );
};

export default CatalogPage;