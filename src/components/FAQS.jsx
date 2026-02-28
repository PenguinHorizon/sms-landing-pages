import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const container = useRef();
  const contentRefs = useRef([]);

  const faqs = [
    {
      question: "Can You Make a Customized System for My School/college?",
      answer: "Yes, we offer fully customizable solutions tailored to meet the specific requirements and workflows of your educational institution. Our team works closely with you to understand your needs and integrate necessary features accordingly."
    },
    {
      question: "Do You Also Create Websites?",
      answer: "Absolutely! Alongside our management software, we provide professional website design and development services to help your institution establish a strong, modern, and engaging online presence."
    },
    {
      question: "Do I Need Internet for Your Software?",
      answer: "Yes, Schoolify is a cloud-based web application. A stable internet connection is required to access the system, ensuring your data is synced in real-time and accessible securely from any device, anywhere."
    },
    {
      question: "Do You Provide Training or Guidance to know How to Use This Software?",
      answer: "We provide comprehensive onboarding training, detailed documentation, and video tutorials. Additionally, our support team is always available to help your staff master the software quickly and efficiently."
    },
    {
      question: "Do You Provide More System Modules rather than those discussed above?",
      answer: "Yes, our system is highly modular and extensible. We continually develop new features and can implement extra modules like Hostel Management, Advanced Analytics, or specific local compliance tools upon request."
    },
    {
      question: "Which Type of Software Do You build?",
      answer: "We specialize in cloud-based ERP (Enterprise Resource Planning) solutions specifically designed for the education sector, handling everything from student life-cycles and academics to HR, payroll, and complex financial accounting."
    }
  ];

  useGSAP(() => {
    // Scroll reveal animation for the whole section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    tl.from('.faq-header > *', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' })
      .from('.faq-anim-wrapper', { y: 30, opacity: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out' }, '-=0.3');

  }, { scope: container });

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      // Close currently open
      gsap.to(contentRefs.current[index], { height: 0, opacity: 0, duration: 0.3, ease: 'power2.inOut' });
      setOpenIndex(null);
    } else {
      // If something is already open, close it first
      if (openIndex !== null) {
        gsap.to(contentRefs.current[openIndex], { height: 0, opacity: 0, duration: 0.3, ease: 'power2.inOut' });
      }
      // Open new one
      gsap.set(contentRefs.current[index], { height: 'auto' });
      const targetHeight = contentRefs.current[index].offsetHeight;
      gsap.fromTo(contentRefs.current[index], 
        { height: 0, opacity: 0 }, 
        { height: targetHeight, opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
      setOpenIndex(index);
    }
  };

  return (
    <section ref={container} className="py-24 bg-white relative overflow-hidden font-sans border-t border-gray-100">
      
      {/* Decorative Background Elements (Watermark approximation) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50/50 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="faq-header text-center max-w-3xl mx-auto mb-16">
          <p className="text-indigo-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            Need Help?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1f1f29] mb-4 tracking-tight">
            FAQs
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto my-6 rounded-full"></div>
          <p className="text-gray-500 text-sm sm:text-base px-4">
            You Can Ask Questions About School Management Software Modules
          </p>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className="faq-anim-wrapper will-change-transform">
                <div 
                  className={`faq-item flex flex-col justify-start rounded-xl overflow-hidden transition-all duration-300 border h-full ${
                    isOpen 
                      ? 'border-indigo-200 bg-indigo-50/30 shadow-md transform -translate-y-1' 
                      : 'border-[#e2e8f0] bg-gray-50 hover:bg-white hover:border-indigo-100 hover:shadow-sm'
                  }`}
                >
                  <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-sm sm:text-base pr-4 transition-colors ${isOpen ? 'text-indigo-700' : 'text-[#334155]'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-500'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-400 ease-in-out ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                <div 
                  ref={el => contentRefs.current[index] = el}
                  className="h-0 opacity-0 overflow-hidden"
                >
                  <div className="px-5 md:px-6 pb-6 pt-2">
                    <p className="text-gray-600 text-sm leading-relaxed border-t border-indigo-100/50 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQS;
