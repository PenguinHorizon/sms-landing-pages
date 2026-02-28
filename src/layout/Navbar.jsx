import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronDown, Cloud, MonitorSmartphone, Monitor, Blocks, Server, BookOpen, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef();
  const navContainerRef = useRef();

  useGSAP(() => {
    if (isProductsOpen) {
      gsap.to(dropdownRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power3.out',
        display: 'block'
      });
      // Stagger animate the items inside
      gsap.fromTo('.dropdown-item', 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: 'power2.out', delay: 0.1 }
      );
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -10,
        scale: 0.98,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(dropdownRef.current, { display: 'none' });
        }
      });
    }
  }, { dependencies: [isProductsOpen], scope: navContainerRef });

  // Entry animation for navbar
  useGSAP(() => {
    gsap.from('.nav-elem', {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.2
    });
  }, { scope: navContainerRef });

  const renderBadge = (type) => {
    const isFree = type === 'Free';
    return (
      <span className={`ml-3 text-xs md:text-[10px] font-bold px-2 py-0.5 rounded ${isFree ? 'bg-blue-600/90 text-white' : 'bg-blue-100/80 text-blue-800 border border-blue-200'} `}>
        {type}
      </span>
    );
  };

  return (
    <nav ref={navContainerRef} className="fixed top-0 left-0 right-0 z-50 bg-[#fdfcfb] border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <div className="nav-elem flex-shrink-0 flex items-center cursor-pointer">
             <div className="flex items-center gap-2">
                {/* SVG placeholder for eSkooly logo */}
                <svg className="w-8 h-8 text-indigo-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                </svg>
                <span className="text-2xl font-bold text-gray-800 tracking-tight">
                  School<span className="text-indigo-600">ify</span>
                </span>
             </div>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              
              {/* Products Dropdown Trigger */}
              <div 
                className="nav-elem relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button className="flex items-center text-[#5c3cdd] font-semibold text-[15px] hover:text-[#452ab5] transition-colors py-2 group">
                  Products
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                  {/* Decorative Circle from screenshot */}
                  <span className="absolute -left-2 w-8 h-8 border border-gray-300 rounded-full opacity-60 -z-10 bg-transparent group-hover:border-indigo-300 transition-colors"></span>
                </button>

                {/* Mega Dropdown */}
                <div 
                  ref={dropdownRef}
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 p-6 opacity-0 hidden"
                >
                  <div className="flex gap-8">
                    {/* Column 1: Cloud Solutions */}
                    <div className="flex-1">
                      <h3 className="text-gray-500 font-semibold mb-6 flex items-center">
                         Cloud Solutions
                      </h3>
                      <div className="space-y-6">
                        <a href="#" className="dropdown-item block group">
                          <div className="flex items-start">
                            <Cloud className="w-5 h-5 mt-0.5 mr-3 text-gray-700 group-hover:text-blue-600 transition-colors" />
                            <div>
                              <div className="flex items-center">
                                <span className="font-bold text-gray-800 text-[15px] group-hover:text-blue-600 transition-colors">Schoolify Basic</span>
                                {renderBadge('Free')}
                              </div>
                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Free online school management software for schools, colleges, and institutes.</p>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="dropdown-item block group">
                          <div className="flex items-start">
                            <MonitorSmartphone className="w-5 h-5 mt-0.5 mr-3 text-gray-700 group-hover:text-blue-600 transition-colors" />
                            <div>
                              <div className="flex items-center">
                                <span className="font-bold text-gray-800 text-[15px] group-hover:text-blue-600 transition-colors">Mobile Apps</span>
                                {renderBadge('Free')}
                              </div>
                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Android and iOS apps for students, teachers, and parents.</p>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="dropdown-item block group">
                          <div className="flex items-start">
                            <Monitor className="w-5 h-5 mt-0.5 mr-3 text-gray-700 group-hover:text-blue-600 transition-colors" />
                            <div>
                              <div className="flex items-center">
                                <span className="font-bold text-gray-800 text-[15px] group-hover:text-blue-600 transition-colors">Schoolify Desktop</span>
                                {renderBadge('Paid')}
                              </div>
                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Upgraded full-featured version with desktop access for Windows, macOS, and Linux.</p>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="dropdown-item block group">
                          <div className="flex items-start">
                            <Blocks className="w-5 h-5 mt-0.5 mr-3 text-gray-700 group-hover:text-blue-600 transition-colors" />
                            <div>
                              <div className="flex items-center">
                                <span className="font-bold text-gray-800 text-[15px] group-hover:text-blue-600 transition-colors">Schoolify Integrations</span>
                                {renderBadge('Free')}
                              </div>
                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Connect Schoolify with SMS gateways, WhatsApp APIs, and other tools.</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Column 2: Self Hosted */}
                    <div className="flex-1">
                      <h3 className="text-gray-500 font-semibold mb-6">Self Hosted</h3>
                      <div className="space-y-6">
                        <a href="#" className="dropdown-item block group">
                          <div className="flex items-start">
                            <Server className="w-5 h-5 mt-0.5 mr-3 text-gray-700 group-hover:text-blue-600 transition-colors" />
                            <div>
                              <div className="flex items-center">
                                <span className="font-bold text-gray-800 text-[15px] group-hover:text-blue-600 transition-colors">Schoolify Pro</span>
                                {renderBadge('Paid')}
                              </div>
                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Advanced and customizable self-hosted solution for large institutions.</p>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="dropdown-item block group">
                          <div className="flex items-start">
                            <BookOpen className="w-5 h-5 mt-0.5 mr-3 text-gray-700 group-hover:text-blue-600 transition-colors" />
                            <div>
                              <div className="flex items-center">
                                <span className="font-bold text-gray-800 text-[15px] group-hover:text-blue-600 transition-colors">Schoolify LMS</span>
                                {renderBadge('Paid')}
                              </div>
                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Complete Learning Management System for online courses and e-learning businesses.</p>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="dropdown-item block group">
                          <div className="flex items-start">
                            <ShieldCheck className="w-5 h-5 mt-0.5 mr-3 text-gray-700 group-hover:text-blue-600 transition-colors" />
                            <div>
                              <div className="flex items-center">
                                <span className="font-bold text-gray-800 text-[15px] group-hover:text-blue-600 transition-colors">Cloud Services</span>
                                {renderBadge('Paid')}
                              </div>
                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Optional secure cloud hosting and data storage for Schoolify systems.</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Links */}
              <button className="nav-elem flex items-center text-gray-800 font-semibold text-[15px] hover:text-[#5c3cdd] transition-colors py-2 group">
                Explore
                <ChevronDown className="ml-1 w-4 h-4 text-gray-400 group-hover:text-[#5c3cdd] transition-colors" />
              </button>
              <button className="nav-elem flex items-center text-gray-800 font-semibold text-[15px] hover:text-[#5c3cdd] transition-colors py-2 group">
                Support
                <ChevronDown className="ml-1 w-4 h-4 text-gray-400 group-hover:text-[#5c3cdd] transition-colors" />
              </button>
            </div>
          </div>

          {/* Right Buttons Container */}
          <div className="hidden md:flex flex-shrink-0 items-center gap-4">
             <button className="nav-elem flex items-center justify-center gap-2 px-6 py-2.5 rounded text-[#5c3cdd] font-semibold text-[15px] border border-[#d6cbf5] bg-[#f5f3fc] hover:bg-[#ebe5fa] transition-colors">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
               </svg>
               Login
             </button>
             <button className="nav-elem px-6 py-2.5 rounded bg-[#614bf2] text-white font-semibold text-[15px] shadow-[0_4px_14px_0_rgba(97,75,242,0.39)] hover:bg-[#4d38e0] hover:shadow-[0_6px_20px_rgba(97,75,242,0.23)] hover:-translate-y-[1px] transition-all duration-200">
               Sign Up Now
             </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden nav-elem">
            <button className="text-gray-800 hover:text-[#5c3cdd] p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
