import { Instagram, MessageCircle, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4">
              Bali Guide Driver
            </h3>
            <p className="text-white/70 mb-4">
              Your trusted local guide for authentic Bali experiences. Creating unforgettable memories since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-white/70 hover:text-[#14B8A6] transition-colors">
                Home
              </a>
              <a href="#about" className="block text-white/70 hover:text-[#14B8A6] transition-colors">
                About
              </a>
              <a href="#packages" className="block text-white/70 hover:text-[#14B8A6] transition-colors">
                Tour Packages
              </a>
              <a href="#contact" className="block text-white/70 hover:text-[#14B8A6] transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <p className="text-white/70 mb-4">
              Stay updated with our latest tours and travel tips
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#14B8A6] p-3 rounded-lg transition-colors"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#14B8A6] p-3 rounded-lg transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#14B8A6] p-3 rounded-lg transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/70">
            © 2026 Bali Guide Driver. Explore Bali with local expertise.
          </p>
          <p className="text-white/50 text-sm mt-2">
            Licensed Tour Guide & Driver • Ubud, Bali, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
