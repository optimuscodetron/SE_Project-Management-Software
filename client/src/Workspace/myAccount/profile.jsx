import React from "react";
import WorkspaceSidebar from "../components/workspaceSidebar";

const profile = () => {
  return (
    <div className="flex flex-row w-screen">
  <WorkspaceSidebar></WorkspaceSidebar>
  <div className="bg-gray-100 w-full min-h-screen flex flex-column items-center  justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md w-[50%] ">
      <h1 className="text-3xl font-bold mb-2">Profile</h1>
      <p className="text-gray-600 mb-6">Manage your TrakerX profile</p>

      <hr className="my-6" />

      <h2 className="text-lg font-bold mb-2">Profile Picture</h2>
      <div className="mb-6 flex items-center justify-center">
        <img
          src="profile.jpg" // Replace "profile.jpg" with your profile photo URL
          alt="Profile Photo"
          className="w-24 h-24 rounded-full border-4 border-[#9333EA]"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-[#1F2937] font-bold mb-2"
        >
          Email
        </label>
        <p className="text-[#111827] mb-2">user@example.com</p>
      </div>

      <div className="mb-4">
        <label
          htmlFor="fullname"
          className="block text-[#1F2937] font-bold mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullname"
          className="w-full px-3 py-2 rounded border border-[#A7B3BA] focus:outline-none focus:border-[#1653E2]"
          placeholder="Enter your full name"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-[#1F2937] font-bold mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full px-3 py-2 rounded border border-[#A7B3BA] focus:outline-none focus:border-[#1653E2]"
          placeholder="Enter your username"
        />
      </div>

      <button
        className="bg-[#1653E2] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-6"
        type="button"
      >
        Update
      </button>

      <h2 className="text-lg font-bold mb-2">Google Calendar</h2>
      <div className="bg-[#1F2937] p-4 rounded-lg flex justify-between items-center">
        <p className="text-white">Connect with your Google Calendar</p>
        <button className="bg-[#1653E2] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Sign in with Google
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default profile;
