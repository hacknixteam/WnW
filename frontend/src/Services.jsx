function Service() {
  const services = [
    {
      title: "Airport Pickups",
      description: "On-time welcome service from the airport to your hotel with comfort and safety.",
      icon: "src/assets/icons/plane.png",
    },
    {
      title: "Airport Drop-offs",
      description: "Reliable transfers to the airport, ensuring you arrive relaxed and on schedule.",
      icon: "src/assets/icons/drop.png",
    },
    {
      title: "Beach Getaways",
      description: "Relax on Sri Lanka's most beautiful beaches with easy, comfortable transport.",
      icon: "src/assets/icons/gateway.png",
    },
    {
      title: "City & Day Tours",
      description: "Discover top attractions, culture, and local life with a private guided ride.",
      icon: "src/assets/icons/smart-city.png",
    },
    {
      title: "Island Round Trips",
      description: "Travel across Sri Lanka with customized multi-day journeys at your own pace.",
      icon: "src/assets/icons/island.png",
    },
    {
      title: "Crocodile Watching",
      description: "Explore river habitats and observe crocodiles in their natural environment.",
      icon: "src/assets/icons/crocodile.png",
    },
    {
      title: "Whale Watching",
      description: "Unforgettable ocean adventures to witness the giants of the sea.",
      icon: "src/assets/icons/whale.png",
    },
    {
      title: "Turtle Breeding",
      description: "Visit conservation sites and learn about sea turtle protection.",
      icon: "src/assets/icons/sea-turtle.png",
    },
    {
      title: "Wildlife Safaris",
      description: "Experience national parks and see elephants, leopards, and exotic birds.",
      icon: "src/assets/icons/lion.png",
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-[10px] md:text-xs text-gray-500 tracking-[0.2em] mb-2">
            EXPERIENCE THE BEST
          </p>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3">
            Services
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
            From seamless airport transfers to thrilling wildlife adventures,
            Wheels & Waves UK offers experiences that make your island journey unforgettable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              {/* Icon Circle - green background like image */}
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-green-100 flex items-center justify-center mb-4 md:mb-6 overflow-hidden p-2">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xs md:text-base font-bold text-gray-900 mb-2 md:mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[10px] md:text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-blue-700 transition text-sm md:text-base">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}

export default Service;

