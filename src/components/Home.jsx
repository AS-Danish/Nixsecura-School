import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative text-white text-center py-28 overflow-hidden"
      style={{ background: "linear-gradient(120deg, #3949ab, #320c72)" }}
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {/* White dots in top left */}
        <div className="absolute top-8 left-8 grid grid-cols-4 gap-2 animate-float-slow">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
          ))}
        </div>
        {/* Orange triangle */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-triangle-slide">
          <svg width="120" height="120">
            <polygon points="60,10 110,110 10,110" fill="#f97316" />
          </svg>
        </div>

        {/* White square */}
        <div className="absolute right-10 bottom-12 w-16 h-16 bg-white opacity-40 animate-pulse"></div>
        {/* Orange diamond */}
        <div className="absolute right-1/3 bottom-24 transform rotate-45 w-20 h-20 bg-orange-500 opacity-50 animate-float-fast"></div>
        {/* White line */}
        <div className="absolute top-16 right-16 w-48 h-1 bg-white opacity-40 animate-slide-horizontal"></div>
        {/* Orange triangle rotated */}
        <div className="absolute top-1/3 right-8 transform rotate-12 animate-spin-slower">
          <svg width="80" height="80">
            <polygon points="40,10 70,70 10,70" fill="#f97316" />
          </svg>
        </div>
        {/* Larger white circle */}
        <div className="absolute bottom-10 left-24 w-24 h-24 bg-white rounded-full opacity-20 animate-pulse"></div>
        {/* Smaller orange diamond */}
        <div className="absolute bottom-16 left-1/4 transform rotate-45 w-10 h-10 bg-orange-500 opacity-50 animate-float-slow"></div>
        {/* Dotted line pattern */}
        <div className="absolute bottom-1/4 right-1/3 flex space-x-2 animate-slide-horizontal">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center relative z-10 px-4">
        {/* Left Side: Text Content */}
        <div className="xl:w-1/2 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Empowering Education with Seamless Management</h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl">Streamline education with modern tools for teachers, students, and admins.</p>
          <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 justify-center">
            {/* Register Now Button */}
            <a
              href="#register"
              className="bg-orange-500 text-white py-3 px-8 sm:py-4 sm:px-10 text-base sm:text-lg rounded-lg mb-4 sm:mb-0 hover:bg-orange-600 transition-all"
            >
              Register Now
            </a>
            {/* Learn More Button */}
            <a
              href="#features"
              className="bg-white text-blue-700 py-3 px-8 sm:py-4 sm:px-10 text-base sm:text-lg rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:text-white transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side: Images */}
        <div className="xl:w-1/2 mt-8 xl:mt-0 flex justify-center items-end space-x-4">
          {/* First Image with slightly smaller size, thicker border, and more rounded top-left corner */}
          <img
            src="home1.webp"
            alt="Image 1"
            className="w-36 sm:w-40 md:w-56 h-48 sm:h-56 md:h-72 object-cover rounded-tl-[5.5rem] rounded-tr-3xl border-8 rounded-xl border-white"
            loading="lazy"
          />
          {/* Second Image with slightly smaller height, aligned from the top */}
          <img
            src="home4.webp"
            alt="Image 2"
            className="w-36 sm:w-40 md:w-56 h-64 sm:h-72 md:h-96 object-cover object-top rounded-lg"
            loading="lazy"
          />
          {/* Third Image */}
          <img
            src="home3.webp"
            alt="Image 3"
            className="w-36 sm:w-40 md:w-56 h-48 sm:h-56 md:h-72 object-cover rounded-r-full border-8 rounded-xl border-white"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
