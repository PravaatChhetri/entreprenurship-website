import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    cid: '',
    email: '',
    mobile: '',
    gender: '',
    status: '',
    dob: '',
    password: '',
    termsAccepted: false,
  });

  const { name, cid, email, mobile, gender, status, dob, password, termsAccepted } = formData;

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
    if (!name || !cid || !email || !mobile || !gender || !status || !dob || !password || !termsAccepted) {
      alert('Please fill in all the fields');
    } else {
      // Form submission logic goes here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-[500px] max-w-md border-2 border-[#FFA500]">
        <h2 className="text-3xl font-semibold mb-4">Registration Form</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-orange-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="cid" className="text-gray-700">
              CID/Passport Number
            </label>
            <input
              type="text"
              id="cid"
              name="cid"
              value={cid}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-orange-500"
              placeholder="Enter your CID/Passport number"
            />
          </div>
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-orange-500"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="text-gray-700">
              Mobile No
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={mobile}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-orange-500"
              placeholder="Enter your mobile number"
            />
          </div>
          <div>
            <label htmlFor="gender" className="text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-orange-500"
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="status" className="text-gray-700">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={status}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-orange-500"
            >
              <option value="">Select your status</option>
              <option value="mentor">Mentor</option>
              <option value="mentee">Mentee</option>
            </select>
          </div>
          <div>
            <label htmlFor="dob" className="text-gray-700">
              DOB
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-orange-500"
            />
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-orange-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              checked={termsAccepted}
              onChange={handleTermsCheckboxChange}
              className="form-checkbox h-4 w-4 text-orange-500 rounded"
            />
            <label htmlFor="termsAccepted" className="ml-2 text-gray-700">
              I accept the terms and policies
            </label>
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
