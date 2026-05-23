'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Award, Briefcase, Globe } from 'lucide-react';

const destinationsList = [
  { name: 'United Kingdom', code: 'gb' },
  { name: 'Germany', code: 'de' },
  { name: 'Canada', code: 'ca' },
  { name: 'United Arab Emirates', code: 'ae' },
  { name: 'Saudi Arabia', code: 'sa' },
  { name: 'Australia', code: 'au' },
  { name: 'USA', code: 'us' },
  { name: 'Other', code: 'un' }
];

const professionsList = [
  'Doctor / Consultant',
  'General Practitioner (GP)',
  'Registered Nurse (RN)',
  'Allied Health Professional',
  'Dentist',
  'Pharmacist',
  'Healthcare Administrator',
  'Other Professional'
];

const experienceList = [
  'Fresh graduate / Intern',
  '1 - 2 Years',
  '3 - 5 Years',
  '5+ Years'
];

const WorkAbroadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Work Abroad', // Identifies this as a Work Abroad submission
    country: '',          // Destination Country
    state: '',            // Profession / Specialization
    city: ''              // Years of Experience
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDestDropdownOpen, setIsDestDropdownOpen] = useState(false);
  const [isProfessionDropdownOpen, setIsProfessionDropdownOpen] = useState(false);
  const [isExpDropdownOpen, setIsExpDropdownOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-work-abroad-popup', handleOpen);

    return () => {
      window.removeEventListener('open-work-abroad-popup', handleOpen);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://medverzeducation.com/php/submit_work_abroad.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Thank you! Our overseas career experts will contact you shortly.');
        setIsOpen(false);
        setFormData({ 
          name: '', 
          phone: '', 
          email: '', 
          course: 'Work Abroad', 
          country: '', 
          state: '', 
          city: '' 
        });
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
            className="relative bg-white w-full max-w-sm rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header Gradient Strip */}
            <div className="h-2 bg-gradient-to-r from-[#0a8ba9] to-[#7cb94c] w-full" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X size={22} />
            </button>

            <div className="p-6">
              {/* Header Info */}
              <div className="text-center mb-6 mt-2">
                <h2 className="text-xl font-extrabold text-gray-900 leading-tight">
                  Work Abroad Consultation
                </h2>
                <p className="text-xs text-gray-500 font-semibold mt-1.5">
                  Register to speak with our international recruitment specialists
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-[#0a8ba9] focus:ring-2 focus:ring-[#0a8ba9]/10 outline-none transition-all text-sm font-semibold text-gray-700 placeholder-gray-400"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-[#0a8ba9] focus:ring-2 focus:ring-[#0a8ba9]/10 outline-none transition-all text-sm font-semibold text-gray-700 placeholder-gray-400"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* Profession Dropdown */}
                <div className="relative">
                  <div
                    onClick={() => {
                      setIsProfessionDropdownOpen(!isProfessionDropdownOpen);
                      setIsDestDropdownOpen(false);
                      setIsExpDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-[#0a8ba9] outline-none transition-all text-sm font-semibold text-gray-700 flex items-center justify-between cursor-pointer"
                  >
                    {formData.state ? (
                      <span className="text-gray-800">{formData.state}</span>
                    ) : (
                      <span className="text-gray-400">Select Profession / Specialty *</span>
                    )}
                    <ChevronDown size={16} className={`text-gray-400 transition-transform ${isProfessionDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {isProfessionDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-[1001]" onClick={() => setIsProfessionDropdownOpen(false)} />
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg z-[1002] max-h-48 overflow-y-auto">
                        {professionsList.map((prof) => (
                          <div
                            key={prof}
                            onClick={() => {
                              setFormData({ ...formData, state: prof });
                              setIsProfessionDropdownOpen(false);
                            }}
                            className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-sm font-semibold text-gray-700 transition-colors"
                          >
                            {prof}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Experience Dropdown */}
                <div className="relative">
                  <div
                    onClick={() => {
                      setIsExpDropdownOpen(!isExpDropdownOpen);
                      setIsDestDropdownOpen(false);
                      setIsProfessionDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-[#0a8ba9] outline-none transition-all text-sm font-semibold text-gray-700 flex items-center justify-between cursor-pointer"
                  >
                    {formData.city ? (
                      <span className="text-gray-800">{formData.city}</span>
                    ) : (
                      <span className="text-gray-400">Years of Experience *</span>
                    )}
                    <ChevronDown size={16} className={`text-gray-400 transition-transform ${isExpDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {isExpDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-[1001]" onClick={() => setIsExpDropdownOpen(false)} />
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg z-[1002] max-h-48 overflow-y-auto">
                        {experienceList.map((exp) => (
                          <div
                            key={exp}
                            onClick={() => {
                              setFormData({ ...formData, city: exp });
                              setIsExpDropdownOpen(false);
                            }}
                            className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-sm font-semibold text-gray-700 transition-colors"
                          >
                            {exp}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Destination Dropdown */}
                <div className="relative">
                  <div
                    onClick={() => {
                      setIsDestDropdownOpen(!isDestDropdownOpen);
                      setIsProfessionDropdownOpen(false);
                      setIsExpDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-[#0a8ba9] outline-none transition-all text-sm font-semibold text-gray-700 flex items-center justify-between cursor-pointer"
                  >
                    {formData.country ? (
                      <div className="flex items-center gap-2">
                        {formData.country !== 'Other' && (
                          <img
                            src={`https://flagcdn.com/w20/${destinationsList.find(c => c.name === formData.country)?.code}.png`}
                            alt={formData.country}
                            className="w-5 h-auto rounded-sm shadow-sm"
                          />
                        )}
                        <span>{formData.country}</span>
                      </div>
                    ) : (
                      <span className="text-gray-400">Target Destination Country *</span>
                    )}
                    <ChevronDown size={16} className={`text-gray-400 transition-transform ${isDestDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {isDestDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-[1001]" onClick={() => setIsDestDropdownOpen(false)} />
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg z-[1002] max-h-48 overflow-y-auto">
                        {destinationsList.map((dest) => (
                          <div
                            key={dest.code}
                            onClick={() => {
                              setFormData({ ...formData, country: dest.name });
                              setIsDestDropdownOpen(false);
                            }}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-sm font-semibold text-gray-700 transition-colors"
                          >
                            {dest.code !== 'un' && (
                              <img
                                src={`https://flagcdn.com/w20/${dest.code}.png`}
                                alt={dest.name}
                                className="w-5 h-auto shadow-sm rounded-sm"
                              />
                            )}
                            <span>{dest.name}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Phone Number */}
                <div className="flex gap-2">
                  <div className="w-16 flex-shrink-0">
                    <input
                      type="text"
                      readOnly
                      value="+91"
                      className="w-full px-2 py-2.5 rounded-xl bg-gray-50/50 border border-gray-100 text-center text-sm font-bold text-gray-500 outline-none"
                    />
                  </div>
                  <div className="flex-grow">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-[#0a8ba9] focus:ring-2 focus:ring-[#0a8ba9]/10 outline-none transition-all text-sm font-semibold text-gray-700 placeholder-gray-400"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.phone || !formData.email || !formData.country || !formData.state || !formData.city}
                    className="w-full bg-gradient-to-r from-[#0a8ba9] to-[#7cb94c] text-white py-3.5 rounded-xl font-bold text-sm hover:opacity-95 hover:shadow-lg active:scale-95 transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed uppercase"
                  >
                    {isSubmitting ? 'Submitting Details...' : 'Request Consultation'}
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

export default WorkAbroadPopup;
