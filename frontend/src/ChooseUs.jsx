function Whychooseus() {
  const reasons = [
    { point: "We are committed to punctual service, clear communication, and dependable transport every step of the way." },
    { point: "Your trip is tailored to match your needs, pace, and preferences." },
    { point: "Travel beyond the guidebooks with insights from people who truly know Sri Lanka." },
    { point: "Our vehicles are clean, modern, and regularly maintained for maximum comfort and safety." },
    { point: "Enjoy smooth travel with courteous and knowledgeable professionals." },
    { point: "No surprises – just honest rates and trustworthy service." },
    { point: "We are always available to assist you from arrival to departure." }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs text-gray-500 tracking-[0.2em] mb-2">
            EXPERIENCE THE BEST
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Choose Wheels & Waves LK
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex gap-6 md:gap-10 items-stretch">

          {/* Left Side - Image */}
          <div className="w-1/2">
            <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <img
                src="src/assets/images/sample.jpg"
                alt="Why choose Wheels & Waves LK"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - All Points */}
          <div className="w-1/2 flex flex-col justify-center gap-3 md:gap-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
               {/* Green check circle */}
<div key={index} className="flex items-start gap-3">
  <img
    src="src/assets/icons/point.png"
    alt={reason.point}
    className="
      flex-shrink-0
      w-4 h-4
      sm:w-5 sm:h-5
      md:w-7 md:h-7
      lg:w-9 lg:h-9
      xl:w-6 xl:h-6
      rounded-full object-cover shadow-sm mt-1
    "
  />
  <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-1">
    {reason.point}
  </p>
</div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Whychooseus;