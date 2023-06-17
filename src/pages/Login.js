import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    status: '',
    password: '',
  });

  const { email, status, password } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTermsCheckboxChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      termsAccepted: !prevState.termsAccepted,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Verification logic goes here
    if (!email || !status || !password) {
      alert('Please fill in all the fields');
    } else {
      // Form submission logic goes here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-2 rounded-xl w-[500px] max-w-md border-2 shadow-2xl mb-10 border-orange-500">
        <h2 className="text-3xl font-semibold mb-4 text-center text-[#808080]">Log-In</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          
          <div>
            <label htmlFor="email" className="text-gray-700">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              placeholder="Enter your email address"
            />
          </div>
          
          
          <div>
            <label htmlFor="status" className="text-gray-700">
              Assigned to
            </label>
            <select
              id="status"
              name="status"
              value={status}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            >
              <option value="">Select your status</option>
              <option value="mentor">Mentor</option>
              <option value="mentee">Mentee</option>
            </select>
          </div>
          <div>
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
