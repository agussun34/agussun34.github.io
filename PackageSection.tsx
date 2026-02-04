import { Clock, MapPin, Calendar } from 'lucide-react';

interface TourPackage {
  id: string;
  title: string;
  duration: string;
  description: string;
  highlights: string[];
  image: string;
  type: string;
}

const packages: TourPackage[] = [
  {
    id: 'ubud',
    title: 'Ubud Cultural Tour',
    duration: 'Full Day',
    type: 'Cultural',
    description: 'Experience the heart of Balinese culture and art',
    highlights: [
      'Visit Ubud Monkey Forest',
      'Tegalalang Rice Terrace',
      'Coffee Plantation',
      'Traditional art villages',
    ],
    image: 'https://images.unsplash.com/photo-1565970141923-345a5f05a6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVYnVkJTIwbW9ua2V5JTIwZm9yZXN0fGVufDF8fHx8MTc2ODc5MTA5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'uluwatu',
    title: 'Uluwatu Sunset Tour',
    duration: 'Half / Full Day',
    type: 'Coastal',
    description: 'Witness magical sunsets at clifftop temples',
    highlights: [
      'Uluwatu Temple',
      'Kecak Fire Dance',
      'Sunset at the cliff',
      'Jimbaran seafood dinner (optional)',
    ],
    image: 'https://images.unsplash.com/photo-1604842937136-1648761a6256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVbHV3YXR1JTIwdGVtcGxlJTIwQmFsaXxlbnwxfHx8fDE3Njg3OTEwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'fullbali',
    title: 'Full Bali Experience',
    duration: 'Full Day',
    type: 'Adventure',
    description: 'Explore the best of Bali in one unforgettable journey',
    highlights: [
      'Ubud, Kintamani, Tirta Empul',
      'Waterfalls & temples',
      'Beach or sunset spots',
      'Authentic local experiences',
    ],
    image: 'https://images.unsplash.com/photo-1558699692-65505eece6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwd2F0ZXJmYWxsJTIwbmF0dXJlfGVufDF8fHx8MTc2ODc5MTEwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function PackageSection() {
  const handleBookNow = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-[#FFF8ED] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#0A7E8C] mb-4">
            Tour Packages
          </h2>
          <p className="text-xl text-[#1E293B]/70 max-w-2xl mx-auto">
            Choose your perfect Bali adventure
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-4 py-2 rounded-full shadow-lg">
                  {pkg.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl text-[#0A7E8C] mb-3">
                  {pkg.title}
                </h3>
                
                {/* Duration & Location */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={18} />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} />
                    <span className="text-sm">Bali</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  {pkg.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#1E293B] mb-3">Highlights:</h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#14B8A6] mt-1">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Now Button */}
                <button
                  onClick={handleBookNow}
                  className="w-full bg-[#0A7E8C] text-white py-3 rounded-lg hover:bg-[#14B8A6] transition-colors duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tour CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#0A7E8C] to-[#14B8A6] rounded-2xl p-8 text-white">
          <h3 className="text-2xl md:text-3xl mb-4">
            Want a Custom Tour?
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            I can create a personalized itinerary tailored to your interests and preferences. Just let me know what you'd like to experience!
          </p>
          <button
            onClick={handleBookNow}
            className="bg-white text-[#0A7E8C] px-8 py-3 rounded-lg hover:bg-[#F5E6D3] transition-colors duration-300"
          >
            Contact for Custom Tour
          </button>
        </div>
      </div>
    </section>
  );
}
