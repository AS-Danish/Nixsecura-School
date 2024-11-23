import React from "react";

const Login = () => {
  return (
    <section id="login" className="bg-gray-200 py-16 text-center">
      <h2 className="text-3xl text-gray-800 mb-6">Login</h2>
      <p className="text-gray-600 mb-8">Select your role to log in:</p>
      <div>
        <a href="teacher-login.html" className="bg-blue-700 text-white py-2 px-6 rounded-lg mr-4 hover:bg-blue-800">Teacher</a>
        <a href="student-login.html" className="bg-blue-700 text-white py-2 px-6 rounded-lg mr-4 hover:bg-blue-800">Student</a>
        <a href="admin-login.html" className="bg-blue-700 text-white py-2 px-6 rounded-lg mr-4 hover:bg-blue-800">Admin</a>
        <a href="principal-login.html" className="bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800">Principal</a>
      </div>
    </section>
  );
};

export default Login;
