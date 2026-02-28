import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smartphone, CalendarCheck, Book, CreditCard, Clock, GraduationCap, Box, Navigation, Menu, Search, User, Key, CheckSquare, Bell, FileText, Settings, Shield, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MobileShowcase = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate Header
    tl.from('.ms-header', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' });

    // Animate Phone
    tl.from('.ms-phone', { y: 100, opacity: 0, duration: 0.8, ease: 'back.out(1.2)' }, '-=0.3');
    
    // Animate Phone Internals
    tl.from('.ms-phone-app-icon', { scale: 0, opacity: 0, duration: 0.4, stagger: 0.05, ease: 'back.out(2)' }, '-=0.2');

    // Animate Left Features
    tl.from('.ms-feature-left', { x: -50, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' }, '-=0.8');

    // Animate Right Features
    tl.from('.ms-feature-right', { x: 50, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' }, '-=0.8');

    // Continuous float for phone for premium feel
    gsap.to('.ms-phone-container', { y: -15, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 });

  }, { scope: container });

  const leftFeatures = [
    { icon: <Smartphone className="w-5 h-5 text-white" />, title: "Easy to Use Mobile App", color: "bg-[#5b3af0]" },
    { icon: <CalendarCheck className="w-5 h-5 text-white" />, title: "Quick Attendance Record", color: "bg-purple-500" },
    { icon: <Book className="w-5 h-5 text-white" />, title: "Library Automation", color: "bg-pink-500" },
    { icon: <CreditCard className="w-5 h-5 text-white" />, title: "Effective Fee Management", color: "bg-rose-400" },
  ];

  const rightFeatures = [
    { icon: <Clock className="w-5 h-5 text-white" />, title: "Easy Timetable Management", color: "bg-indigo-600" },
    { icon: <GraduationCap className="w-5 h-5 text-white" />, title: "Admission Management", color: "bg-blue-500" },
    { icon: <Box className="w-5 h-5 text-white" />, title: "Inventory Management", color: "bg-cyan-500" },
    { icon: <Navigation className="w-5 h-5 text-white" />, title: "Transport Management", color: "bg-emerald-500" },
  ];

  const appIcons = [
    { icon: <User className="w-5 h-5" />, label: "Profile" },
    { icon: <CheckSquare className="w-5 h-5" />, label: "Attendance" },
    { icon: <FileText className="w-5 h-5" />, label: "Homework" },
    { icon: <CalendarCheck className="w-5 h-5" />, label: "Timetable" },
    { icon: <CreditCard className="w-5 h-5" />, label: "Fees" },
    { icon: <Shield className="w-5 h-5" />, label: "Exams" },
    { icon: <Award className="w-5 h-5" />, label: "Results" },
    { icon: <Bell className="w-5 h-5" />, label: "Notices" },
    { icon: <Book className="w-5 h-5" />, label: "Library" },
    { icon: <Box className="w-5 h-5" />, label: "Hostel" },
    { icon: <Navigation className="w-5 h-5" />, label: "Transport" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings" },
  ];

  return (
    <section ref={container} className="py-24 bg-white relative overflow-hidden font-sans">
      
      {/* Background Decoratives */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#5b3af0]/5 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="ms-header text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1f1f29] mb-4 tracking-tight">
            Why Choose <span className="text-[#5b3af0]">Schoolify?</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#5b3af0] to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-stretch gap-12 lg:gap-8 xl:gap-16">
          
          {/* LEFT FEATURES */}
          <div className="flex-1 w-full flex flex-col justify-center gap-8 sm:gap-12 lg:py-12 order-2 lg:order-1 items-center lg:items-end">
            {leftFeatures.map((feature, idx) => (
              <div key={idx} className="ms-feature-left flex items-center gap-4 sm:gap-6 w-full max-w-[320px] lg:max-w-none lg:w-auto hover:translate-x-2 transition-transform cursor-default group">
                <div className="flex-1 lg:flex-none text-left lg:text-right order-2 lg:order-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-[#5b3af0] transition-colors">{feature.title}</h3>
                </div>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${feature.color} flex items-center justify-center shadow-lg shadow-${feature.color.split('-')[1]}-500/30 shrink-0 transform group-hover:scale-110 transition-transform order-1 lg:order-2`}>
                  {feature.icon}
                </div>
              </div>
            ))}
          </div>

          {/* CENTER PHONE MOCKUP */}
          <div className="ms-phone-container flex-shrink-0 relative order-1 lg:order-2 z-20 mx-auto px-4 sm:px-0">
            {/* Phone Shadow / Glow */}
            <div className="absolute inset-0 bg-[#5b3af0]/20 blur-2xl rounded-full scale-90 translate-y-10"></div>
            
            <div className="ms-phone relative w-[280px] h-[580px] sm:w-[320px] sm:h-[660px] bg-white rounded-[3rem] sm:rounded-[3.5rem] border-[10px] sm:border-[14px] border-[#1a1a24] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col will-change-transform">
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] sm:w-[120px] h-6 sm:h-7 bg-[#1a1a24] rounded-b-2xl sm:rounded-b-3xl z-30 flex items-center justify-center gap-2">
                 <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#333] border border-[#222]"></div>
                 <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#111] border border-[#0a0a0a] shadow-[inset_0_0_2px_rgba(255,255,255,0.1)] relative overflow-hidden">
                   <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-blue-400/50 rounded-full blur-[0.5px]"></div>
                 </div>
              </div>

              {/* App Interface Header */}
              <div className="bg-gradient-to-br from-[#5b3af0] to-purple-600 px-4 sm:px-5 pt-10 sm:pt-14 pb-12 sm:pb-16 rounded-b-[2.5rem] text-white flex flex-col z-20 relative shadow-xl">
                 <div className="flex justify-between items-center mb-6">
                   <Menu className="w-6 h-6 text-white/90" />
                   <div className="font-bold text-lg tracking-tight flex items-center gap-1">
                     <span className="text-xl">e</span>Skooly
                   </div>
                   <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30 backdrop-blur-sm">
                     <User className="w-4 h-4 text-white" />
                   </div>
                 </div>
                 
                 <div className="flex justify-between items-center mb-4">
                   <div>
                     <p className="text-white/80 text-[10px] uppercase font-bold tracking-wider mb-1">Welcome back</p>
                     <h3 className="text-2xl font-bold leading-none">Arham!</h3>
                   </div>
                   <div className="w-12 h-12 bg-white/10 rounded-xl backdrop-blur-md flex items-center justify-center border border-white/20">
                     <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                     </svg>
                   </div>
                 </div>

                 {/* App Search Bar overlapping header bottom */}
                 <div className="absolute -bottom-6 left-5 right-5 bg-white rounded-xl shadow-lg flex items-center p-3 sm:p-4 gap-3 border border-gray-100">
                   <Search className="w-4 h-4 text-gray-400" />
                   <div className="text-xs text-gray-400 font-medium">Search modules...</div>
                 </div>
              </div>

              {/* App Interface Body (Grid of features) */}
              <div className="flex-1 bg-[#f8f9fe] pt-10 sm:pt-14 px-4 sm:px-5 pb-6 overflow-hidden">
                 <div className="grid grid-cols-3 gap-y-6 sm:gap-y-8 gap-x-3 sm:gap-x-4">
                   {appIcons.map((item, idx) => (
                     <div key={idx} className="ms-phone-app-icon flex flex-col items-center gap-2 will-change-transform">
                       <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                         {item.icon}
                       </div>
                       <span className="text-[9px] sm:text-[10px] font-bold text-gray-600 text-center">{item.label}</span>
                     </div>
                   ))}
                 </div>
              </div>

              {/* iOS Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 sm:h-1.5 bg-gray-300 rounded-full z-30"></div>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="flex-1 w-full flex flex-col justify-center gap-8 sm:gap-12 lg:py-12 order-3 items-center lg:items-start">
            {rightFeatures.map((feature, idx) => (
              <div key={idx} className="ms-feature-right flex items-center gap-4 sm:gap-6 w-full max-w-[320px] lg:max-w-none lg:w-auto hover:-translate-x-2 transition-transform cursor-default group">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${feature.color} flex items-center justify-center shadow-lg shadow-${feature.color.split('-')[1]}-500/30 shrink-0 transform group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <div className="flex-1 lg:flex-none text-left">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-[#5b3af0] transition-colors">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileShowcase;
