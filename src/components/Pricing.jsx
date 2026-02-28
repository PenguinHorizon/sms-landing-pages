import React, { useRef } from 'react';
import { CalendarDays } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    // Animate Header
    tl.from('.pricing-header', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' });

    // Animate Pricing Cards
    tl.from('.pricing-anim-wrapper', { 
      y: 40, 
      opacity: 0, 
      duration: 0.6, 
      stagger: 0.15, 
      ease: 'back.out(1.1)' 
    }, '-=0.2');

  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-[#FAFBFF] relative overflow-hidden font-sans border-t border-gray-100">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="pricing-header text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1e233d] tracking-tight">
            What Are the Different Pricing Packages of Schoolify?
          </h2>
        </div>

        {/* 2-Column Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1000px] mx-auto">
          
          {/* Monthly Package Card */}
          <div className="pricing-anim-wrapper will-change-transform h-full">
            <div className="group h-full bg-white rounded-2xl p-10 lg:p-14 text-center transition-all duration-300 border border-[#e2e8f0] hover:border-indigo-200 hover:shadow-[0_20px_40px_-15px_rgba(91,58,240,0.1)] hover:-translate-y-1 flex flex-col items-center">
              
              <div className="relative mb-6">
                <CalendarDays className="w-14 h-14 text-[#00c6a9] transition-transform duration-300 group-hover:scale-110 group-hover:text-indigo-600" strokeWidth={1.5} />
                <div className="absolute inset-0 flex items-center justify-center mt-2">
                  <span className="text-[#00c6a9] font-bold text-lg group-hover:text-indigo-600 transition-colors">30</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#1e233d] mb-6">Monthly Package</h3>
              
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                We provide an effective monthly school management system pricing plan for every institute. Our starter package starts from 30 PKR/student/month, while our pro package goes for 50 PKR/student/month. Furthermore, you can contact with us for an enterprise package to manage a large number of students.
              </p>
              
            </div>
          </div>

          {/* Yearly Package Card */}
          <div className="pricing-anim-wrapper will-change-transform h-full">
            <div className="group h-full bg-white rounded-2xl p-10 lg:p-14 text-center transition-all duration-300 border border-[#e2e8f0] hover:border-purple-200 hover:shadow-[0_20px_40px_-15px_rgba(252,74,89,0.1)] hover:-translate-y-1 flex flex-col items-center relative overflow-hidden">
              
              <div className="relative mb-6">
                <CalendarDays className="w-14 h-14 text-[#fc4a59] transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-600" strokeWidth={1.5} />
                <div className="absolute inset-0 flex items-center justify-center mt-2">
                  <span className="text-[#fc4a59] font-bold text-base group-hover:text-purple-600 transition-colors">365</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#1e233d] mb-6">Yearly Package</h3>
              
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                In the yearly plan, our minimum price for a starter package starts from 85 thousand PKR per year for upto 300 students, depending on the number of students you have in your institute. While our pro package yearly cost 150,000 PKR only for upto 300 students. You can get an exclusive quote for the enterprise package by getting in touch with us.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Pricing;
