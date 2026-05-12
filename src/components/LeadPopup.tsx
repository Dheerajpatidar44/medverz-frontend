'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare, ChevronDown } from 'lucide-react';

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    country: ''
  });

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic here to send data to your backend
    alert('Thank you! Our expert will contact you soon.');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-6">
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-black text-primary mb-1">
                  Free Consultation !!
                </h2>
                <p className="text-gray-500 text-xs font-semibold">
                  Start your medical career journey today.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input 
                    type="text" 
                    required
                    placeholder="Student Name *"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm text-gray-700"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input 
                    type="tel" 
                    required
                    placeholder="Phone *"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm text-gray-700"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <input 
                    type="email" 
                    required
                    placeholder="Email *"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm text-gray-700"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="relative">
                  <select 
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm text-gray-500 appearance-none"
                    onChange={(e) => setFormData({...formData, course: e.target.value})}
                  >
                    <option value="">Select Course *</option>
                    <option value="MBBS">MBBS</option>
                    <option value="BDS">BDS</option>
                    <option value="MD">MD / MS</option>
                    <option value="Nursing">Nursing</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ChevronDown size={14} />
                  </div>
                </div>

                <div className="relative">
                  <select 
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm text-gray-500 appearance-none"
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                  >
                    <option value="">Preferred Country *</option>
                    <option value="Russia">Russia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Philippines">Philippines</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ChevronDown size={14} />
                  </div>
                </div>

                <div className="pt-2 flex flex-col md:flex-row gap-3">
                  <button 
                    type="submit"
                    className="flex-1 bg-primary text-white py-3 rounded-xl font-black text-xs hover:bg-primary-dark transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Phone size={14} />
                    BOOK DEMO
                  </button>
                  <a 
                    href="https://wa.me/yournumber" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white py-3 rounded-xl font-black text-xs hover:bg-[#128C7E] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={14} />
                    WHATSAPP
                  </a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadPopup;
