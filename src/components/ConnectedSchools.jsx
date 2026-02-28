import React from 'react';
import { Building2, GraduationCap, Library, BookOpen, Globe2, Shield } from 'lucide-react';

const ConnectedSchools = () => {
  // Using Lucide icons to create high-quality, scalable logo placeholders
  // that mimic the grayscale, professional look of the provided screenshot
  const logos = [
    { icon: Building2, name: "BOSTON", sub: "Public Schools" },
    { icon: Library, name: "HeartLand", sub: "INTERNATIONAL ENGLISH SCHOOL" },
    { icon: GraduationCap, name: "KINGSLEY", sub: "MONTESSORI SCHOOL" },
    { icon: BookOpen, name: "ROOTS", sub: "INTERNATIONAL SCHOOLS & COLLEGES" },
    { icon: Globe2, name: "ice", sub: "Institute of Creative Excellence", lowercase: true },
    { icon: Shield, name: "argia", sub: "academy", lowercase: true }
  ];

  return (
    <section className="bg-white py-12 md:py-16 border-t-[3px] border-[#2f2890]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-light text-gray-700">
            Join <span className="font-bold text-gray-900">125,000+</span> schools and a galaxy of users
          </h2>
        </div>

        {/* Logos Container */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-3 cursor-pointer hover:opacity-100 transition-opacity duration-300"
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-500" strokeWidth={1.5} />
                <div className="text-left flex flex-col justify-center">
                  <span className={`text-[#666] font-bold leading-none tracking-wide ${logo.lowercase ? 'text-2xl lowercase font-black tracking-tighter' : 'text-lg md:text-xl uppercase'}`}>
                    {logo.name}
                  </span>
                  {logo.sub && (
                    <span className="text-[#999] text-[6px] md:text-[8px] uppercase tracking-wider font-semibold mt-0.5 leading-tight">
                      {logo.sub}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConnectedSchools;
