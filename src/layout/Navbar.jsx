import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronDown, Cloud, MonitorSmartphone, Monitor, Blocks, Server, BookOpen, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsProductsOpen(false); // Close dropdown if open
      setIsMobileMenuOpen(false); // Close mobile menu if open
    }
  };
  const dropdownRef = useRef();
  const mobileMenuRef = useRef();
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

  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power4.out',
        display: 'block'
      });
      gsap.fromTo('.mobile-nav-item',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        duration: 0.4,
        ease: 'power4.in',
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: 'none' });
        }
      });
    }
  }, { dependencies: [isMobileMenuOpen], scope: navContainerRef });

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
            <div className="flex items-center space-x-6 lg:space-x-8">
              
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="nav-elem flex items-center text-gray-800 font-semibold text-[15px] hover:text-[#5c3cdd] transition-colors py-2 group cursor-pointer">
                Home
              </a>
              
              <div className="relative group">
                <button 
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="nav-elem flex items-center gap-1 text-gray-800 font-semibold text-[15px] hover:text-[#5c3cdd] transition-colors py-2 cursor-pointer"
                >
                  Products <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <div 
                  ref={dropdownRef}
                  className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden hidden"
                >
                  <div className="p-2">
                    <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="dropdown-item flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <Blocks className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">Features</div>
                        <div className="text-xs text-gray-500">Core capabilities</div>
                      </div>
                    </a>
                    <a href="#modules" onClick={(e) => handleScroll(e, 'modules')} className="dropdown-item flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                        <Server className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">Modules</div>
                        <div className="text-xs text-gray-500">Industry solutions</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="nav-elem flex items-center text-gray-800 font-semibold text-[15px] hover:text-[#5c3cdd] transition-colors py-2 group cursor-pointer">
                Pricing
              </a>

              <a href="#faqs" onClick={(e) => handleScroll(e, 'faqs')} className="nav-elem flex items-center text-gray-800 font-semibold text-[15px] hover:text-[#5c3cdd] transition-colors py-2 group cursor-pointer">
                FAQs
              </a>

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
          <div className="md:hidden nav-elem flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-[#5c3cdd] p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-md hidden md:hidden"
        style={{ transform: 'translateX(100%)' }}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-indigo-800" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
              </svg>
              <span className="text-xl font-bold text-gray-800">Schoolify</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="mobile-nav-item text-lg font-semibold text-gray-800 py-2 border-b border-gray-100">Home</a>
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="mobile-nav-item text-lg font-semibold text-gray-800 py-2 border-b border-gray-100">Features</a>
            <a href="#modules" onClick={(e) => handleScroll(e, 'modules')} className="mobile-nav-item text-lg font-semibold text-gray-800 py-2 border-b border-gray-100">Modules</a>
            <a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="mobile-nav-item text-lg font-semibold text-gray-800 py-2 border-b border-gray-100">Pricing</a>
            <a href="#faqs" onClick={(e) => handleScroll(e, 'faqs')} className="mobile-nav-item text-lg font-semibold text-gray-800 py-2 border-b border-gray-100">FAQs</a>
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <button className="mobile-nav-item w-full py-3 rounded-lg border border-[#d6cbf5] text-[#5c3cdd] font-semibold bg-[#f5f3fc]">
              Login
            </button>
            <button className="mobile-nav-item w-full py-3 rounded-lg bg-[#614bf2] text-white font-semibold">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
