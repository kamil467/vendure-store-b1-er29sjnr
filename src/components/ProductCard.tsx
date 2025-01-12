import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  whatsappNumber: string;
}

export default function ProductCard({ name, price, image, description, whatsappNumber }: ProductCardProps) {
  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering: ${name} (${price})`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-gray-300 mb-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-purple-400 font-bold">${price}</span>
          <button
            onClick={handleWhatsAppOrder}
            className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Order via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}