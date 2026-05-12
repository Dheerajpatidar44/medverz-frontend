'use client';

import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
          <input
            type="text"
            id="subject"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="How can we help?"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/30"
        >
          <span>Send Message</span>
          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
