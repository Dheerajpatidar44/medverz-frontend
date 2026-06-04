'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';

const WorkAbroadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',          // Home Country
    state: '',            // Home State
    city: '',             // Home City
    preferredCountry: '', // Preferred Country
    planTime: '',         // How soon
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [isPlanDropdownOpen, setIsPlanDropdownOpen] = useState(false);

  const countries = ['India', 'Nepal', 'Bangladesh', 'Sri Lanka', 'UAE', 'Other'];
  const states = ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Uttar Pradesh', 'Other'];
  const planTimes = ['Immediately', 'Within 3 months', 'Within 6 months', 'After 6 months'];

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-work-abroad-popup', handleOpen);

    return () => {
      window.removeEventListener('open-work-abroad-popup', handleOpen);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please agree to the consent terms before submitting.");
      return;
    }
    
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
          name: '', email: '', phone: '', country: '', state: '', city: '', preferredCountry: '', planTime: '', consent: false 
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-[#ebebeb] w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden border border-gray-300"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-semibold text-sm">Name*</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-md bg-[#f2f2f2] border border-gray-200 focus:bg-white outline-none transition-all text-sm text-gray-700 placeholder-gray-400"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-semibold text-sm">Email*</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-md bg-[#f2f2f2] border border-gray-200 focus:bg-white outline-none transition-all text-sm text-gray-700 placeholder-gray-400"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-semibold text-sm">Phone*</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter your phone"
                      className="w-full px-4 py-3 rounded-md bg-[#f2f2f2] border border-gray-200 focus:bg-white outline-none transition-all text-sm text-gray-700 placeholder-gray-400"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* Country Dropdown */}
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-gray-700 font-semibold text-sm">Country*</label>
                    <div
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      className="w-full px-4 py-3 rounded-md bg-[#f2f2f2] border border-gray-200 focus:bg-white outline-none transition-all text-sm text-gray-700 flex items-center justify-between cursor-pointer"
                    >
                      <span className={formData.country ? "text-gray-800" : "text-gray-400"}>
                        {formData.country || "Select Your Country"}
                      </span>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    {isCountryDropdownOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsCountryDropdownOpen(false)} />
                        <div className="absolute top-[80px] left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
                          {countries.map(country => (
                            <div
                              key={country}
                              onClick={() => { setFormData({ ...formData, country }); setIsCountryDropdownOpen(false); }}
                              className="px-4 py-2.5 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                            >
                              {country}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* State Dropdown */}
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-gray-700 font-semibold text-sm">State*</label>
                    <div
                      onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
                      className="w-full px-4 py-3 rounded-md bg-[#f2f2f2] border border-gray-200 focus:bg-white outline-none transition-all text-sm text-gray-700 flex items-center justify-between cursor-pointer"
                    >
                      <span className={formData.state ? "text-gray-800" : "text-gray-400"}>
                        {formData.state || "Select State"}
                      </span>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    {isStateDropdownOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsStateDropdownOpen(false)} />
                        <div className="absolute top-[80px] left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
                          {states.map(state => (
                            <div
                              key={state}
                              onClick={() => { setFormData({ ...formData, state }); setIsStateDropdownOpen(false); }}
                              className="px-4 py-2.5 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                            >
                              {state}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* City */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-semibold text-sm">Your City*</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your city name"
                      className="w-full px-4 py-3 rounded-md bg-[#f2f2f2] border border-gray-200 focus:bg-white outline-none transition-all text-sm text-gray-700 placeholder-gray-400"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>

                  {/* Preferred Country */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-semibold text-sm">Preferred Country to Work In</label>
                    <input
                      type="text"
                      placeholder="Preferred Country to Work In"
                      className="w-full px-4 py-3 rounded-md bg-[#f2f2f2] border border-gray-200 focus:bg-white outline-none transition-all text-sm text-gray-700 placeholder-gray-400"
                      value={formData.preferredCountry}
                      onChange={(e) => setFormData({ ...formData, preferredCountry: e.target.value })}
                    />
                  </div>

                  {/* How soon Dropdown */}
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-gray-700 font-semibold text-sm">How soon do you plan to go abroad?</label>
                    <div
                      onClick={() => setIsPlanDropdownOpen(!isPlanDropdownOpen)}
                      className="w-full px-4 py-3 rounded-md bg-[#f2f2f2] border border-gray-200 focus:bg-white outline-none transition-all text-sm text-gray-700 flex items-center justify-between cursor-pointer"
                    >
                      <span className={formData.planTime ? "text-gray-800" : "text-gray-400"}>
                        {formData.planTime || "How soon do you plan to go abroad?"}
                      </span>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    {isPlanDropdownOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsPlanDropdownOpen(false)} />
                        <div className="absolute top-[80px] left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
                          {planTimes.map(time => (
                            <div
                              key={time}
                              onClick={() => { setFormData({ ...formData, planTime: time }); setIsPlanDropdownOpen(false); }}
                              className="px-4 py-2.5 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                            >
                              {time}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="pt-2">
                  <label className="text-gray-700 font-semibold text-sm block mb-3">Please confirm</label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input
                        type="checkbox"
                        className="peer appearance-none w-5 h-5 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary transition-colors cursor-pointer"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      />
                      <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-[13px] text-gray-600 leading-tight">
                      I consent to having Medverz Education securely store and process my personal data for the purpose of providing consultation services, and I agree to be contacted via phone, WhatsApp, or email. <strong>Your data is 100% safe with us.</strong> You can opt out anytime. View our Privacy Policy.
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.phone || !formData.email || !formData.country || !formData.state || !formData.city || !formData.consent}
                    className="w-full bg-[#a32a22] text-white py-3.5 rounded-md font-bold text-lg hover:bg-red-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Speak to a Counsellor'}
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
