'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: 'Is MBBS abroad recognized in India?',
    answer: 'Yes, most universities we partner with are recognized by the National Medical Commission (NMC) and WHO. Students must qualify the FMGE/NEXT exam to practice in India.'
  }, 
  {
    question: 'What is the duration of MBBS abroad?',
    answer: 'Typically, the duration is 5 to 6 years, which includes clinical rotations. This varies slightly depending on the country you choose.'
  },
  {
    question: 'Are there any entrance exams for studying abroad?',
    answer: 'While NEET is mandatory for Indian students to practice in India later, most foreign universities do not require separate entrance exams like IELTS/TOEFL for certain countries.'
  },
  {
    question: 'What kind of support does Medverz provide?',
    answer: 'We provide end-to-end support including university selection, admission letters, visa documentation, flight bookings, and post-landing assistance like hostel arrangements.'
  },
  {
    question: 'Is the medium of instruction in English?',
    answer: 'Yes, we primarily focus on universities that offer the complete course in English medium for international students.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Got Questions?</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-100 rounded-2xl overflow-hidden  "
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left   bg-white  transition-colors"
                suppressHydrationWarning
              >
                <span className={`text-md md:text-lg font-bold transition-colors ${openIndex === index ? 'text-primary' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-500 leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
