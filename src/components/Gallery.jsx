import React from "react";

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 px-4">
      <h2 className="text-3xl text-center text-gray-800 mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center shadow-lg rounded-lg overflow-hidden">
          <img src="event1.jpg" alt="Event 1" className="w-full h-48 object-cover" />
          <p className="mt-2 text-gray-600">Annual Sports Day - 20th Nov 2024</p>
        </div>
        <div className="text-center shadow-lg rounded-lg overflow-hidden">
          <img src="event2.jpg" alt="Event 2" className="w-full h-48 object-cover" />
          <p className="mt-2 text-gray-600">Science Exhibition - 20th Nov 2024</p>
        </div>
        <div className="text-center shadow-lg rounded-lg overflow-hidden">
          <img src="event3.jpg" alt="Event 3" className="w-full h-48 object-cover" />
          <p className="mt-2 text-gray-600">Cultural Fest - 10th Oct 2024</p>
        </div>
        <div className="text-center shadow-lg rounded-lg overflow-hidden">
          <img src="event4.jpg" alt="Event 4" className="w-full h-48 object-cover" />
          <p className="mt-2 text-gray-600">Art Competition - 5th Sept 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
