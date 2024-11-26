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

  const reviews = [
    {
      rating: 4.9,
      review:
        "The teachers here really care about us. They make learning fun and are always ready to help us understand difficult topics. The support they provide has greatly improved my grades.",
      name: "Ayesha K.",
      role: "Grade 10 Student",
      avatar: "https://pagedone.io/asset/uploads/1696229969.png",
    },
    {
      rating: 4.8,
      review:
        "I've improved so much in my studies since joining this school. The extra help sessions and the friendly atmosphere make it a great place to learn. The teachers truly want to see us succeed.",
      name: "Ravi M.",
      role: "Grade 12 Student",
      avatar: "https://pagedone.io/asset/uploads/1696229969.png",
    },
    {
      rating: 5.0,
      review:
        "This school has the best extracurricular activities. From sports to arts, there’s something for everyone to get involved in. It’s great to see how they encourage personal growth in all areas.",
      name: "Sanjana T.",
      role: "Grade 11 Student",
      avatar: "https://pagedone.io/asset/uploads/1696229969.png",
    },
    {
      rating: 4.9,
      review:
        "The school’s library and computer labs are amazing. They provide us with all the resources we need for our projects and assignments. The environment here makes learning enjoyable.",
      name: "Mehul S.",
      role: "Grade 9 Student",
      avatar: "https://pagedone.io/asset/uploads/1696229969.png",
    },
    {
      rating: 4.7,
      review:
        "What I love most about this school is how approachable the teachers are. They’re always available for extra help after class, and that really makes a difference in how well I understand the material.",
      name: "Anjali P.",
      role: "Grade 8 Student",
      avatar: "https://pagedone.io/asset/uploads/1696229969.png",
    },
    {
      rating: 5.0,
      review:
        "The best part about this school is the community. Everyone is so supportive, and the teachers are always encouraging us to do our best. It feels like a second home, and I’m proud to be a student here.",
      name: "Karan D.",
      role: "Grade 10 Student",
      avatar: "https://pagedone.io/asset/uploads/1696229969.png",
    },
  ];

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
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
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
            clickable: true,
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                <div>
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                    <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-yellow-400" />
                    <span className="text-base font-semibold text-indigo-600">{review.rating}</span>
                  </div>
                  <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                    {review.review}
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img className="rounded-full h-10 w-10 object-cover" src={review.avatar} alt="avatar" />
                  <div className="block">
                    <h5 className="text-gray-900 font-medium mb-1">{review.name}</h5>
                    <span className="text-sm leading-4 text-gray-500">{review.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
