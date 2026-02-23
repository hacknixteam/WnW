function About() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs text-gray-500 tracking-[0.2em] mb-2">
            EXPERIENCE THE BEST
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            About
          </h2>
        </div>

        {/* Fixed Proportional Layout - SAME AS BEFORE */}
        <div className="w-full">
          <div className="relative w-full" style={{ paddingBottom: '45%' }}>
            <div className="absolute inset-0 flex gap-4 sm:gap-6">

              {/* Left Side - Image (50% width) - UNCHANGED */}
              <div className="w-1/2 h-full">
                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="src/assets/images/sample.jpg"
                    alt="Sri Lanka travel experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Side - Content (50% width) */}
              <div className="w-1/2 h-full flex items-center">
                <div className="w-full space-y-[1.5vw] text-gray-700">

                  <p style={{ fontSize: 'clamp(11px, 1.4vw, 22px)', fontWeight: '700' }}
                    className="text-gray-900">
                    Your Trusted Travel Partner in Sri Lanka
                  </p>

                  <p style={{ fontSize: 'clamp(9px, 1vw, 16px)', lineHeight: '1.7' }}>
                    Wheels & Waves LK is a Sri Lanka-based travel and transport company dedicated to delivering comfortable, safe, and memorable journeys across the island. We specialize in private tours, airport transfers, and fully customized travel experiences designed around your schedule and interests.
                  </p>

                  <p style={{ fontSize: 'clamp(9px, 1vw, 16px)', lineHeight: '1.7' }}>
                    With professional English-speaking drivers, a well-maintained fleet, and strong local knowledge, we help you explore everything from stunning beaches and wildlife parks to cultural landmarks and hidden gems. From the moment you arrive to your final drop-off, our team ensures a smooth and worry-free trip.
                  </p>

                  <p style={{ fontSize: 'clamp(9px, 1vw, 16px)', lineHeight: '1.7' }}>
                    At Wheels & Waves LK, we don't just take you places - we create journeys worth remembering.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
