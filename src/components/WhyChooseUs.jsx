import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Target, TrendingUp, Sparkles, Settings, MoreHorizontal, User, UserCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const container = useRef();
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        end: "bottom 10%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate Left Collage
    tl.from('.wcu-card-2', { x: 50, scale: 0.9, opacity: 0, duration: 0.8, ease: 'back.out(1.2)' })
      .from('.wcu-card-1', { y: -40, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .from('.wcu-card-3', { y: 50, scale: 0.8, opacity: 0, duration: 0.7, ease: 'back.out(1.5)' }, '-=0.3')
      .from('.wcu-card-4 > div', { x: 30, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.5');

    // Animate Right Content
    tl.from('.wcu-content > div, .wcu-content > h2', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.6')
      .from('.wcu-list-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' }, '-=0.4');

    // Continuous floating for premium feel
    gsap.to('.wcu-card-1', { y: -10, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.wcu-card-3', { y: -15, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 });
    gsap.to('.wcu-card-4 > div', { y: -5, duration: 2.5, repeat: -1, yoyo: true, stagger: 0.2, ease: 'sine.inOut', delay: 0.3 });
    gsap.to('.wcu-satisfaction-badge', { y: -8, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.8 });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Light Blue Container enclosing both columns */}
        <div className="w-full bg-indigo-50/60 rounded-[40px] flex flex-col lg:flex-row shadow-[inset_0_4px_20px_rgba(255,255,255,0.5)] border border-white/50 relative overflow-hidden">
          
          {/* LEFT SIDE: Collage Area */}
          <div className="w-full lg:w-[45%] xl:w-1/2 relative min-h-[600px] lg:h-[700px] p-4 flex justify-center items-center">
             
             {/* 1. White Analytics Card */}
             <div className="wcu-card-1 absolute top-12 left-6 sm:top-20 sm:left-20 lg:top-24 lg:left-6 xl:left-16 z-10 w-[240px] sm:w-[280px] bg-white text-left rounded-2xl p-5 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-gray-100 will-change-transform">
               <div className="flex items-center gap-3 pb-3 border-b border-gray-50">
                 <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0 flex items-center justify-center">
                   <User className="w-5 h-5 text-gray-500" />
                 </div>
                 <div className="flex-1 space-y-2 pt-0.5">
                   <div className="w-3/4 h-1.5 bg-gray-200 rounded-full"></div>
                   <div className="w-1/2 h-1.5 bg-gray-100 rounded-full"></div>
                 </div>
               </div>
               
               {/* Dark AI Toolbar floating on left edge */}
               <div className="absolute -left-6 top-16 w-12 bg-[#1f1f1f] rounded-xl py-3 flex flex-col items-center gap-4 shadow-xl border border-gray-800">
                 <Sparkles className="w-5 h-5 text-white" />
                 <div className="flex items-center justify-center w-full px-1">
                   <span className="text-white text-[8px] font-bold bg-[#5b3af0] px-1.5 py-1 rounded leading-none w-full text-center">Ai+</span>
                 </div>
                 <Settings className="w-5 h-5 text-gray-400" />
                 <MoreHorizontal className="w-5 h-5 text-gray-400" />
               </div>
               
               <div className="mt-6 flex gap-6 pl-4 justify-center">
                 {/* Blue Donut */}
                 <div className="w-14 h-14 rounded-full border-[4px] border-blue-50 relative shrink-0">
                   <div className="absolute inset-[-4px] border-[4px] border-blue-600 rounded-full" style={{ clipPath: 'polygon(0 0, 80% 0, 80% 100%, 0 100%)' }}></div>
                   <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-500">67%</span>
                 </div>
                 {/* Purple Donut */}
                 <div className="w-10 h-10 rounded-full border-[3px] border-indigo-50 relative self-end mb-1">
                   <div className="absolute inset-[-3px] border-[3px] border-indigo-400 rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
                   <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-gray-500">50%</span>
                 </div>
               </div>
               
               <div className="mt-8 flex flex-col pl-4">
                 <div className="w-full pt-5 border-t border-gray-50 flex flex-col gap-2 items-end">
                   <span className="text-[10px] font-bold text-indigo-600">75%</span>
                   <div className="w-full h-2 bg-indigo-50 rounded-full overflow-hidden">
                     <div className="w-[75%] h-full bg-indigo-600 rounded-full"></div>
                   </div>
                 </div>
               </div>
             </div>

             {/* 2. Purple Graduate Card */}
             <div className="wcu-card-2 absolute top-8 right-2 sm:top-12 sm:right-16 lg:top-16 lg:right-4 xl:right-12 z-0 w-[260px] h-[300px] sm:w-[320px] sm:h-[360px] bg-[#5b3af0] rounded-[2.5rem] shadow-2xl flex items-center justify-center will-change-transform pt-6 pb-0 overflow-visible">
               
               <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden flex items-end justify-center pb-0">
                 {/* Gradient Ring in background */}
                 <div className="absolute w-[85%] h-[75%] sm:w-[90%] sm:h-[80%] rounded-full border-[14px] sm:border-[18px] border-transparent top-1/2 -translate-y-[60%]"
                      style={{ background: 'linear-gradient(#5b3af0, #5b3af0) padding-box, conic-gradient(from 0deg, #f59e0b, #ef4444, #3b82f6, #8b5cf6, #f59e0b) border-box' }}>
                 </div>
                 
                 {/* Graduate Image with blend mode */}
                 <img 
                   src="/smiling_graduate.png" 
                   alt="Smiling Graduate" 
                   className="w-[130%] h-auto max-h-[115%] object-cover object-bottom mix-blend-multiply opacity-95 relative z-10 translate-y-3 sm:translate-y-4" 
                   style={{ filter: 'contrast(1.2)' }}
                 />
               </div>
               
               {/* Floating Satisfaction Badge */}
               <div className="wcu-satisfaction-badge absolute top-[55%] -right-8 sm:-right-12 bg-white rounded-xl py-3 px-4 shadow-xl flex items-center gap-3 z-30 transform hover:-translate-y-1 transition-transform border border-gray-50">
                 <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1e1e24] flex items-center justify-center shrink-0">
                   <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                 </div>
                 <div className="text-left">
                   <p className="font-bold text-gray-900 text-sm sm:text-base leading-none">99.8%</p>
                   <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium whitespace-nowrap mt-0.5">User Satisfaction</p>
                 </div>
               </div>
             </div>

             {/* 3. Dark Stats Card */}
             <div className="wcu-card-3 absolute bottom-8 left-6 sm:bottom-16 sm:left-24 lg:bottom-16 lg:left-12 xl:left-20 z-20 w-52 h-52 sm:w-64 sm:h-64 bg-[#1f1f1f] rounded-[2.5rem] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-[0_30px_50px_-15px_rgba(0,0,0,0.6)] border border-gray-800 will-change-transform">
               <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-[6px] sm:border-[8px] border-[#333] relative mb-4 sm:mb-6 flex items-center justify-center">
                 <div className="absolute inset-[-6px] sm:inset-[-8px] border-[6px] sm:border-[8px] border-indigo-600 rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 78%, 0 78%)' }}></div>
                 <div className="absolute inset-[-6px] sm:inset-[-8px] border-[6px] sm:border-[8px] border-blue-500 rounded-full" style={{ clipPath: 'polygon(0 0, 0% 0, 78% 100%, 0 100%)' }}></div>
                 <span className="text-white text-xl sm:text-3xl font-light">78%</span>
               </div>
               <p className="text-[#a1a1aa] text-[9px] sm:text-[11px] sm:px-2 uppercase font-medium tracking-wide leading-relaxed">Average revenue growth<br/>for per succesful<br/>implementation</p>
             </div>

             {/* 4. Pills */}
             <div className="wcu-card-4 absolute bottom-16 right-8 sm:bottom-28 sm:right-28 lg:bottom-28 lg:right-16 xl:right-28 z-20 flex flex-col gap-3 sm:gap-4 will-change-transform items-center">
               <div className="bg-[#5b3af0] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-[11px] sm:text-[12px] font-bold tracking-wider shadow-lg whitespace-nowrap hover:-translate-y-0.5 transition-transform">100% Free Forever</div>
               <div className="bg-[#27272a] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-[11px] sm:text-[12px] font-bold tracking-wider shadow-lg whitespace-nowrap hover:-translate-y-0.5 transition-transform">Instant Insights</div>
               <div className="bg-[#8b5cf6] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-[11px] sm:text-[12px] font-bold tracking-wider shadow-lg whitespace-nowrap hover:-translate-y-0.5 transition-transform">Limitless Scale</div>
             </div>

          </div>
          
          {/* RIGHT SIDE: White Content Area overlapping inside the container */}
          <div className="w-full lg:w-[55%] xl:w-1/2 bg-white lg:rounded-l-[50px] p-8 sm:p-12 lg:p-14 xl:p-20 shadow-[-15px_0_40px_rgba(0,0,0,0.02)] relative z-10 text-left flex flex-col justify-center">
             
             <div className="wcu-content h-full flex flex-col justify-center max-w-lg mx-auto lg:mx-0">
               <div className="inline-block mb-6">
                 <span className="bg-[#eef2ff] text-[#4f46e5] font-semibold px-5 py-2 rounded-full text-[11px] uppercase tracking-wider">Why Choose Us?</span>
               </div>
               
               <h2 className="text-[2rem] sm:text-4xl lg:text-[2.75rem] font-light text-gray-900 mb-12 sm:mb-16 leading-[1.15] tracking-tight">
                 <span className="font-bold">Schoolify</span> is a <span className="font-bold">revolution</span><br/> in education <span className="font-bold">management</span>
               </h2>
               
               <div className="space-y-10 sm:space-y-12">
                 
                 <div className="wcu-list-item flex flex-row gap-4 sm:gap-5 items-start">
                   <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-indigo-100 flex items-center justify-center shrink-0 text-gray-600 bg-gray-50/50">
                     <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation at our core</h3>
                     <p className="text-gray-500 text-sm leading-relaxed font-light">
                       Schoolify stands as the vanguard of school-management solutions, consistently pioneering the integration of next-generation technologies that redefine educational administration worldwide.
                     </p>
                   </div>
                 </div>
                 
                 <div className="wcu-list-item flex flex-row gap-4 sm:gap-5 items-start">
                   <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-indigo-100 flex items-center justify-center shrink-0 text-gray-600 bg-gray-50/50">
                     <Target className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-gray-900 mb-2">Simplifying complexity</h3>
                     <p className="text-gray-500 text-sm leading-relaxed font-light">
                       Infographics & animations distill complex academic data into intuitive visuals—transforming every report and result into an easily grasped, optimized experience for students, parents, and educators.
                     </p>
                   </div>
                 </div>
                 
                 <div className="wcu-list-item flex flex-row gap-4 sm:gap-5 items-start">
                   <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-indigo-100 flex items-center justify-center shrink-0 text-gray-600 bg-gray-50/50">
                     <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-gray-900 mb-2">Empowering institutional growth</h3>
                     <p className="text-gray-500 text-sm leading-relaxed font-light">
                       Our platform equips schools with automated workflows, real-time analytics, and streamlined communication—freeing educators to focus on teaching while measurable gains in enrollment, retention, and financial health propel the entire institute forward.
                     </p>
                   </div>
                 </div>

               </div>
             </div>
             
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
