import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Play, Briefcase, Users, TrendingUp, BookOpen, Pencil, Calculator, Microscope } from 'lucide-react';
import ConnectedSchools from '../components/ConnectedSchools';
import FeatureShowcase from '../components/FeatureShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import MobileShowcase from '../components/MobileShowcase';
import Modules from '../components/Modules';
import Pricing from '../components/Pricing';
import FAQS from '../components/FAQS';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const container = useRef();
  
  useGSAP(() => {
    // ... GSAP initialization remains unchanged
    const tl = gsap.timeline();
    
    // Left Content Animation
    tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' })
      .from('.hero-title-line', { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power4.out' }, '-=0.3')
      .from('.hero-desc', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .from('.hero-cta-group', { y: 20, opacity: 0, duration: 0.6, ease: 'back.out(1.5)' }, '-=0.4');

    // Right Graphic Animations
    const rightTl = gsap.timeline();
    
    // 1. Background Circle
    rightTl.from('.hero-bg-circle', { 
      scale: 0.8, 
      opacity: 0, 
      duration: 1.2, 
      ease: 'elastic.out(1, 0.7)',
      delay: 0.2
    })
    // 2. Main Image
    .from('.hero-main-img', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.8')
    // 3. Floating Cards & Decorative Items (staggered)
    .from('.hero-float-card, .hero-deco-item', {
      scale: 0.6,
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(1.5)'
    }, '-=0.5');

    // Continuous Floating Effects for Cards
    gsap.to('.hero-float-card-1', {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    gsap.to('.hero-float-card-2', {
      y: -10,
      x: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1
    });
    gsap.to('.hero-float-card-3', {
      y: -20,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.5
    });

    // Continuous Floating Effects for Decorative School Items
    gsap.to('.hero-deco-1', { y: -25, rotation: 10, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.2 });
    gsap.to('.hero-deco-2', { y: -20, rotation: -15, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.7 });
    gsap.to('.hero-deco-3', { y: -30, x: 10, rotation: 20, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.2 });
    gsap.to('.hero-deco-4', { y: -15, x: -10, rotation: -10, duration: 4.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.4 });

  }, { scope: container });

  return (
    <main className="pt-20" id="home" ref={container}>
      {/* PROFESSIONAL HERO SECTION */}
      <section className="relative overflow-hidden bg-[#2f2890] min-h-[90vh] flex items-center">
        
        {/* Deep Background Gradients & Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1b1766] via-[#2f2890] to-[#1e1a72]"></div>
          {/* Subtle Geometric Diagonal Lines */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(60deg, #ffffff 1px, transparent 1px), linear-gradient(-60deg, #ffffff 1px, transparent 1px)", backgroundSize: "100px 200px" }}></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:flex lg:items-center py-20 min-h-[90vh]">
          
          {/* --- DECORATIVE SCHOOL ELEMENTS (Whole Section) --- */}
          {/* Top Left - Book - Floating near the headline */}
          <div className="hero-deco-item hero-deco-1 absolute top-20 left-4 lg:left-10 z-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-4 shadow-2xl transform -rotate-12 backdrop-blur-md border border-white/20 will-change-transform opacity-60 lg:opacity-80 hidden md:block">
            <BookOpen className="w-8 h-8 text-white drop-shadow-md" />
          </div>
          
          {/* Bottom Left - Microscope - Floating near the CTA */}
          <div className="hero-deco-item hero-deco-3 absolute bottom-32 left-8 lg:left-20 z-0 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl p-4 shadow-2xl transform -rotate-6 backdrop-blur-md border border-white/20 will-change-transform opacity-60 lg:opacity-80 hidden md:block">
            <Microscope className="w-8 h-8 text-white drop-shadow-md" />
          </div>
          
          {/* Top Center - Pencil - Floating between text and image */}
          <div className="hero-deco-item hero-deco-2 absolute top-32 left-1/2 -translate-x-32 lg:-translate-x-12 z-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-full p-4 shadow-2xl transform rotate-12 backdrop-blur-md border border-white/20 will-change-transform opacity-50 lg:opacity-80 hidden md:block">
            <Pencil className="w-6 h-6 lg:w-7 lg:h-7 text-white drop-shadow-md" />
          </div>

          {/* Bottom Right - Calculator - Floating near the bottom of the image */}
          <div className="hero-deco-item hero-deco-4 absolute bottom-20 right-10 lg:right-24 z-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-4 shadow-2xl transform rotate-6 backdrop-blur-md border border-white/20 will-change-transform opacity-70 lg:opacity-90 hidden md:block">
            <Calculator className="w-8 h-8 text-white drop-shadow-md" />
          </div>

          {/* LEFT CONTENT */}
          <div className="flex-1 lg:pr-12 xl:pr-24 text-left z-20 relative">
            {/* Verified Badge */}
            <div className="hero-badge inline-flex items-center gap-2 mb-8 will-change-transform">
              <span className="text-white text-xl font-bold flex items-center">
                #1 <span className="text-[10px] uppercase font-medium text-gray-300 ml-1 leading-none text-left">Globally<br/>Ranked</span>
              </span>
              <span className="flex items-center text-blue-400 font-semibold gap-1 text-sm bg-blue-500/10 px-2 py-0.5 rounded ml-2">
                Verified <ShieldCheck className="w-3.5 h-3.5" />
              </span>
            </div>
            
            {/* Typography Matching Screenshot */}
            <h1 className="text-5xl md:text-[4.5rem] xl:text-[5.5rem] text-white leading-[1.1] mb-6 md:mb-8 tracking-tight font-light will-change-transform">
              <div className="hero-title-line">Free <span className="font-bold">Online</span> School</div>
              <div className="hero-title-line font-bold">Management</div>
              <div className="hero-title-line">Software</div>
            </h1>
            
            <p className="hero-desc text-base md:text-lg text-gray-300 mb-12 max-w-lg leading-relaxed will-change-transform font-light">
              You can now manage your school, college, or any educational institution seamlessly with Schoolify — completely <span className="text-white">free for life</span>, with no limitations.
            </p>
            
            {/* CTA Group */}
            <div className="hero-cta-group flex flex-wrap items-center gap-6 will-change-transform">
              <button className="rounded-full bg-[#7a55ed] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#6841db] transition-colors shadow-[0_0_20px_rgba(122,85,237,0.4)]">
                Get Started, <span className="text-gray-200 font-normal">It's Free</span>
              </button>
              
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-12 h-12 rounded-full border-2 border-indigo-400/30 flex items-center justify-center group-hover:border-indigo-400 transition-colors">
                  <Play className="w-4 h-4 text-white ml-1" fill="currentColor" />
                </div>
                <div className="text-xs text-gray-300">
                  <span className="block font-medium">Trusted by <span className="text-white font-bold">125,000+</span> schools</span>
                  <span className="block text-gray-400">Rated <span className="text-white">4.8</span> ★★★★★</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT GRAPHIC */}
          <div className="flex-1 hidden lg:block relative h-[600px] xl:h-[700px] mt-16 lg:mt-0 z-10 w-full flex items-center justify-center">
            
            <div className="relative w-[450px] h-[450px] xl:w-[550px] xl:h-[550px] mx-auto mt-12">
              {/* Circular Gradient Backdrop with clipping for image */}
              <div className="hero-bg-circle absolute inset-0 rounded-full bg-gradient-to-tr from-[#553cf0] via-[#8f4bf2] to-[#fd6b6a] shadow-[0_0_80px_rgba(85,60,240,0.5)] z-0 overflow-hidden will-change-transform flex items-end justify-center">
                {/* Main Graduates Image clipped by circle */}
                <div className="hero-main-img w-[125%] h-auto flex items-end justify-center z-10 will-change-transform pb-0">
                  <img src="/hero_students.png" alt="Professional Graduates" className="w-full h-auto object-cover transform translate-y-6" />
                </div>
              </div>

              {/* --- FLOATING UI CARDS --- */}
              {/* FLOATING UI CARD 1: Students */}
              <div className="hero-float-card hero-float-card-1 absolute top-10 -left-16 xl:-left-24 bg-[#ebebfa] rounded-xl p-4 shadow-xl z-20 w-56 hidden lg:flex items-center gap-4 will-change-transform transform -rotate-2">
                 <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600">
                   <Users className="w-5 h-5" fill="currentColor" />
                 </div>
                 <div>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Total Students</p>
                   <p className="text-xl font-black text-indigo-900 leading-none mt-1">1,365</p>
                   <p className="text-[9px] text-indigo-400 font-medium mt-1">NEW ENROLLMENTS <span className="text-indigo-700 font-bold">24</span></p>
                 </div>
              </div>

              {/* FLOATING UI CARD 2: Employees */}
              <div className="hero-float-card hero-float-card-2 absolute -top-8 -right-8 xl:-right-16 bg-white rounded-xl p-4 shadow-2xl z-20 w-48 border border-gray-100 will-change-transform transform rotate-3 hidden lg:block">
                 <div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center text-purple-600">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div className="text-right">
                         <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Total Employees</p>
                         <p className="text-xl font-black text-gray-900 leading-none">37</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] pt-2 border-t border-gray-100">
                      <span className="text-gray-500 font-medium">NEWLY HIRED</span>
                      <span className="font-bold text-gray-900">04</span>
                    </div>
                 </div>
              </div>

              {/* FLOATING UI CARD 3: Revenue */}
              <div className="hero-float-card hero-float-card-3 absolute bottom-10 -left-20 xl:-left-28 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-2xl z-20 w-64 border border-white/20 will-change-transform text-left hidden lg:block">
                 <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Revenue</p>
                 <p className="text-3xl font-black text-gray-900 mb-4">$2420.00</p>
                 {/* Waveform graphic placeholder */}
                 <div className="h-12 w-full bg-[#11162b] rounded-lg flex items-center justify-center relative overflow-hidden mb-3">
                   <svg viewBox="0 0 100 40" className="absolute w-full h-full text-blue-500" preserveAspectRatio="none">
                     <path d="M0 20 Q 10 0, 20 20 T 40 20 T 60 20 T 80 20 T 100 20 L 100 40 L 0 40 Z" fill="url(#gradient)" opacity="0.5"/>
                     <path d="M0 20 Q 15 5, 25 25 T 50 15 T 75 25 T 100 15" fill="none" stroke="currentColor" strokeWidth="2"/>
                     <defs>
                       <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stopColor="currentColor" stopOpacity="0.8"/>
                         <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
                       </linearGradient>
                     </defs>
                   </svg>
                 </div>
                 <div className="flex gap-4 text-[10px] font-semibold">
                   <span className="text-[#7a55ed]">Daily</span>
                   <span className="text-gray-400">Weekly</span>
                   <span className="text-gray-400">Monthly</span>
                 </div>
              </div>

              {/* Decorative Dollar Graphic */}
              <div className="hero-float-card absolute -bottom-5 -right-5 xl:-right-10 z-30 opacity-80 will-change-transform hidden lg:block">
                 <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="40" stroke="white" strokeWidth="2" strokeDasharray="4 4"/>
                    <path d="M60 30V90M45 45C45 45 65 35 65 55C65 75 45 65 45 85C45 105 55 90 55 90" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M40 80L80 40M80 40H60M80 40V60" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </div>
            </div>

          </div>


        </div>
      </section>
      
      {/* CONNECTED SCHOOLS COMPONENT */}
      <ConnectedSchools />

      {/* FEATURE SHOWCASE COMPONENT */}
      <div id="features"><FeatureShowcase /></div>

      {/* WHY CHOOSE US COMPONENT */}
      <WhyChooseUs />

      {/* MOBILE SHOWCASE COMPONENT */}
      <MobileShowcase />

      {/* MODULES GRID COMPONENT */}
      <div id="modules"><Modules /></div>

      {/* PRICING COMPONENT */}
      <div id="pricing"><Pricing /></div>

      {/* FAQS COMPONENT */}
      <div id="faqs"><FAQS /></div>
    </main>
  );
};

export default Home;
