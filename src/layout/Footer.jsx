import { Facebook, Linkedin, Twitter, Instagram, GraduationCap, ArrowUpCircle } from 'lucide-react';

// Using a custom SVG for Pinterest since Lucide doesn't have an exact match that looks right in this context, 
// but we'll stick to a close approximation or standard Lucide icons for simplicity and reliability.
const PinterestIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} stroke="none">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.105 0 7.301 2.929 7.301 6.83 0 4.085-2.574 7.379-6.143 7.379-1.2 0-2.33-.625-2.715-1.362 0 0-.594 2.261-.738 2.813-.267 1.028-.987 2.316-1.47 3.104 1.144.35 2.357.541 3.606.541 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.604 0 12.017 0z"/>
  </svg>
);


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0f19] text-gray-300 pt-20 pb-8 font-sans relative border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Description (Takes up 4 cols on large screens) */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center -rotate-6 shadow-lg shadow-indigo-600/30">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors">
                School<span className="text-indigo-400">ify</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Schoolify school management system is efficient software that converts the ordinary school into a smart one. We offer easy to navigate, cost & time efficient, error-free and web-based school management solutions to tackle all the hurdles of students, parents, teachers and institute faculty efficiently.
            </p>
          </div>

          {/* Column 2: Services (Takes up 2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {['Academics', 'Student Management', 'Administration', 'Admissions', 'Examination', 'Timetable', 'Transportation', 'Library'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors block w-full">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company (Takes up 2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {['Our Story', 'Blog', 'About', 'Contact', 'Features', 'Modules', 'Demo'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors block w-full">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (Takes up 4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold text-lg mb-6">Contact us</h3>
            
            <div className="mb-6">
              <h4 className="text-white font-medium mb-3">Address</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                NextGen Solutions, Office # 1<br />
                Sharjah City, Sialkot Road,<br />
                Gujranwala, Pakistan
              </p>
            </div>

            <div className="mb-8 space-y-2 text-sm text-gray-400">
              <p>Phone: <a href="tel:+923001113423" className="hover:text-white transition-colors">(+92) 300 111 3423</a></p>
              <p>Email: <a href="mailto:hello@schoolify.com" className="hover:text-white transition-colors">hello@schoolify.com</a></p>
            </div>

            {/* Social Icons row */}
            <div className="flex gap-2 mb-8">
              <a href="#" className="w-8 h-8 bg-[#3b5998] hover:bg-[#2d4373] text-white flex items-center justify-center rounded transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 fill-current" strokeWidth={0} />
              </a>
              <a href="#" className="w-8 h-8 bg-[#0077b5] hover:bg-[#005582] text-white flex items-center justify-center rounded transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 fill-current" strokeWidth={0} />
              </a>
              <a href="#" className="w-8 h-8 bg-[#00acee] hover:bg-[#0087ba] text-white flex items-center justify-center rounded transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 fill-current" strokeWidth={0} />
              </a>
              <a href="#" className="w-8 h-8 bg-[#cb2027] hover:bg-[#9f191f] text-white flex items-center justify-center rounded transition-colors" aria-label="Pinterest">
                <PinterestIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#dd2a7b] hover:bg-[#b02262] text-white flex items-center justify-center rounded transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="flex gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/60 flex justify-center items-center relative">
          <p className="text-sm text-gray-500 text-center">
            Copyright © 2026 Designed By: <span className="text-[#00acee] font-medium cursor-pointer hover:text-blue-300 transition-colors">PenguinHorizon</span>
          </p>
          
          {/* Scroll to Top Button */}
          <button 
            onClick={scrollToTop}
            className="absolute right-0 text-gray-500 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUpCircle className="w-8 h-8" strokeWidth={1} />
          </button>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
