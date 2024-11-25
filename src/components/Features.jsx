import React from "react";

const Features = () => {
  return (
    <section id="features" className="bg-white py-16 px-4">
      <h2 className="text-3xl text-center text-gray-800 font-semibold mb-12">
        Why Choose Our School?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1: Experienced Faculty */}
        <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 min-h-[400px]">
          <div className="h-48 bg-gray-300 rounded-t-lg overflow-hidden">
            <img
              src="faculty.webp"
              alt="Experienced Faculty"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl text-gray-800 font-semibold mt-4">Experienced Faculty</h3>
          <p className="text-gray-600 mt-2">
            Our school prides itself on having highly qualified and experienced teachers who are dedicated to providing quality education.
          </p>
        </div>

        {/* Feature 2: Holistic Education */}
        <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 min-h-[400px]">
          <div className="h-48 bg-gray-300 rounded-t-lg overflow-hidden">
            <img
              src="holy.webp"
              alt="Holistic Education"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl text-gray-800 font-semibold mt-4">Holistic Education</h3>
          <p className="text-gray-600 mt-2">
            We focus on the overall development of students, emphasizing not only academic excellence but also personal growth, creativity, and social responsibility.
          </p>
        </div>

        {/* Feature 3: Modern Infrastructure */}
        <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 min-h-[400px]">
          <div className="h-48 bg-gray-300 rounded-t-lg overflow-hidden">
            <img
              src="schoolArch.webp"
              alt="Modern Infrastructure"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl text-gray-800 font-semibold mt-4">Modern Infrastructure</h3>
          <p className="text-gray-600 mt-2">
            Our campus is equipped with state-of-the-art classrooms, sports facilities, and recreational areas designed to provide a comfortable and engaging learning environment.
          </p>
        </div>

        {/* Feature 4: Extra-Curricular Activities */}
        <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 min-h-[400px]">
          <div className="h-48 bg-gray-300 rounded-t-lg overflow-hidden">
            <img
              src="extra.webp"
              alt="Extra-Curricular Activities"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl text-gray-800 font-semibold mt-4">Extra-Curricular Activities</h3>
          <p className="text-gray-600 mt-2">
            From music and art to sports and leadership programs, we offer a wide range of extracurricular activities to help children explore their interests and develop new skills.
          </p>
        </div>

        {/* Feature 5: Safe & Nurturing Environment */}
        <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 min-h-[400px]">
          <div className="h-48 bg-gray-300 rounded-t-lg overflow-hidden">
            <img
              src="enviroment.webp"
              alt="Safe & Nurturing Environment"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl text-gray-800 font-semibold mt-4">Safe & Nurturing Environment</h3>
          <p className="text-gray-600 mt-2">
            Our school maintains a secure and supportive environment where every child feels safe, valued, and motivated to achieve their best.
          </p>
        </div>

        {/* Feature 6: Parental Involvement */}
        <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 min-h-[400px]">
          <div className="h-48 bg-gray-300 rounded-t-lg overflow-hidden">
            <img
              src="parent.webp"
              alt="Parental Involvement"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl text-gray-800 font-semibold mt-4">Parental Involvement</h3>
          <p className="text-gray-600 mt-2">
            We believe in the importance of strong parent-school partnerships. We encourage and facilitate active involvement of parents in their child’s education and development.
          </p>
        </div>

        {/* Feature 7: Scholarship Opportunities */}
        <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 min-h-[400px]">
          <div className="h-48 bg-gray-300 rounded-t-lg overflow-hidden">
            <img
              src="scholarship.webp"
              alt="Scholarship Opportunities"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl text-gray-800 font-semibold mt-4">Scholarship Opportunities</h3>
          <p className="text-gray-600 mt-2">
            We offer various scholarship programs to support talented and deserving students, ensuring financial constraints don’t limit their potential.
          </p>
        </div>

        {/* Feature 8: Focus on Sustainability */}
        <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 min-h-[400px]">
          <div className="h-48 bg-gray-300 rounded-t-lg overflow-hidden">
            <img
              src="sustainability.webp"
              alt="Focus on Sustainability"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl text-gray-800 font-semibold mt-4">Focus on Sustainability</h3>
          <p className="text-gray-600 mt-2">
            Our school integrates sustainability into the curriculum and daily practices, teaching students the importance of environmental responsibility.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-600">
          Ready to join a community dedicated to nurturing your child’s growth and success? Apply today!
        </p>
        <a
          href="/admission"
          className="mt-6 inline-block bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition-all"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default Features;
