import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="py-24 bg-white" id='contact'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading and Text */}
        <div className="mb-16 text-center">
          <h2 className="font-manrope text-3xl font-bold leading-10 mb-4">
            School Admission & Enquiry
          </h2>
          <p className="text-gray-600 text-lg font-normal">
            For any questions regarding admission or general enquiries, feel free to contact us using the form below or reach out to us via phone or email.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <img 
                  src="students.webp" 
                  alt="ContactUs tailwind section" 
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply object-cover" 
                />
                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">Contact us</h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 block">
                    <a href="javascript:;" className="flex items-center mb-6">
                      <FontAwesomeIcon icon={faPhone} size="lg" className="text-indigo-700" />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">00000-00000</h5>
                    </a>
                    <a href="javascript:;" className="flex items-center mb-6">
                      <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-indigo-700" />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">example@gmail.com</h5>
                    </a>
                    <a href="javascript:;" className="flex items-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="text-indigo-700" />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">123 Sample Street, Example, AC 123456</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-4xl font-semibold leading-10 mb-11">Send Us A Message</h2>
            <input 
              type="text" 
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" 
              placeholder="Name"
            />
            <input 
              type="text" 
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" 
              placeholder="Email"
            />
            <input 
              type="text" 
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" 
              placeholder="Subject"
            />
            <textarea 
              className="w-full h-40 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none pl-4 mb-10" 
              placeholder="Message"
            />
            <button 
              type="submit" 
              className="text-base font-semibold text-white bg-indigo-700 rounded-full px-8 py-4 transition duration-300 ease-in-out hover:bg-indigo-800 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
