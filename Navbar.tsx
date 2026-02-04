import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <h2 className="text-2xl md:text-3xl text-[#0A7E8C]">
              Bali Guide Driver
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#1E293B] hover:text-[#0A7E8C] transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#1E293B] hover:text-[#0A7E8C] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className="text-[#1E293B] hover:text-[#0A7E8C] transition-colors font-medium"
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#0A7E8C] text-white px-6 py-2.5 rounded-lg hover:bg-[#14B8A6] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1E293B] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-[#1E293B] hover:text-[#0A7E8C] transition-colors font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-[#1E293B] hover:text-[#0A7E8C] transition-colors font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="text-left text-[#1E293B] hover:text-[#0A7E8C] transition-colors font-medium py-2"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left bg-[#0A7E8C] text-white px-6 py-2.5 rounded-lg hover:bg-[#14B8A6] transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
