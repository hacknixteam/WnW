function Feedback() {
  const feedbacks = [
    {
      name: "James Thornton",
      country: "United Kingdom",
      image: "src/assets/icons/profile.png",
      review: "Absolutely brilliant service! Our driver was punctual, friendly, and incredibly knowledgeable about Sri Lanka.",
      rating: 5,
    },
    {
      name: "Sophie Müller",
      country: "Germany",
      image: "src/assets/icons/profile.png",
      review: "We had a wonderful island round trip with Wheels & Waves LK. Everything was organized perfectly.",
      rating: 5,
    },
    {
      name: "Luca Rossi",
      country: "Italy",
      image: "src/assets/icons/profile.png",
      review: "From airport pickup to final drop-off, the service was flawless. Very professional team with a personal touch.",
      rating: 5,
    },
    {
      name: "Emily Carter",
      country: "Australia",
      image: "src/assets/icons/profile.png",
      review: "The whale watching trip was the highlight of our holiday. The team was so passionate and knowledgeable.",
      rating: 4,
    },
    {
      name: "Hiroshi Tanaka",
      country: "Japan",
      image: "src/assets/icons/profile.png",
      review: "Excellent and reliable transport service. The driver spoke great English and helped us discover hidden places.",
      rating: 5,
    },
    {
      name: "Amara Diallo",
      country: "France",
      image: "src/assets/icons/profile.png",
      review: "A truly personalized experience. They delivered beyond our expectations. Best travel company in Asia.",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        style={{ width: 'clamp(10px, 1.1vw, 16px)', height: 'clamp(10px, 1.1vw, 16px)' }}
        fill={i < rating ? '#FBBF24' : '#E5E7EB'}
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
        .script-font { font-family: 'Dancing Script', cursive; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Feedback </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-5">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col p-3 md:p-5"
            >
              {/* Quote + Stars */}
              <div className="flex items-start justify-between mb-2">
                <svg style={{ width: 'clamp(14px, 1.8vw, 28px)', height: 'clamp(14px, 1.8vw, 28px)' }}
                  fill="#BFDBFE" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="flex items-center gap-0.5">
                  {renderStars(feedback.rating)}
                </div>
              </div>

              {/* Review */}
              <p style={{ fontSize: 'clamp(8px, 0.95vw, 14px)', lineHeight: '1.6' }}
                className="text-gray-600 flex-grow mb-3">
                "{feedback.review}"
              </p>

              {/* Profile - fixed at bottom */}
              <div className="flex items-center gap-2 pt-3 border-t border-gray-100 mt-auto">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  style={{ width: 'clamp(28px, 2.8vw, 44px)', height: 'clamp(28px, 2.8vw, 44px)' }}
                  className="rounded-full object-cover shadow-sm flex-shrink-0"
                />
                <div className="min-w-0 overflow-hidden">
                  <p style={{ fontSize: 'clamp(9px, 1vw, 15px)' }}
                    className="script-font text-gray-900 font-bold leading-tight truncate">
                    {feedback.name}
                  </p>
                  <p style={{ fontSize: 'clamp(7px, 0.75vw, 11px)' }}
                    className="text-gray-500 flex items-center gap-0.5 truncate">
                    <svg style={{ width: 'clamp(7px, 0.7vw, 11px)', height: 'clamp(7px, 0.7vw, 11px)' }}
                      fill="#22C55E" viewBox="0 0 24 24" className="flex-shrink-0">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="truncate">{feedback.country}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.location.href = '/review'}
            className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            style={{ fontSize: 'clamp(12px, 1vw, 16px)' }}
          >
            Read More Reviews
          </button>
        </div>

      </div>
    </section>
  );
}

export default Feedback;