import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import all user-provided assets
import imgAdmission from '../assets/admissions.png';
import imgAttendance from '../assets/attendance.png';
import imgExamination from '../assets/examination.png';
import imgLearning from '../assets/Learning(LMS).png';
import imgAccounting from '../assets/accounting.png';
import imgStudent from '../assets/students.png';
import imgTimetable from '../assets/timetable.png';
import imgAdmin from '../assets/Administrations.png';
import imgTransport from '../assets/transport.png';
import imgPayroll from '../assets/payrolls.png';
import imgMultiCampus from '../assets/multi campus.png';
import imgHR from '../assets/hr.png';
import imgCertificate from '../assets/certificate.png';
import imgLibrary from '../assets/library.png';
import academics from "../assets/academic.png"
gsap.registerPlugin(ScrollTrigger);

const Modules = () => {
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
    tl.from('.modules-header > *', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' });

    // Animate Grid Cards
    tl.from('.module-anim-wrapper', { 
      y: 40, 
      opacity: 0, 
      duration: 0.5, 
      stagger: 0.05, 
      ease: 'back.out(1.2)' 
    }, '-=0.2');

    // Animate CTA
    tl.from('.modules-cta', { scale: 0.9, opacity: 0, duration: 0.5, ease: 'back.out(1.5)' }, '-=0.2');

  }, { scope: container });

  // Map the accurate 14 items exactly matching the user's provided assets and order where possible.
  const modulesData = [
    { image: imgAdmission, title: "Admission" },
    { image: imgAttendance, title: "Attendance", active: true },
    { image: imgExamination, title: "Examination" },
    { image: imgLearning, title: "Learning (LMS)" },
    { image: imgAccounting, title: "Accounting" },
    { image: imgStudent, title: "Student" },
    { image: imgTimetable, title: "Timetable" },
    { image: imgAdmin, title: "Administration" },
    { image: imgTransport, title: "Transport" },
    { image: imgPayroll, title: "Payroll" },
    { image: imgMultiCampus, title: "Multi-Campus" },
    { image: imgHR, title: "HR" },
    { image: imgCertificate, title: "Certificate" },
    { image: imgLibrary, title: "Library" },
    { image: academics, title: "Academic" },
  ];

  return (
    <section ref={container} className="py-24 bg-[#FAFBFF] border-t border-gray-100 font-sans relative overflow-hidden">
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="modules-header text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#1e233d] mb-6 tracking-tight">
            Best School Management System Modules
          </h2>
          <p className="text-[#64748b] text-sm sm:text-base leading-relaxed px-4 md:px-12 lg:px-24">
            Our highly developed, time-efficient & cost-effective <span className="font-semibold text-[#1e233d]">school management software modules</span> help you to get closer with parents,
            staff and management. With Schoolify you can track records, manage extra-curricular activities and much more by just a single click.
            <br className="hidden sm:block mt-2" />
            Our School system module includes
          </p>
        </div>

        {/* Modules Grid - 5 columns layout exactly like screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-16 justify-center max-w-[1100px] mx-auto">
          {modulesData.map((module, index) => (
            <div key={index} className="module-anim-wrapper will-change-transform h-full">
              <div 
                className={`group h-full bg-white border ${module.active ? 'border-purple-600 shadow-sm' : 'border-[#e2e8f0]'} rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer hover:border-[#5b3af0] hover:shadow-md hover:-translate-y-1`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                  <img src={module.image} alt={module.title} className="max-w-full max-h-full object-contain" />
                </div>
                <h3 className="text-[#1e233d] font-bold text-sm sm:text-base leading-tight">
                  {module.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-[#64748b] font-medium mt-0.5">
                  Management System
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="modules-cta flex justify-center">
          <button className="bg-[#fc4a59] text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3 rounded-full shadow-[0_8px_20px_-5px_rgba(252,74,89,0.4)] hover:shadow-[0_12px_25px_-5px_rgba(252,74,89,0.5)] hover:-translate-y-0.5 transition-all flex items-center gap-2 group">
            Request Demo 
            <span className="transform group-hover:translate-x-1 transition-transform">›</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Modules;
