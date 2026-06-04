'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare, ChevronDown } from 'lucide-react';

const countriesList = [
  { name: 'Russia', code: 'ru' },
  { name: 'Kyrgyzstan', code: 'kg' },
  { name: 'Georgia', code: 'ge' },
  { name: 'Kazakhstan', code: 'kz' },
  { name: 'Uzbekistan', code: 'uz' },
  { name: 'Tajikistan', code: 'tj' },
  { name: 'Nepal', code: 'np' },
  { name: 'Bangladesh', code: 'bd' },
  { name: 'China', code: 'cn' },
  { name: 'Belarus', code: 'by' },
  { name: 'Philippines', code: 'ph' },
  { name: 'Armenia', code: 'am' },
  { name: 'Egypt', code: 'eg' }
];

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'MBBS',
    country: '',
    state: '',
    city: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-lead-popup', handleOpen);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('open-lead-popup', handleOpen);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://medverzeducation.com/php/submit_enquiry.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Thank you! Our expert will contact you soon.');
        setIsOpen(false);
        setFormData({ name: '', phone: '', email: '', course: 'MBBS', country: '', state: '', city: '' });
      } else {
        alert(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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

            <div className="p-5 md:p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg md:text-xl font-bold text-gray-800">
                  Apply for MBBS in Abroad
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Name *"
                    className="w-full px-4 py-2.5 rounded-md bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-700"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="E-mail *"
                    className="w-full px-4 py-2.5 rounded-md bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-700"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="relative">
                  <div
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    className="w-full px-4 py-2.5 rounded-md bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-700 flex items-center justify-between cursor-pointer"
                  >
                    {formData.country ? (
                      <div className="flex items-center gap-2">
                        <img
                          src={`https://flagcdn.com/w20/${countriesList.find(c => c.name === formData.country)?.code}.png`}
                          alt={formData.country}
                          className="w-5 h-auto rounded-sm shadow-sm"
                        />
                        <span>{formData.country}</span>
                      </div>
                    ) : (
                      <span className="text-gray-500">Select Your Country</span>
                    )}
                    <ChevronDown size={16} className={`text-gray-400 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {isCountryDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-[1001]" onClick={() => setIsCountryDropdownOpen(false)} />
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-md shadow-lg z-[1002] max-h-48 overflow-y-auto">
                        {countriesList.map((country) => (
                          <div
                            key={country.code}
                            onClick={() => {
                              setFormData({ ...formData, country: country.name });
                              setIsCountryDropdownOpen(false);
                            }}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-sm text-gray-700 transition-colors"
                          >
                            <img
                              src={`https://flagcdn.com/w20/${country.code}.png`}
                              alt={country.name}
                              className="w-5 h-auto shadow-sm rounded-sm"
                            />
                            <span>{country.name}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="relative">
                  <select
                    required
                    className="w-full px-4 py-2.5 rounded-md bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-500 appearance-none"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  >
                    <option value="">Select Course</option>
                    <option value="MBBS">MBBS</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ChevronDown size={16} />
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Select Your State"
                    className="w-full px-4 py-2.5 rounded-md bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-700"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ChevronDown size={16} />
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Select Your City"
                    className="w-full px-4 py-2.5 rounded-md bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-700"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ChevronDown size={16} />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="w-16 flex-shrink-0">
                    <input
                      type="text"
                      readOnly
                      value="+91"
                      className="w-full px-2 py-2.5 rounded-md bg-gray-50 border border-gray-100 text-center text-sm text-gray-500 outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full px-4 py-2.5 rounded-md bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-700"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1e4e79] text-white py-3.5 rounded-md font-bold text-sm hover:bg-[#153b5e] transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT NOW'}
                  </button>
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
