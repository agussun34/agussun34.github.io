import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const whatsappNumber = '+6281234567890';
  const email = 'iwayan.surya@balidriver.com';

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about your Bali tour services.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create a WhatsApp message with form data
    const message = encodeURIComponent(
      `Hello! My name is ${formData.name}.\n\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#0A7E8C] mb-4">
            Contact Your Bali Driver
          </h2>
          <p className="text-xl text-[#1E293B]/70 max-w-2xl mx-auto">
            Ready to start your Bali adventure? Get in touch with me today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-[#0A7E8C] to-[#14B8A6] rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl mb-6">
                Let's Plan Your Journey
              </h3>
              <p className="mb-8 text-white/90">
                I'm here to help you create unforgettable memories in Bali. Whether you have questions about tours, 
                pricing, or special requests, feel free to reach out!
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone / WhatsApp</h4>
                    <p className="text-white/90">{whatsappNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-white/90">{email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-white/90">Ubud, Bali, Indonesia</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <button
                onClick={handleWhatsApp}
                className="w-full mt-8 bg-white text-[#0A7E8C] py-4 rounded-lg hover:bg-[#F5E6D3] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone size={20} />
                Chat via WhatsApp
              </button>
            </div>

            {/* Temple Image */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1680188700677-93b9570882dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwdGVtcGxlJTIwdHJvcGljYWx8ZW58MXx8fHwxNzY4NzMxODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Balinese temple"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <div className="bg-[#FFF8ED] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl text-[#0A7E8C] mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#1E293B] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-[#0A7E8C] focus:ring-2 focus:ring-[#0A7E8C]/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#1E293B] mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-[#0A7E8C] focus:ring-2 focus:ring-[#0A7E8C]/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#1E293B] mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-[#0A7E8C] focus:ring-2 focus:ring-[#0A7E8C]/20 outline-none transition-all resize-none"
                    placeholder="Tell me about your travel plans, interests, and any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0A7E8C] text-white py-4 rounded-lg hover:bg-[#14B8A6] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send size={20} />
                  Send Message via WhatsApp
                </button>
              </form>

              <p className="mt-4 text-sm text-gray-600 text-center">
                Your message will open in WhatsApp for secure communication
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
