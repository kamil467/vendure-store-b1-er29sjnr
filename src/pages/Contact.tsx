import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">Get in touch with our team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-300">
                  <Phone className="h-6 w-6 text-purple-400" />
                  <span>+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <Mail className="h-6 w-6 text-purple-400" />
                  <span>contact@futurestore.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <span>123 Future Street, Tech City, TC 12345</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}