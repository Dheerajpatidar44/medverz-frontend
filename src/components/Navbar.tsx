'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

import { mbbsData } from '@/data/mbbsData';

const Navbar = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMounted(true);
  }, []);

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
    { name: 'ABOUT US', href: '/about' },
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
    { name: 'TEAM', href: '/team' },
    { name: 'WORK ABROAD', href: '/work-abroad' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <nav className="bg-white py-3 px-6 md:px-12 flex items-center justify-between border-b border-gray-100 sticky top-0 z-[100]">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src={pathname === '/work-abroad' ? '/medverz.png' : '/medverz.png'} // TODO: Replace the first /medverz.png with work abroad logo path when provided
            alt="Medverz logo" 
            width={180} 
            height={50} 
            className="h-18 md:h-22 w-auto object-contain"
            priority
          />
        </Link>
      </div>
      
      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-8">
        {navLinks.map((link) => (
          <div key={link.name} className="relative group">
            {link.dropdown ? (
              <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-primary font-black text-sm transition-colors py-4">
                <span>{link.name}</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                
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
                className="text-gray-700 hover:text-primary font-black text-sm transition-colors py-4 block"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </div>
      
      <div className="hidden lg:block">
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('open-lead-popup'))}
          className="bg-primary text-white px-7 py-2.5 rounded-full font-bold hover:bg-primary-dark transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          APPLY NOW
        </button>
      </div>

      {/* Mobile Menu Toggle & Apply Button */}
      <div className="lg:hidden flex items-center gap-3">
        {mounted && (
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-lead-popup'))}
            className="bg-primary text-white px-4 py-2 rounded-full text-[10px] font-bold shadow-md active:scale-95"
          >
            APPLY NOW
          </button>
        )}
        <button 
          className="text-primary p-2 hover:bg-primary/5 rounded-md transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl lg:hidden transition-all duration-300 z-50 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                {link.dropdown ? (
                  <>
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
                              <>
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
                              </>
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
                  </>
                ) : (
                  <Link 
                    href={link.href} 
                    className="py-3 px-2 text-gray-700 hover:text-primary font-bold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                window.dispatchEvent(new CustomEvent('open-lead-popup'));
              }}
              className="bg-primary text-white px-6 py-3.5 rounded-full font-bold hover:bg-primary-dark transition-all mt-4 shadow-lg"
              suppressHydrationWarning
            >
              APPLY NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
