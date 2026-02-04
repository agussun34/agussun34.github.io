import { CheckCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1549904912-6d235f6fc07b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMGRyaXZlciUyMGZyaWVuZGx5fGVufDF8fHx8MTc2ODc5MTA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Friendly Balinese driver"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#14B8A6] rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#D4AF37] rounded-2xl -z-10"></div>
          </div>

          {/* Right - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl text-[#0A7E8C] mb-6">
              Your Local Bali Guide & Driver
            </h2>
            <p className="text-lg text-[#1E293B] mb-6 leading-relaxed">
              Bali is more than just a destination — it is a culture, a tradition, and a way of life. 
              My name is <span className="font-semibold text-[#0A7E8C]">I Wayan Surya</span>, a professional guide driver born and raised in Bali. 
              With years of experience guiding travelers from around the world, I am committed to providing safe, 
              comfortable, and authentic Bali tour experiences.
            </p>
            <p className="text-lg text-[#1E293B] mb-8 leading-relaxed">
              Whether you're seeking adventure, cultural immersion, or peaceful relaxation, I'll create a personalized 
              journey that captures the true spirit of Bali.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#14B8A6] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-[#1E293B] mb-1">Licensed & Experienced</h4>
                  <p className="text-sm text-gray-600">Professional driver with years of experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#14B8A6] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-[#1E293B] mb-1">Friendly & Professional</h4>
                  <p className="text-sm text-gray-600">Punctual and courteous service</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#14B8A6] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-[#1E293B] mb-1">Flexible Tours</h4>
                  <p className="text-sm text-gray-600">Customizable itineraries to suit your needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#14B8A6] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-[#1E293B] mb-1">English Speaking</h4>
                  <p className="text-sm text-gray-600">Clear communication throughout your journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
