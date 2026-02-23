import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
   <nav className="fixed top-0 w-full z-50 transition-all duration-500 overflow-x-hidden bg-white/100 backdrop-blur-sm shadow-sm h-17 flex items-center">


      {/* Using same container width as Destinations section */}
      <div className="w-full px-2 sm:px-4">
        <div className="max-w-7xl mx-auto h-14 sm:h-16 md:h-20 flex items-center justify-between">
          
          {/* Logo - Left side with modern styling */}
          <div className="flex items-center flex-shrink-0 group">
            <div className="relative">
              <img
                src="src/assets/icons/logo.png"
                alt="logo"
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          {/* Desktop Navigation - Hidden only on mobile, visible on tablet and desktop */}
          <div className="hidden sm:flex items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8 text-black/90 font-medium">
            {['Home', 'Destinations', 'Services', 'About', 'Why choose us', 'Contact'].map((item) => (
              <a
                key={item}
                className="relative px-1 py-2 text-[10px] md:text-xs lg:text-sm hover:text-black cursor-pointer transition-colors group whitespace-nowrap"
              >
                {item}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-1/2 transition-all duration-300
                  ${scrolled ? 'bg-green-400' : 'bg-blue-400'}`}>
                </span>
              </a>
            ))}
          </div>

          {/* Right side - Modern Login and Menu */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 flex-shrink-0">
            
            {/* Login Button - Navigates to /login */}
            <button
              onClick={() => navigate('/loginnsignup')}
              className={`text-white font-medium
              px-3 sm:px-4 md:px-6 py-0.5 sm:py-1 md:py-1.5
              text-[8px] sm:text-[10px] md:text-xs
              border-solid
              border-t-[2px] sm:border-t-[3px] md:border-t-[4px] 
              border-b-[2px] sm:border-b-[3px] md:border-b-[4px] 
              border-l-[16px] sm:border-l-[20px] md:border-l-[26px] 
              border-r-[16px] sm:border-r-[20px] md:border-r-[26px]
              rounded-tr-[60px] sm:rounded-tr-[80px] md:rounded-tr-[110px] 
              rounded-bl-[60px] sm:rounded-bl-[80px] md:rounded-bl-[110px]
              transition-all duration-300 whitespace-nowrap
              hover:scale-105 active:scale-95

              ${scrolled
                ? `
                  bg-green-500
                  border-t-green-500 border-r-green-500
                  border-b-green-500 border-l-green-500
                  hover:bg-green-700 hover:border-t-green-700 hover:border-r-green-700
                  hover:border-b-green-700 hover:border-l-green-700
                `
                : `
                  bg-blue-500
                  border-t-blue-500 border-r-blue-500
                  border-b-blue-500 border-l-blue-500
                  hover:bg-blue-700 hover:border-t-blue-700 hover:border-r-blue-700
                  hover:border-b-blue-700 hover:border-l-blue-700
                `
              }`}
            >
              <span className="relative z-10 flex items-center gap-0.5 sm:gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span className="hidden xs:inline">Login</span>
                <span className="xs:hidden">Log</span>
              </span>
            </button>

            {/* Mobile Menu Icon - Hidden on tablet and desktop, visible only on mobile */}
            <div className="sm:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`relative w-7 h-7 flex items-center justify-center
                           backdrop-blur-sm rounded-full
                           transition-all duration-300
                           border group
                           ${scrolled 
                             ? 'bg-green-600/20 hover:bg-green-600/30 border-green-500/30 hover:border-green-500/50' 
                             : 'bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40'
                           }`}>
                {mobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 text-white transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 text-white transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
                <span className={`absolute -inset-1 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity
                  ${scrolled ? 'bg-green-500/20' : 'bg-white/10'}`}>
                </span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out
        ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className={`w-full px-3 py-3 backdrop-blur-xl
          ${scrolled 
            ? 'bg-gray-900/98 border-t border-gray-800' 
            : 'bg-black/90 border-t border-white/10'
          }`}
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-2">
            {['Home', 'Destinations', 'Services', 'About', 'Why choose us', 'Contact'].map((item) => (
              <a
                key={item}
                onClick={handleLinkClick}
                className="w-full text-center text-white/90 hover:text-white py-2.5 px-3 rounded-lg transition-all duration-300
                         hover:bg-white/10 text-sm font-medium border-l-2 border-transparent hover:border-green-400"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;











