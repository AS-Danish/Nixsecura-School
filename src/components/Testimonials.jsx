import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  useEffect(() => {
    // Optional Swiper configuration if needed (though the component should handle it)
  }, []);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm text-gray-500 font-medium block mb-2">STUDENT FEEDBACK</span>
          <h2 className="text-4xl font-bold text-gray-900">What Our Students Are Saying</h2>
          <p className="text-lg text-gray-600 mt-4">We take pride in providing excellent educational experiences. Here’s what our students have to say about us.</p>
        </div>

        {/* Swiper wrapper */}
        <Swiper
          spaceBetween={50}  // space between slides
          slidesPerView={1}  // default 1 slide visible
          loop={true}        // loop the slides
          autoplay={{        // autoplay the slides
            delay: 2500,     // delay between each slide transition
            disableOnInteraction: false,
          }}
          breakpoints={{     // responsive behavior
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true, // allow clicking pagination
          }}
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
              <div>
                <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-yellow-400" />
                  <span className="text-base font-semibold text-indigo-600">4.9</span>
                </div>
                <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                  "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily."
                </p>
              </div>
              <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                <img className="rounded-full h-10 w-10 object-cover" src="https://pagedone.io/asset/uploads/1696229969.png" alt="avatar" />
                <div className="block">
                  <h5 className="text-gray-900 font-medium mb-1">Jane D</h5>
                  <span className="text-sm leading-4 text-gray-500">CEO</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
              <div>
                <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-yellow-400" />
                  <span className="text-base font-semibold text-indigo-600">4.9</span>
                </div>
                <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                  "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before."
                </p>
              </div>
              <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                <img className="rounded-full h-10 w-10 object-cover" src="https://pagedone.io/asset/uploads/1696229994.png" alt="avatar" />
                <div className="block">
                  <h5 className="text-gray-900 font-medium mb-1">Harsh P.</h5>
                  <span className="text-sm leading-4 text-gray-500">Product Designer</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
              <div>
                <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-yellow-400" />
                  <span className="text-base font-semibold text-indigo-600">4.9</span>
                </div>
                <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                  "I’ve been using pagedone for 6 months now, and it has completely transformed my approach to planning and strategy."
                </p>
              </div>
              <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                <img className="rounded-full h-10 w-10 object-cover" src="https://pagedone.io/asset/uploads/1696230047.png" alt="avatar" />
                <div className="block">
                  <h5 className="text-gray-900 font-medium mb-1">Simi G.</h5>
                  <span className="text-sm leading-4 text-gray-500">Marketing Head</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
              <div>
                <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-yellow-400" />
                  <span className="text-base font-semibold text-indigo-600">4.9</span>
                </div>
                <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                  "I’ve been using pagedone for 6 months now, and it has completely transformed my approach to planning and strategy."
                </p>
              </div>
              <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                <img className="rounded-full h-10 w-10 object-cover" src="https://pagedone.io/asset/uploads/1696230047.png" alt="avatar" />
                <div className="block">
                  <h5 className="text-gray-900 font-medium mb-1">Simi G.</h5>
                  <span className="text-sm leading-4 text-gray-500">Marketing Head</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
