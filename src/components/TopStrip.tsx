import React from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

const TopStrip = () => {
  const marqueeText = "NEET 2025 Admissions Open • Expert Counseling for Medical Aspirants • Top Medical Colleges Guidance • Career Seminars Every Sunday • Register Now for Free Consultation • ";

  return (
    <div className="bg-white text-primary pt-3 pb-2 sm:py-2 border-b border-gray-100 w-full relative overflow-hidden shadow-sm">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
        
        {/* Left: Phone */}
        <div className="flex items-center justify-center md:justify-start w-full md:w-1/4 relative md:pr-6 py-1">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary fill-primary/10" />
            <a href="tel:+919070107030" className="text-gray-700 hover:text-primary font-semibold text-sm lg:text-base transition-colors whitespace-nowrap">
              +91 90701 07030
            </a>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-gray-200 rotate-[15deg] hidden md:block"></div>
        </div>

        {/* Center: Latest Updates Badge + Text */}
        <div className="flex flex-col items-center justify-center w-full md:w-2/4 py-1">
          {/* Badge */}
          <div className="bg-primary text-white text-[10px] md:text-xs font-black px-4 py-1.5 rounded flex items-center justify-center tracking-wider mb-1 shadow-sm">
            <div className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </div>
            LATEST UPDATES
          </div>
          
          {/* Announcement scrolling marquee */}
          <Link href="/gallery/photos" className="w-full overflow-hidden relative py-0.5 hover:opacity-80 transition-opacity">
            <div className="flex whitespace-nowrap animate-marquee">
              <div className="flex items-center gap-6 px-4 shrink-0">
                <span className="text-[12px] md:text-[13px] font-extrabold tracking-wide text-primary">
                  {marqueeText}
                </span>
              </div>
              <div className="flex items-center gap-6 px-4 shrink-0">
                <span className="text-[12px] md:text-[13px] font-extrabold tracking-wide text-primary">
                  {marqueeText}
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Right: Email */}
        <div className="flex items-center justify-center md:justify-end w-full md:w-1/4 relative md:pl-6 py-1">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-gray-200 rotate-[15deg] hidden md:block"></div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:info@medverzeducation.com" className="text-gray-700 hover:text-primary font-bold text-sm lg:text-base transition-colors whitespace-nowrap">
              info@medverzeducation.com
            </a>
          </div>
          {/* Far Right Divider */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-gray-200 rotate-[15deg] hidden md:block"></div>
        </div>

      </div>
    </div>
  );
};

export default TopStrip;
