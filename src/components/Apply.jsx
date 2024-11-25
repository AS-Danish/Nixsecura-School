import React from "react";

const Apply = () => {
  return (
    <section id="apply" className="bg-gray-200 py-16 text-center">
      <h2 className="text-3xl text-gray-800 mb-6">Apply to Our School</h2>
      <p className="text-gray-600 mb-8">Join our institution and shape your future with quality education.</p>
      <p className="text-gray-600 mb-8">Fill out the form to start your admission process today!</p>
      <div>
        <a href="admission-form.html" className="bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800">
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default Apply;
