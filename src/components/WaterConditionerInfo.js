import React from 'react';

const WaterConditionerInfo = () => {
  return (
    <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-3xl shadow-lg bg-white/70 backdrop-blur-md p-6 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left Side: Text */}
        <div className="flex-1 w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What is a Water Conditioner?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Water conditioners are innovative devices that neutralize hard minerals in your water, preventing scale buildup without removing healthy minerals. They help soaps and shampoos lather better, protect your appliances and plumbing, and require zero maintenance—making them a smart, hassle-free solution for healthier water throughout your home.
          </p>
        </div>
        {/* Right Side: Video */}
              <div className="flex-1 w-full md:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-blue-200 bg-gradient-to-br from-white/60 to-blue-50 backdrop-blur-lg">
                      <div className="aspect-w-16 aspect-h-9">
                          <iframe
                              loading="lazy"
                              className="w-full h-full rounded-2xl"
                              src="https://www.youtube.com/embed/pmBFATVfSUw?autoplay=1&mute=1&controls=0&loop=1&playlist=pmBFATVfSUw"
                              title="What is a Water Conditioner?"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                          ></iframe>
                      </div>
                  </div>
              </div>
      </div>
    </section>
  );
};

export default WaterConditionerInfo; 