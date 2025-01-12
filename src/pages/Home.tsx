import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: '1',
    name: 'Future Tech Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
    description: 'Next-gen smartwatch with holographic display',
    whatsappNumber: '1234567890'
  },
  {
    id: '2',
    name: 'Quantum Headphones',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    description: 'Wireless headphones with noise cancellation',
    whatsappNumber: '1234567890'
  },
  {
    id: '3',
    name: 'Neo Drone',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?auto=format&fit=crop&w=800&q=80',
    description: 'AI-powered drone with 8K camera',
    whatsappNumber: '1234567890'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to the Future of Shopping
          </h1>
          <p className="text-xl text-gray-300">
            Discover cutting-edge products with instant WhatsApp ordering
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}