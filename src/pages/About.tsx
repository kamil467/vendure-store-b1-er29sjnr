import React from 'react';
import { Award, Rocket, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-300">Pioneering the future of e-commerce</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <div className="flex justify-center mb-4">
              <Rocket className="h-12 w-12 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-2">Innovation First</h3>
            <p className="text-gray-300 text-center">
              We're constantly pushing the boundaries of what's possible in online shopping
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-2">Trusted Quality</h3>
            <p className="text-gray-300 text-center">
              Every product is carefully selected to ensure the highest quality standards
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-2">Customer First</h3>
            <p className="text-gray-300 text-center">
              Your satisfaction is our top priority, with instant support via WhatsApp
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-gray-300 mb-4">
            Founded in 2024, FutureStore emerged from a vision to revolutionize how people shop online. 
            We believe in making cutting-edge technology accessible to everyone while providing a seamless 
            shopping experience through direct WhatsApp communication.
          </p>
          <p className="text-gray-300">
            Our commitment to innovation and customer satisfaction has made us a leading destination for 
            tech enthusiasts and forward-thinking shoppers.
          </p>
        </div>
      </div>
    </div>
  );
}