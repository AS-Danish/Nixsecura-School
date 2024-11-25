import React, { useState } from 'react';

const LoginForm = () => {
  const [userType, setUserType] = useState('student');
  const [studentID, setStudentID] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === 'student' && studentID === '') {
      setErrorMessage('Student ID is required');
      return;
    }
    if (userType === 'management' && username === '') {
      setErrorMessage('Username is required');
      return;
    }
    if (password === '') {
      setErrorMessage('Password is required');
      return;
    }

    // Reset error message
    setErrorMessage('');

    // Mock login logic (replace with actual API call)
    if (userType === 'student') {
      console.log(`Logging in as Student with ID: ${studentID}`);
    } else {
      console.log(`Logging in as Management with Username: ${username}`);
    }
    // Clear fields after submission
    setStudentID('');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>

        {/* User Type Selection */}
        <div className="mb-6 flex justify-center">
          <label className="mr-6 cursor-pointer">
            <input
              type="radio"
              value="student"
              checked={userType === 'student'}
              onChange={() => setUserType('student')}
              className="mr-2"
            />
            <span className="text-lg text-gray-700">Student</span>
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              value="management"
              checked={userType === 'management'}
              onChange={() => setUserType('management')}
              className="mr-2"
            />
            <span className="text-lg text-gray-700">Management</span>
          </label>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-center">
            {errorMessage}
          </div>
        )}

        {/* Login Forms */}
        {userType === 'student' ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Student ID</label>
              <input
                type="text"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
                placeholder="Enter your Student ID"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3949ab] text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Student Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your Username"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3949ab] text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Management Login
            </button>
          </form>
        )}

        {/* Forgot Password */}
        <div className="text-center mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
