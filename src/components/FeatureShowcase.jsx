import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Bell, Settings, MessageSquare, Briefcase, CreditCard, Box, User, CheckCircle2, TrendingUp, Sparkles, Code2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeatureShowcase = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate Left Side Gradient Ring and Image
    tl.from('.feature-ring', { scale: 0.5, opacity: 0, duration: 1, ease: 'back.out(1.5)' })
      .from('.feature-image', { y: 100, scale: 0.8, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6');

    // Make the ring spin slowly infinitely
    gsap.to('.feature-ring', { rotation: 360, duration: 30, repeat: -1, ease: 'linear' });

    // Animate Right Side Title
    tl.from('.feature-title', { y: 30, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4');

    // Animate Dashboard Elements (Staggered)
    const dbTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.feature-dashboard',
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    dbTl.from('.db-base', { y: 40, opacity: 0, duration: 0.6, ease: 'power3.out' })
        .from('.db-card-1', { x: -30, opacity: 0, duration: 0.5, ease: 'back.out(1.5)' }, '-=0.2') // Purple Students Card
        .from('.db-top-stats', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.3')
        .from('.db-charts', { scale: 0.9, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'back.out(1.2)' }, '-=0.2')
        .from('.db-mobile-view', { x: 30, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.4')
        .from('.db-badges .db-badge', { y: 20, scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(2)' }, '-=0.2');

    // Add continuous float to the badges and purple card
    gsap.to('.db-card-1', { y: -8, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.db-badges .db-badge:nth-child(1)', { y: -5, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.2 });
    gsap.to('.db-badges .db-badge:nth-child(2)', { y: -6, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.7 });

  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative bg-white py-24 overflow-hidden border-t-2 border-gray-50"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* LEFT COLUMN: Graphic */}
        <div className="w-full lg:w-[45%] flex justify-center items-center relative min-h-[500px] lg:min-h-[600px]">
          
          {/* Gradient Ring Backdrop */}
          {/* In the screenshot it's a massive colorful 'O' shape. We use a border with conic-gradient or radial trick. */}
          <div className="feature-ring absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full border-[50px] sm:border-[70px] border-transparent left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform z-0 shadow-2xl"
               style={{
                 background: 'linear-gradient(white, white) padding-box, conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ef4444, #f59e0b, #3b82f6) border-box'
               }}>
          </div>

          {/* Jumping Graduate Image */}
          {/* Since our generated image is black/white on white background, multiple blend mode over the colorful ring creates a stunning artistic effect where the white becomes transparent but the dark suit stays dark. */}
          <div className="feature-image relative z-10 w-[110%] sm:w-[120%] h-auto flex justify-center items-center mix-blend-multiply will-change-transform">
            <img 
              src="/jumping_graduate.png" 
              alt="Professional Jumping" 
              className="w-full h-auto object-contain max-w-[500px]"
              style={{ filter: 'contrast(1.1) brightness(0.95)' }} // enhance the blacks
            />
          </div>

        </div>

        {/* RIGHT COLUMN: Content & Dashboard Mockup */}
        <div className="w-full lg:w-[55%] flex flex-col pt-8 lg:pt-0">
          
          {/* Title */}
          <h2 className="feature-title text-[28px] sm:text-[36px] md:text-[42px] leading-[1.15] text-gray-800 font-medium mb-12 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <span className="font-bold text-black">Schoolify</span> is the world's most powerful, easiest, and Customizable school management <span className="font-bold text-black">software.</span>
          </h2>

          {/* Dashboard Mockup Container */}
          <div className="feature-dashboard relative w-full max-w-[800px] mx-auto lg:mx-0 perspective-1000">
            
            <div className="flex gap-4 sm:gap-6 w-full relative z-10">
              
              {/* Main Dashboard Window */}
              <div className="db-base flex-1 bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col will-change-transform pb-4">
                
                {/* Dashboard Header */}
                <div className="flex justify-between items-center p-3 border-b border-gray-100 bg-gray-50/50">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <span className="ml-2 font-bold text-indigo-700 text-xs tracking-tight">Schoolify</span>
                  </div>
                  <div className="flex gap-3 text-gray-300">
                    <Search className="w-3.5 h-3.5" />
                    <MessageSquare className="w-3.5 h-3.5" />
                    <Bell className="w-3.5 h-3.5" />
                    <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col gap-4 relative">
                  
                  {/* Floating Purple Total Students Card */}
                  <div className="db-card-1 absolute -left-4 sm:-left-8 top-16 w-48 sm:w-56 bg-indigo-600 rounded-xl shadow-xl shadow-indigo-600/30 p-4 z-20 will-change-transform">
                    <p className="text-indigo-100 text-xs font-medium mb-3">Total Students</p>
                    <div className="flex justify-between items-end">
                      <div className="flex flex-col gap-1 text-white">
                        <User className="w-5 h-5 opacity-80" />
                        <span className="text-[10px] text-indigo-200 mt-2">New Admissions</span>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-white leading-none">1,740</p>
                        <p className="text-[10px] text-white font-medium mt-1 uppercase">34</p>
                      </div>
                    </div>
                    {/* Tiny Progress Lines */}
                    <div className="mt-4 pt-4 border-t border-indigo-500/50">
                      <div className="w-full h-1 bg-indigo-500 rounded-full mb-1"><div className="w-[70%] h-full bg-white rounded-full"></div></div>
                      <div className="w-[80%] h-1 bg-indigo-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Top Stats Row (Right aligned to make room for floating card) */}
                  <div className="flex gap-3 ml-auto w-[65%] sm:w-[70%]">
                    {/* Total Employees */}
                    <div className="db-top-stats flex-1 border border-gray-100 rounded-lg p-2.5 bg-white">
                      <p className="text-[10px] text-gray-400 font-medium">Total Employees</p>
                      <div className="flex justify-between items-end mt-1">
                        <Briefcase className="w-4 h-4 text-gray-300" />
                        <span className="text-lg font-bold text-gray-700 leading-none">38</span>
                      </div>
                    </div>
                    {/* Revenue */}
                    <div className="db-top-stats flex-1 border border-gray-100 rounded-lg p-2.5 bg-white">
                       <p className="text-[10px] text-gray-400 font-medium">Revenue</p>
                       <div className="flex justify-between items-end mt-1">
                         <span className="text-xs text-green-400 font-bold">$</span>
                         <span className="text-lg font-bold text-gray-700 leading-none">136,300</span>
                       </div>
                    </div>
                    {/* Profit */}
                    <div className="db-top-stats flex-1 border border-gray-100 rounded-lg p-2.5 bg-white hidden sm:block">
                       <p className="text-[10px] text-gray-400 font-medium">Profit</p>
                       <div className="flex justify-between items-end mt-1">
                         <span className="text-xs text-indigo-400 font-bold">$</span>
                         <span className="text-lg font-bold text-gray-700 leading-none">59,882</span>
                       </div>
                    </div>
                  </div>

                  {/* Main Charts Area */}
                  <div className="flex gap-4 mt-6 h-40">
                    
                    {/* Line Chart Area */}
                    <div className="db-charts flex-[2] border border-gray-100 rounded-xl bg-white p-3 relative flex items-end ml-10 sm:ml-0">
                       {/* Floating Income Bubble */}
                       <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-sm rounded-full px-3 py-1 text-[9px] text-center z-10 text-indigo-600 font-bold">
                         Income<br/><span className="text-gray-900 text-xs">$25,000</span>
                       </div>
                       {/* Curvy SVG Line Chart */}
                       <svg viewBox="0 0 200 80" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                         <path d="M 0 70 Q 20 20, 40 50 T 80 40 T 130 60 T 200 30" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                         {/* Plot Points */}
                         <circle cx="40" cy="50" r="3" fill="white" stroke="#4f46e5" strokeWidth="2"/>
                         <circle cx="80" cy="40" r="3" fill="white" stroke="#4f46e5" strokeWidth="2"/>
                         <circle cx="130" cy="60" r="3" fill="white" stroke="#4f46e5" strokeWidth="2"/>
                         <circle cx="200" cy="30" r="3" fill="white" stroke="#4f46e5" strokeWidth="2"/>
                       </svg>
                    </div>

                    {/* Donut & Bar Charts Area */}
                    <div className="flex-1 flex flex-col gap-3">
                      {/* Donut Chart */}
                      <div className="db-charts flex-1 border border-gray-100 rounded-lg p-3 bg-white flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-[6px] border-indigo-100 relative">
                          {/* CSS Conic Gradient for Donut representing data */}
                          <div className="absolute inset-[-6px] rounded-full border-[6px] border-indigo-600" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
                        </div>
                      </div>
                      {/* Bar Chart */}
                      <div className="db-charts flex-1 border border-gray-100 rounded-lg p-3 bg-white flex flex-col justify-center">
                         <div className="flex justify-between text-[8px] font-bold text-gray-500 mb-1">
                           <span>Target</span>
                           <span className="text-indigo-600">75%</span>
                         </div>
                         <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden relative">
                           <div className="h-full bg-indigo-600 w-[75%] rounded-full relative">
                             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-indigo-600 shadow-sm translate-x-2"></div>
                           </div>
                         </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Mobile View Mockup (Right Sidebar style) */}
              <div className="db-mobile-view hidden sm:flex w-40 bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 flex-col overflow-hidden will-change-transform">
                 <div className="h-8 border-b border-gray-100 flex items-center justify-between px-3 bg-gray-50/50">
                    <span className="font-bold text-indigo-700 text-[9px] tracking-tight">Schoolify</span>
                    <div className="flex gap-1">
                      <Search className="w-2.5 h-2.5 text-gray-300" />
                      <Bell className="w-2.5 h-2.5 text-gray-300" />
                    </div>
                 </div>
                 <div className="p-3 flex-1 flex flex-col gap-3">
                   {/* Profile Header */}
                   <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
                     <div className="w-6 h-6 rounded-full bg-blue-100 shrink-0 border border-blue-200"></div>
                     <div className="flex flex-col gap-1 w-full relative">
                       <div className="w-full h-1 bg-gray-200 rounded"></div>
                       <div className="w-2/3 h-1 bg-gray-100 rounded"></div>
                       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-[6px] font-bold">Logo</div>
                     </div>
                   </div>
                   {/* Tiny Circular charts */}
                   <div className="flex justify-between px-1">
                     <div className="w-6 h-6 rounded-full border-[3px] border-indigo-600/20 relative">
                       <div className="absolute inset-[-3px] border-[3px] border-indigo-600 rounded-full" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}></div>
                     </div>
                     <div className="w-6 h-6 rounded-full border-[3px] border-blue-400/20 relative">
                       <span className="absolute inset-0 flex items-center justify-center text-[5px] text-gray-500 font-bold leading-none scale-75">67%</span>
                       <div className="absolute inset-[-3px] border-[3px] border-blue-400 rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
                     </div>
                     <div className="w-6 h-6 rounded-full border-[3px] border-purple-400/20 relative">
                       <span className="absolute inset-0 flex items-center justify-center text-[5px] text-gray-500 font-bold leading-none scale-75">56%</span>
                       <div className="absolute inset-[-3px] border-[3px] border-purple-400 rounded-full" style={{ clipPath: 'polygon(0 0, 70% 0, 70% 100%, 0 100%)' }}></div>
                     </div>
                   </div>
                   {/* List lines */}
                   <div className="flex gap-2">
                     <div className="flex-1 h-4 border border-gray-100 rounded-sm"></div>
                     <div className="flex-1 h-4 border border-gray-100 rounded-sm bg-gray-50"></div>
                     <div className="flex-1 h-4 border border-gray-100 rounded-sm"></div>
                   </div>
                   <div className="flex-1 border border-gray-100 rounded-lg p-2 mt-1 space-y-2">
                     <div className="flex items-center gap-2"><div className="w-6 h-1 bg-indigo-600 rounded"></div><div className="w-1/2 h-0.5 bg-gray-200"></div></div>
                     <div className="flex items-center gap-2"><div className="w-8 h-1 bg-indigo-600 rounded"></div><div className="w-1/3 h-0.5 bg-gray-200"></div></div>
                     <div className="flex items-center gap-2"><div className="w-4 h-1 bg-indigo-600 rounded"></div><div className="w-2/3 h-0.5 bg-gray-200"></div></div>
                   </div>
                 </div>
              </div>

            </div>

            {/* Pill Badges / Decoratives below Dashboard */}
            <div className="db-badges flex flex-wrap gap-4 mt-8 ml-6 relative z-0">
              <div className="db-badge transform hover:-translate-y-1 will-change-transform">
                <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100/50 rounded-full px-5 py-2.5 shadow-sm text-indigo-700 font-semibold text-xs md:text-sm">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  Best UI/UX Designed By HCI Experts
                </div>
              </div>
              
              <div className="db-badge transform hover:-translate-y-1 will-change-transform">
                <div className="inline-flex items-center gap-2 bg-blue-50/80 border border-blue-100/50 rounded-full px-5 py-2.5 shadow-sm text-blue-700 font-semibold text-xs md:text-sm">
                  <Code2 className="w-4 h-4 text-blue-500" />
                  Most Customizable Software
                </div>
              </div>
            </div>

            {/* Accent Circle (Robot Logo in screenshot) */}
            <div className="absolute -bottom-6 -right-6 w-14 h-14 bg-[#5b3af0] rounded-full shadow-xl shadow-indigo-500/40 flex items-center justify-center z-30">
              <Settings className="w-6 h-6 text-white" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white -mt-1 -mr-1"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
