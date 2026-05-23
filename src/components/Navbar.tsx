'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, Menu, X, Search, FileText, Phone, Mail, Clock, Globe, GraduationCap, MapPin, Sparkles } from 'lucide-react';

import { mbbsData } from '@/data/mbbsData';

const Navbar = () => {
  // Add custom animation styles
  const animationStyles = `
    @keyframes zoomPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    .animate-zoom-pulse {
      animation: zoomPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideDown {
      from { transform: translateY(-20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .animate-fade-in {
      animation: fadeIn 0.2s ease-out forwards;
    }
    .animate-slide-down {
      animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Search functionality states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  React.useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock scroll when search overlay is open
  React.useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  // Reset active suggestion index on query change
  React.useEffect(() => {
    setActiveSuggestionIndex(-1);
  }, [searchQuery]);

  // Close search when pathname changes (navigation)
  React.useEffect(() => {
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [pathname]);

  // Handle global Esc key down to close search
  React.useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [isSearchOpen]);

  // Filter countries and universities from mbbsData
  const filteredCountries = searchQuery.trim() === '' ? [] : mbbsData.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUniversities = searchQuery.trim() === '' ? [] : mbbsData.flatMap(country =>
    country.universities
      .filter(uni =>
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map(uni => ({
        ...uni,
        countrySlug: country.slug,
        countryName: country.name
      }))
  );

  // Grouped active suggestions list for keyboard navigation index matching
  const suggestions = [
    ...filteredCountries.map(c => ({
      type: 'country' as const,
      name: c.name,
      slug: c.slug,
      flag: c.flag,
      href: `/mbbs/${c.slug}`
    })),
    ...filteredUniversities.map(u => ({
      type: 'university' as const,
      name: u.name,
      slug: u.slug,
      href: `/mbbs/${u.countrySlug}/${u.slug}`,
      subtitle: u.location
    }))
  ];

  // Popular Countries suggestions for empty input state
  const popularSuggestions = mbbsData.filter(c =>
    ['russia', 'georgia', 'kyrgyzstan', 'kazakhstan', 'egypt'].includes(c.slug)
  );

  // Handle Keyboard Navigation inside the search input
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeSuggestionIndex >= 0 && activeSuggestionIndex < suggestions.length) {
        const selected = suggestions[activeSuggestionIndex];
        setIsSearchOpen(false);
        setSearchQuery('');
        router.push(selected.href);
      }
    }
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Group countries by regions for the dropdown
  const europeCountries = ['russia', 'georgia', 'belarus', 'armenia'];
  const asiaCountries = ['kyrgyzstan', 'kazakhstan', 'uzbekistan', 'tajikistan', 'nepal', 'bangladesh', 'china', 'philippines'];

  const getCountryLinks = (slugs: string[]) => {
    return mbbsData
      .filter(c => slugs.includes(c.slug))
      .map(c => ({ name: c.name, href: `/mbbs/${c.slug}` }));
  };

  const navLinks = [
    { name: 'HOME', href: '/' },
    {
      name: 'ABOUT US',
      href: '/about',
      dropdown: [
        { name: 'Overview', href: '/about/overview' },
        { name: 'Services', href: '/about/services' }
      ]
    },
    {
      name: 'UNIVERSITIES',
      href: '/mbbs',
      dropdown: [
        { name: 'MBBS ABROAD', href: '/mbbs' }
      ]
    },
    {
      name: 'COUNTRIES',
      href: '#',
      dropdown: [
        {
          name: 'Europe',
          href: '#',
          subDropdown: getCountryLinks(europeCountries)
        },
        {
          name: 'Asia',
          href: '#',
          subDropdown: getCountryLinks(asiaCountries)
        },
        {
          name: 'Africa',
          href: '#',
          subDropdown: getCountryLinks(['egypt'])
        },
      ]
    },
    { name: 'RESOURCES', href: '/resources' },
    {
      name: 'GALLERY',
      href: '/gallery',
      dropdown: [
        { name: 'Photos', href: '/gallery/photos' },
        { name: 'Videos', href: '/gallery/videos' }
      ]
    },
    { name: 'WORK ABROAD', href: '/work-abroad' },
    { name: 'CONTACT US', href: '/contact' },
  ];

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

  const marqueeText = "NEET 2025 Admissions Open • Expert Counseling for Medical Aspirants • Top Medical Colleges Guidance • Career Seminars Every Sunday • Register Now for Free Consultation • ";

  return (
    <header className={`sticky top-0 z-[100] w-full bg-white border-b transition-all duration-300 ease-in-out ${isScrolled ? 'border-gray-200/80 shadow-md' : 'border-gray-100 shadow-sm'
      }`}>
      <style>{animationStyles}</style>

      {/* Desktop Integrated Header (hidden lg:flex) */}
      <div className={`hidden lg:flex w-full items-stretch transition-all duration-300 ease-in-out ${isScrolled ? 'min-h-[70px]' : 'min-h-[110px]'
        }`}>
        {/* Left Column: Slanted Logo Block */}
        <div
          className={`bg-primary text-white flex items-center justify-center shrink-0 relative transition-all duration-300 ease-in-out ${isScrolled ? 'pl-6 pr-10 py-2' : 'pl-6 pr-14 py-4'
            }`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/medverz.png"
              alt="Medverz logo"
              width={200}
              height={56}
              className={`w-auto object-contain brightness-0 invert transition-all duration-300 ease-in-out ${isScrolled ? 'h-10 lg:h-12' : 'h-14 lg:h-16'
                }`}
              style={{ width: 'auto' }}
              priority
            />
          </Link>
        </div>

        {/* Right Column: Top Bar + Bottom Navigation */}
        <div className="flex-grow flex flex-col min-w-0">
          {/* Row 1: Top Strip */}
          <div className={`border-b flex items-center justify-between gap-4 text-primary overflow-hidden transition-all duration-300 ease-in-out ${isScrolled
            ? 'max-h-0 opacity-0 py-0 border-gray-100/0 pointer-events-none'
            : 'max-h-[50px] opacity-100 py-2.5 px-6 border-gray-100'
            }`}>
            {/* Phone Info */}
            <div className="flex items-center gap-2 relative pr-6 shrink-0">
              <Phone className="w-4 h-4 text-primary fill-primary/10" />
              <a href="tel:+919070107030" className="text-gray-700 hover:text-primary font-bold text-sm xl:text-base transition-colors whitespace-nowrap">
                +91 90701 07030
              </a>
              {/* Slanted divider */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1.5px] h-6 bg-gray-300 rotate-[15deg]"></div>
            </div>

            {/* Center: Latest Updates */}
            <div className="flex items-center gap-3 flex-grow max-w-xl mx-4 min-w-0">
              <div className="bg-primary text-white text-[10px] xl:text-xs font-black px-3 py-1 rounded flex items-center justify-center tracking-wider shadow-sm shrink-0 whitespace-nowrap">
                <div className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </div>
                LATEST UPDATES
              </div>
              <Link href="/gallery/photos" className="flex-1 overflow-hidden relative py-0.5 hover:opacity-80 transition-opacity">
                <div className="flex whitespace-nowrap animate-marquee">
                  <div className="flex items-center gap-6 px-4 shrink-0">
                    <span className="text-[12px] xl:text-[13px] font-extrabold tracking-wide text-primary">
                      {marqueeText}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 px-4 shrink-0">
                    <span className="text-[12px] xl:text-[13px] font-extrabold tracking-wide text-primary">
                      {marqueeText}
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right: Email & Social Icons */}
            <div className="flex items-center gap-6 shrink-0">
              {/* Email */}
              <div className="flex items-center gap-2 relative pr-6 shrink-0">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@medverzeducation.com" className="text-gray-700 hover:text-primary font-bold text-sm xl:text-base transition-colors whitespace-nowrap">
                  info@medverzeducation.com
                </a>
                {/* Slanted divider */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1.5px] h-6 bg-gray-300 rotate-[15deg]"></div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3 xl:gap-4 text-primary shrink-0">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark hover:scale-110 transition-all duration-300"
                    title={social.name}
                  >
                    <svg className="w-3.5 h-3.5 xl:w-[15px] xl:h-[15px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Main Navigation Menu */}
          <div className={`flex-grow flex items-center justify-between pl-6 pr-0 transition-all duration-300 ease-in-out ${isScrolled ? 'min-h-[70px]' : 'min-h-[60px]'
            }`}>
            {/* Desktop Navigation Links */}
            <div className="flex items-center gap-3 xl:gap-5 py-2">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-primary font-bold text-sm tracking-wide transition-colors py-4 whitespace-nowrap">
                      <span>{link.name}</span>
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                        <div className="bg-white shadow-xl border border-gray-100 rounded-md py-2 min-w-[200px]">
                          {link.dropdown.map((item) => (
                            <div key={item.name} className="relative group/sub">
                              {'subDropdown' in item ? (
                                <div className="flex items-center justify-between px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer border-b border-gray-50 last:border-0">
                                  <span className="font-semibold text-sm">{item.name}</span>
                                  <ChevronDown size={14} className="-rotate-90" />

                                  {/* Sub-dropdown */}
                                  <div className="absolute left-full top-0 ml-0.5 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50">
                                    <div className="bg-white shadow-xl border border-gray-100 rounded-md py-2 min-w-[180px]">
                                      {item.subDropdown?.map((subItem) => (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary font-semibold text-sm transition-colors border-b border-gray-50 last:border-0"
                                        >
                                          {subItem.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  href={item.href}
                                  className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary font-semibold text-sm transition-colors border-b border-gray-50 last:border-0"
                                >
                                  {item.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`font-bold text-sm tracking-wide transition-colors py-4 block whitespace-nowrap ${link.name === 'WORK ABROAD'
                        ? 'text-red-600 animate-pulse scale-105 transition-transform duration-500'
                        : link.name === 'CONTACT US'
                          ? 'text-slate-700 hover:text-primary font-black'
                          : 'text-gray-700 hover:text-primary'
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Actions: Search, Divider, Slanted Apply Now */}
            <div className="flex items-stretch self-stretch">
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center justify-center px-4 text-gray-700 hover:text-primary cursor-pointer transition-colors border-0 bg-transparent outline-none focus:text-primary"
                aria-label="Search"
              >
                <Search size={20} className="stroke-[2.5]" />
              </button>

              {/* Slanted Divider */}
              <div className="flex items-center">
                <div className="w-[1.5px] h-6 bg-gray-300 rotate-[15deg] hidden lg:block mx-2"></div>
              </div>

              {/* Slanted Apply Now Button */}
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-lead-popup'))}
                className="bg-primary text-white pl-8 pr-6 font-black text-sm hover:bg-primary-dark transition-all active:scale-95 whitespace-nowrap animate-zoom-pulse flex items-center gap-2 select-none"
                style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
              >
                <FileText size={16} className="stroke-[2.5]" />
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Integrated Header (lg:hidden) */}
      <div className="lg:hidden flex flex-col w-full">
        {/* Mobile Top Strip (Clock, Helpline, Social Icons) */}
        <div className={`bg-white border-b flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isScrolled
          ? 'max-h-0 opacity-0 py-0 border-gray-100/0 pointer-events-none'
          : 'max-h-[100px] opacity-100'
          }`}>
          {/* Top Line: Clock + PARTNER WITH US + Phone Icon + Phone Number */}
          <div className="flex items-center justify-center gap-4 text-xs font-bold text-primary flex-wrap pt-2 pb-1 px-4">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span>PARTNER WITH US</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-primary fill-primary/10" />
              <a href="tel:+919070107030" className="hover:underline font-extrabold">+91 90701 07030</a>
            </div>
          </div>

          {/* Center-aligned Social media Icons */}
          <div className="flex items-center justify-center gap-4 pb-2 text-primary">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-all duration-200"
                title={social.name}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Main Header */}
        <div className={`flex items-center justify-between px-4 bg-white transition-all duration-300 ease-in-out border-b-2 border-primary ${isScrolled ? 'py-1' : 'py-2'
          }`}>
          <Link href="/" className="flex items-center">
            <Image
              src="/medverz.png"
              alt="Medverz logo"
              width={180}
              height={180}
              style={{ width: 'auto' }}
              className={`w-auto object-contain transition-all duration-300 ease-in-out ${isScrolled ? 'h-16' : 'h-22'
                }`}
              priority
            />
          </Link>

          <div className="flex items-center gap-2">
            {mounted && (
              <>
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-700 p-2 hover:text-primary transition-colors cursor-pointer flex items-center justify-center"
                  aria-label="Search"
                >
                  <Search size={22} className="stroke-[2]" />
                </button>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-lead-popup'))}
                  className="bg-primary text-white px-4 py-2 rounded-md text-xs font-bold transition-all active:scale-95 shadow-sm"
                >
                  Apply Now
                </button>
              </>
            )}
            <button
              className="text-gray-700 p-1 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={28} className="stroke-[1.5]" />}
            </button>
          </div>
        </div>

        {/* Mobile Latest Updates Marquee */}
        <div className={`bg-white border-b border-gray-100 px-4 py-1.5 flex items-center gap-3 overflow-hidden transition-all duration-300 ease-in-out ${isScrolled
          ? 'max-h-0 opacity-0 py-0 border-gray-100/0 pointer-events-none'
          : 'max-h-[45px] opacity-100'
          }`}>
          <div className="bg-primary text-white text-[9px] font-black px-2 py-1 rounded shrink-0 flex items-center tracking-wider">
            <span className="relative flex h-1.5 w-1.5 mr-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
            </span>
            LATEST UPDATES
          </div>
          <Link href="/gallery/photos" className="flex-grow overflow-hidden relative min-w-0 hover:opacity-80 transition-opacity">
            <div className="flex whitespace-nowrap animate-marquee">
              <div className="flex items-center gap-6 px-2 shrink-0">
                <span className="text-[11px] font-bold tracking-wide text-primary">
                  {marqueeText}
                </span>
              </div>
              <div className="flex items-center gap-6 px-2 shrink-0">
                <span className="text-[11px] font-bold tracking-wide text-primary">
                  {marqueeText}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl lg:hidden transition-all duration-300 z-50 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                {link.dropdown ? (
                  <div className="flex flex-col">
                    <div
                      className="flex items-center justify-between py-3 px-2 text-gray-700 hover:text-primary font-bold cursor-pointer transition-colors"
                      onClick={() => toggleDropdown(link.name)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={18} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </div>
                    {activeDropdown === link.name && (
                      <div className="bg-gray-50 rounded-lg ml-2 mb-2">
                        {link.dropdown.map((item) => (
                          <div key={item.name} className="flex flex-col">
                            {'subDropdown' in item ? (
                              <div className="flex flex-col">
                                <div
                                  className="flex items-center justify-between py-2.5 px-4 text-gray-600 font-semibold text-sm cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleDropdown(`${link.name}-${item.name}`);
                                  }}
                                >
                                  <span>{item.name}</span>
                                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === `${link.name}-${item.name}` ? 'rotate-180' : ''}`} />
                                </div>
                                {activeDropdown === `${link.name}-${item.name}` && (
                                  <div className="bg-gray-100/50 ml-4 rounded-md mb-1">
                                    {item.subDropdown?.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="block py-2 px-4 text-gray-500 font-medium text-xs hover:text-primary transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                href={item.href}
                                className="block py-2.5 px-4 text-gray-600 font-semibold text-sm hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`py-3 px-2 font-bold transition-colors ${link.name === 'WORK ABROAD'
                      ? 'text-red-600 animate-pulse'
                      : 'text-gray-700 hover:text-primary'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Social Media Links in Mobile Menu Drawer */}
            <div className="flex items-center justify-center gap-4 py-4 border-t border-gray-100 mt-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark p-2 transition-colors"
                >
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                window.dispatchEvent(new CustomEvent('open-lead-popup'));
              }}
              className="bg-primary text-white px-6 py-3.5 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg animate-zoom-pulse"
              suppressHydrationWarning
            >
              APPLY NOW
            </button>
          </div>
        </div>
      )}

      {/* Search Overlay Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-16 md:pt-28 px-4 animate-fade-in">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery('');
            }}
          />

          {/* Modal Container */}
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative z-10 animate-slide-down flex flex-col max-h-[80vh] md:max-h-[85vh]">
            {/* Input Bar */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-100">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search country or university..."
                className="w-full text-slate-800 placeholder-slate-400 bg-transparent outline-none text-base md:text-lg font-medium"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-slate-400 hover:text-slate-600 p-1 transition-colors"
                  aria-label="Clear search query"
                >
                  <X size={16} />
                </button>
              )}
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="text-slate-500 hover:text-slate-800 text-xs md:text-sm font-semibold px-2.5 py-1 bg-slate-50 hover:bg-slate-100 rounded-md transition-colors"
              >
                Close
              </button>
            </div>

            {/* Results Area */}
            <div className="flex-1 overflow-y-auto min-h-0 select-none">
              {searchQuery.trim() === '' ? (
                /* Empty state / Popular links */
                <div className="p-5 flex flex-col gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      <Sparkles size={14} className="text-yellow-500 fill-yellow-500/10 animate-pulse" />
                      Popular Countries
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {popularSuggestions.map((country) => (
                        <Link
                          key={country.id}
                          href={`/mbbs/${country.slug}`}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="px-3.5 py-2 bg-slate-50 hover:bg-primary-light text-slate-700 hover:text-primary rounded-xl text-sm font-semibold transition-all border border-slate-100 hover:border-primary/20 flex items-center gap-2"
                        >
                          {country.flag ? (
                            <Image
                              src={country.flag}
                              alt={country.name}
                              width={18}
                              height={12}
                              className="rounded-sm object-cover"
                            />
                          ) : (
                            <Globe size={14} className="text-slate-400" />
                          )}
                          {country.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-50 pt-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      <GraduationCap size={14} className="text-primary" />
                      Featured Universities
                    </div>
                    <div className="flex flex-col gap-1">
                      {mbbsData
                        .flatMap((c) => c.universities.slice(0, 1).map((u) => ({ ...u, countrySlug: c.slug })))
                        .slice(0, 4)
                        .map((uni) => (
                          <Link
                            key={uni.id}
                            href={`/mbbs/${uni.countrySlug}/${uni.slug}`}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery('');
                            }}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 group transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:text-primary group-hover:bg-primary-light transition-colors">
                              <GraduationCap size={16} />
                            </div>
                            <div className="flex-grow min-w-0">
                              <div className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors truncate">
                                {uni.name}
                              </div>
                              <div className="text-xs text-slate-400 flex items-center gap-1">
                                <MapPin size={10} />
                                {uni.location}
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              ) : suggestions.length === 0 ? (
                /* No suggestions found */
                <div className="p-8 text-center flex flex-col items-center justify-center gap-3 text-slate-400">
                  <Globe size={40} className="stroke-[1.5] text-slate-300" />
                  <div>
                    <p className="font-semibold text-slate-600">No results found for "{searchQuery}"</p>
                    <p className="text-xs text-slate-400 mt-1">Try checking your spelling or search for another country or university</p>
                  </div>
                </div>
              ) : (
                /* Grouped matching results */
                <div className="p-3 flex flex-col gap-4">
                  {/* Matching Countries section */}
                  {filteredCountries.length > 0 && (
                    <div>
                      <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Globe size={13} className="text-primary" />
                        Countries ({filteredCountries.length})
                      </div>
                      <div className="flex flex-col gap-1 mt-1">
                        {filteredCountries.map((country, idx) => {
                          const suggestionIndex = idx;
                          const isActive = activeSuggestionIndex === suggestionIndex;
                          return (
                            <Link
                              key={country.id}
                              href={`/mbbs/${country.slug}`}
                              onClick={() => {
                                setIsSearchOpen(false);
                                setSearchQuery('');
                              }}
                              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 ${
                                isActive
                                  ? 'bg-primary text-white'
                                  : 'hover:bg-slate-50 text-slate-700'
                              }`}
                              onMouseEnter={() => setActiveSuggestionIndex(suggestionIndex)}
                            >
                              {country.flag ? (
                                <div className="shrink-0 relative w-6 h-4 overflow-hidden rounded-sm border border-slate-200/50">
                                  <Image
                                    src={country.flag}
                                    alt={country.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ) : (
                                <Globe size={18} className={isActive ? 'text-white' : 'text-slate-400'} />
                              )}
                              <span className="font-semibold text-sm leading-none">{country.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Matching Universities section */}
                  {filteredUniversities.length > 0 && (
                    <div className={filteredCountries.length > 0 ? 'border-t border-slate-50 pt-3' : ''}>
                      <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <GraduationCap size={13} className="text-primary" />
                        Universities ({filteredUniversities.length})
                      </div>
                      <div className="flex flex-col gap-1 mt-1">
                        {filteredUniversities.map((uni, idx) => {
                          const suggestionIndex = filteredCountries.length + idx;
                          const isActive = activeSuggestionIndex === suggestionIndex;
                          return (
                            <Link
                              key={uni.id}
                              href={`/mbbs/${uni.countrySlug}/${uni.slug}`}
                              onClick={() => {
                                setIsSearchOpen(false);
                                setSearchQuery('');
                              }}
                              className={`flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 ${
                                isActive
                                  ? 'bg-primary text-white'
                                  : 'hover:bg-slate-50 text-slate-700'
                              }`}
                              onMouseEnter={() => setActiveSuggestionIndex(suggestionIndex)}
                            >
                              <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center transition-colors ${
                                isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                              }`}>
                                <GraduationCap size={16} />
                              </div>
                              <div className="flex-grow min-w-0">
                                <div className={`text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-slate-700'}`}>
                                  {uni.name}
                                </div>
                                <div className={`text-xs flex items-center gap-1 mt-0.5 ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                                  <MapPin size={10} className="shrink-0" />
                                  <span className="truncate">{uni.location}</span>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
