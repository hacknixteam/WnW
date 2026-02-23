function Destinations() {
  const trendingPlaces = [
    {
      name: "Ella",
      location: "Sri Lanka",
      img: "src/assets/images/ella.jpg",
      description: "A scenic hill town surrounded by tea plantations and misty mountains.",
    },
    {
      name: "Yala National Park",
      location: "Sri Lanka",
      img: "src/assets/images/yala.jpg",
      description: "Sri Lanka's most visited wildlife reserve, home to leopards and elephants.",
    },
    {
      name: "Sigiriya",
      location: "Sri Lanka",
      img: "src/assets/images/sigiriya.jpg",
      description: "Climb the 5th-century fortress in the sky, a UNESCO World Heritage site.",
    },
    {
      name: "Mirissa",
      location: "Sri Lanka",
      img: "src/assets/images/mirissa.jpg",
      description: "A laid-back beach town perfect for whale watching and surfing.",
    },
    {
      name: "Galle",
      location: "Sri Lanka",
      img: "src/assets/images/galle.jpg",
      description: "Enjoy stunning sunsets and fresh seafood on the southern coast.",
    },
    {
      name: "Nuwara Eliya",
      location: "Sri Lanka",
      img: "src/assets/images/nuwaraeliya.jpg",
      description: "Wander through emerald-green tea plantations that blanket the rolling hills, where the world's finest Ceylon tea has been cultivated since the 19th century.",
    }
    
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        .script-font { font-family: 'Dancing Script', cursive; }

        /* All cards share the same fluid text scale */
        .card-location  { font-size: clamp(7px,  1vw, 14px); }
        .card-name      { font-size: clamp(10px, 2vw, 36px); line-height: 1.1; }
        .card-desc      { font-size: clamp(7px,  0.9vw, 13px); line-height: 1.4; }
        .card-btn       { font-size: clamp(7px,  0.85vw, 13px); }
        .card-icon      { width: clamp(8px, 1vw, 16px); height: clamp(8px, 1vw, 16px); }
      `}</style>

      <div className="text-center mb-8 md:mb-12 px-4">
        <p className="text-xs text-gray-500 tracking-widest">EXPLORE THE ISLAND</p>
        <h2 className="text-2xl md:text-3xl font-bold">Trending Destinations</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded"></div>
      </div>

      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto" style={{ minWidth: '300px' }}>
          <div className="relative w-full" style={{ paddingBottom: '65%' }}>
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-2 sm:gap-4">

              {/* Ella - Large Card */}
              <div className="relative col-span-2 row-span-2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group">
                <img src={trendingPlaces[0].img} alt={trendingPlaces[0].name}
                  className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-2 sm:p-6 text-white">
                  <p className="card-location opacity-90 flex items-center gap-0.5 mb-0.5">
                    <svg className="card-icon inline-block flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {trendingPlaces[0].location}
                  </p>
                  <h3 className="script-font card-name font-bold mb-0.5 sm:mb-1">{trendingPlaces[0].name}</h3>
                  <p className="card-desc opacity-80 mb-1 sm:mb-3 max-w-xs">{trendingPlaces[0].description}</p>
                  <button className="card-btn font-bold text-white border-b border-white hover:opacity-75 transition">
                    Explore Guide
                  </button>
                </div>
              </div>

              {/* Yala - Small Card */}
              <div className="relative col-span-1 row-span-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group">
                <img src={trendingPlaces[1].img} alt={trendingPlaces[1].name}
                  className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-2 sm:p-4 text-white">
                  <p className="card-location opacity-90 flex items-center gap-0.5 mb-0.5">
                    <svg className="card-icon inline-block flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {trendingPlaces[1].location}
                  </p>
                  <h4 className="script-font card-name font-bold mb-0.5">{trendingPlaces[1].name}</h4>
                  <p className="card-desc opacity-80 mb-1">{trendingPlaces[1].description}</p>
                  <button className="card-btn font-bold text-white border-b border-white hover:opacity-75 transition">
                    Explore Guide
                  </button>
                </div>
              </div>

              {/* Sigiriya - Small Card */}
              <div className="relative col-span-1 row-span-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group">
                <img src={trendingPlaces[2].img} alt={trendingPlaces[2].name}
                  className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-2 sm:p-4 text-white">
                  <p className="card-location opacity-90 flex items-center gap-0.5 mb-0.5">
                    <svg className="card-icon inline-block flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {trendingPlaces[2].location}
                  </p>
                  <h4 className="script-font card-name font-bold mb-0.5">{trendingPlaces[2].name}</h4>
                  <p className="card-desc opacity-80 mb-1">{trendingPlaces[2].description}</p>
                  <button className="card-btn font-bold text-white border-b border-white hover:opacity-75 transition">
                    Explore Guide
                  </button>
                </div>
              </div>

              {/* Mirissa - Medium Card */}
              <div className="relative col-span-2 row-span-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group">
                <img src={trendingPlaces[3].img} alt={trendingPlaces[3].name}
                  className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-2 sm:p-4 text-white">
                  <p className="card-location opacity-90 flex items-center gap-0.5 mb-0.5">
                    <svg className="card-icon inline-block flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {trendingPlaces[3].location}
                  </p>
                  <h4 className="script-font card-name font-bold mb-0.5">{trendingPlaces[3].name}</h4>
                  <p className="card-desc opacity-80 mb-1">{trendingPlaces[3].description}</p>
                  <button className="card-btn font-bold text-white border-b border-white hover:opacity-75 transition">
                    Explore Guide
                  </button>
                </div>
              </div>

              {/* Galle - Medium Card */}
              <div className="relative col-span-2 row-span-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group">
                <img src={trendingPlaces[4].img} alt={trendingPlaces[4].name}
                  className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-2 sm:p-4 text-white">
                  <p className="card-location opacity-90 flex items-center gap-0.5 mb-0.5">
                    <svg className="card-icon inline-block flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {trendingPlaces[4].location}
                  </p>
                  <h4 className="script-font card-name font-bold mb-0.5">{trendingPlaces[4].name}</h4>
                  <p className="card-desc opacity-80 mb-1">{trendingPlaces[4].description}</p>
                  <button className="card-btn font-bold text-white border-b border-white hover:opacity-75 transition">
                    Explore Guide
                  </button>
                </div>
              </div>

               {/* NuwaraEliya - Slightly larger by using custom grid column */}
               <div className="relative col-span-1 row-span-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group"
               style={{ gridColumn: 'span 1 / span 1', minWidth: '209%' }}>
               <img src={trendingPlaces[5].img} alt={trendingPlaces[5].name}
               className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-2 sm:p-4 text-white">
               <p className="card-location opacity-90 flex items-center gap-0.5 mb-0.5">
               <svg className="card-icon inline-block flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
               </svg>
               {trendingPlaces[5].location}
               </p>
               <h4 className="script-font card-name font-bold mb-0.5">{trendingPlaces[5].name}</h4>
               <p className="card-desc opacity-80 mb-1">{trendingPlaces[5].description}</p>
               <button className="card-btn font-bold text-white border-b border-white hover:opacity-75 transition">
               Explore Guide
               </button>
               </div>
               </div> 

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destinations;


