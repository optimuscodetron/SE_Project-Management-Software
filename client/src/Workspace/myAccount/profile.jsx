import React, { useState } from "react";
import WorkspaceSidebar from "../components/workspaceSidebar";

const Profile = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    email: "user@example.com", // Default email
    fullname: "John Doe", // Default full name
    username: "johndoe123", // Default username
  });

  // Function to handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send updated data to server)
  };

  return (
    <div className="flex flex-row w-screen">
      <div className="bg-[#1F2937] w-full min-h-screen flex flex-column items-center  justify-center">
        <div className="bg-[#111827] p-8 rounded-lg shadow-md w-[50%] text-white">
          <h1 className="text-3xl text-center font-semibold tracking-wider mb-2">
            Profile
          </h1>
          <p className="text-white text-center mb-6 ">
            Manage your TrackerX profile
          </p>

          <hr className="my-6" />

          <h2 className="text-lg font-medium mb-2">Profile Picture</h2>
          <div className="mb-6 flex items-center justify-center">
            <img
              src="profile.jpg" // Replace "profile.jpg" with your profile photo URL
              alt="Profile Photo"
              className="w-24 h-24 rounded-full bg-white border-4 border-[#000000]"
            />
          </div>

          <div className="mb-4 flex items-center">
            <label
              htmlFor="email"
              className="block text-white tracking-wider font-medium mb-2"
            >
              Email:
            </label>
            <p className="text-white mb-2 ml-2">{formData.email}</p>
          </div>

          <div className="mb-4 flex items-center">
            <label
              htmlFor="fullname"
              className="block text-white tracking-wider font-medium mr-20"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              className="flex-grow px-3 py-2 ml-80 rounded border text-black border-[#A7B3BA] focus:outline-none font-medium focus:border-[#1653E2]"
              placeholder="Enter your full name"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 flex items-center">
            <label
              htmlFor="username"
              className="block text-white  tracking-wider  font-medium mr-20"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="flex-grow px-3 py-2 ml-80 rounded border text-black  border-[#A7B3BA] focus:outline-none font-medium focus:border-[#1653E2]"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <button
            className="bg-[#9333EA] text-white font-semibold  tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-6"
            type="button"
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
