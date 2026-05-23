'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Social Icons SVG Paths (Consistent with TopStrip)
  const icons = {
    facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    instagram: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.885 5.885 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.898 5.898 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.89 5.89 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.584-.071 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.015-4.85-.071c-1.17-.055-1.805-.249-2.227-.415a3.746 3.746 0 01-1.382-.896 3.746 3.746 0 01-.896-1.382c-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.016-3.584.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324A4.162 4.162 0 0112 16zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    twitter: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z",
    youtube: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    linkedin: "M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7h-3.56V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z",
    pinterest: "M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.992 3.992-.283 1.194.598 2.169 1.775 2.169 2.13 0 3.768-2.247 3.768-5.49 0-2.87-2.061-4.876-5.008-4.876-3.41 0-5.412 2.559-5.412 5.202 0 1.03.397 2.135.892 2.735a.343.343 0 0 1 .08.333c-.097.403-.314 1.278-.356 1.455a.3.3 0 0 1-.212.181c-1.393-.648-2.263-2.685-2.263-4.321 0-3.518 2.555-6.75 7.375-6.75 3.87 0 6.878 2.758 6.878 6.444 0 3.845-2.423 6.94-5.786 6.94-1.13 0-2.191-.587-2.554-1.278l-.695 2.645c-.251.967-.93 2.18-1.385 2.914C9.37 23.791 10.638 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"
  };

  const socials = [
    { name: 'Facebook', path: icons.facebook, url: 'https://www.facebook.com/share/1LU3WduLK8/?mibextid=wwXIfr' },
    { name: 'Instagram', path: icons.instagram, url: 'https://www.instagram.com/medverz.education?igsh=MW9wM2pkOGF4YTJ1YQ%3D%3D&utm_source=qr' },
    { name: 'Twitter', path: icons.twitter, url: 'https://x.com/medverz?s=21' },
    { name: 'LinkedIn', path: icons.linkedin, url: 'https://www.linkedin.com/company/medverz-education/' },
    { name: 'Pinterest', path: icons.pinterest, url: 'https://pin.it/AW1hLoCoC' },
    { name: 'YouTube', path: icons.youtube, url: 'http://yt.openinapp.co/yqz80' },
  ];

  return (
    <motion.div 
      initial={{ x: -100 }}
      animate={{ x: isOpen ? 0 : -40 }}
      transition={{ type: 'spring', damping: 25, stiffness: 120 }}
      className="fixed left-0 top-1/2 md:top-[60%] -translate-y-1/2 z-[200] flex items-center"
    >
      <div className="bg-white/90 backdrop-blur-md shadow-[10px_0_30px_rgba(0,0,0,0.15)] rounded-r-2xl py-5 flex flex-col gap-5 items-center w-[38px] md:w-[40px] border-y border-r border-white/20">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/70 hover:text-primary transition-all duration-300 hover:scale-125 group relative flex items-center justify-center"
          >
            <svg className="w-4 h-4 md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="currentColor">
              <path d={social.path} />
            </svg>
            <span className="absolute left-full ml-4 px-2 py-1 bg-primary text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
              {social.name}
            </span>
          </a>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/80 backdrop-blur-md shadow-[4px_0_15px_rgba(0,0,0,0.1)] py-5 px-0.5 rounded-r-xl border-l border-y border-r border-white/30 hover:bg-white transition-all flex items-center justify-center group ml-[-1px] active:scale-95"
      >
        <motion.div
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <ChevronLeft size={16} className="text-primary/40 group-hover:text-primary transition-colors" />
        </motion.div>
      </button>
    </motion.div>
  );
};

export default SocialSidebar;
