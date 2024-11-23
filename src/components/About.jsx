import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center gap-8 p-12"
    >
      {/* Left Side: Image */}
      <div className="flex-1 w-full lg:w-1/2">
        <img
          src="about.png"
          alt="About Us"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Side: Content */}
      <div className="flex-1 w-full lg:w-1/2">
        <h2 className="text-3xl text-gray-800 font-bold">About Us</h2>
        <p className="mt-4 text-gray-600 text-lg">
          Our platform offers a comprehensive solution for managing school
          operations, ensuring that teachers, students, and administrators can
          work collaboratively.
        </p>
        <p className="mt-4 text-gray-600 text-lg">
          Join us in revolutionizing education with state-of-the-art tools
          designed for modern institutions.
        </p>
        <p className="mt-4 text-gray-600 text-lg">
          We strive to create a seamless experience that empowers educational
          institutions to focus on what truly matters: fostering learning and
          development.
        </p>
        <p className="mt-4 text-gray-600 text-lg">
          With our intuitive platform, we aim to make administrative tasks more
          efficient, freeing up valuable time for both educators and students to
          engage more deeply in their academic journeys.
        </p>
        <p className="mt-4 text-gray-600 text-lg">
          Our system integrates advanced features like real-time data analytics
          to help educators track student progress and performance, making it
          easier to address individual needs and ensure no student is left behind.
        </p>
      </div>
    </section>
  );
};

export default About;
