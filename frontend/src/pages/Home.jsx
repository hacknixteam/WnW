function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="relative h-screen">
        <img
          src="src/assets/images/sigiriya.jpg"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
       <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
  
  <div
    className="bg-green-500/20
    backdrop-blur-md
  text-white font-medium px-8 py-3
    shadow-lg shadow-green-500/40
    transition-all duration-300
    rounded-tr-[120px] rounded-bl-[120px]
    mb-6"
  >
    EXPLORE THE PEARL OF THE INDIAN OCEAN
  </div>


          <h1 className="text-5xl font-bold mt-6">
            EXPLORE SRI LANKA WITH COMFORT
          </h1>

          <p className="mt-4 max-w-2xl">
            Experience the Pearl of the Indian Ocean with premium tours and trusted vehicle rental services.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 px-6 py-3 rounded-full">
              Plan Your Trip
            </button>

            <button className="bg-green-500 px-6 py-3 rounded-full">
              Contact whatsapp
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;

