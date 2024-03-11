import React, { useState } from "react";
import WorkspaceSidebar from "../../components/workspaceSidebar";
// import SettingsSidebar from "../Components/SettingsSidebar";

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
    <div className=" bg-[#1f2937] flex flex-row w-screen h-screen">
      {/* <SettingsSidebar /> */}

      <div className="w-[40vw] ml-[36vw] flex items-center  justify-center ">
        <div className="w-full bg-[#111827] h-[68vh] ">
          <div className=" p-8 rounded-lg shadow-md  text-white">
            <h1 className="text-[42px] text-center font-normal tracking-wide mb-2">
              Profile
            </h1>
            <p className="text-gray-500 text-center mb-6 ">
              Manage your TrackerX profile
            </p>

            <hr className="my-6" />

            <div className=" ">
              <h2 className="text-lg font-normal mb-2">Profile Picture</h2>
              <div className="mb-6 flex items-center justify-center">
                <img
                  src="https://t3.ftcdn.net/jpg/05/79/55/26/360_F_579552668_sZD51Sjmi89GhGqyF27pZcrqyi7cEYBH.jpg" // Replace "profile.jpg" with your profile photo URL
                  alt=""
                  className="w-[110px] h-[110px] rounded-full  bg-pink-500 border-4 border-[#000000]"
                />
              </div>
            </div>

            <div className="mb-4 text-lg flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-white tracking-wide font-normal mb-2"
              >
                Email :
              </label>
              <div className=" border-[1px] w-[16vw] h-[44px] px-2 py-1 border-gray-600 rounded-md bg-[rgb(15,19,29)] ">
                <p className="text-white text-[20px] ">{formData.email}</p>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <label
                htmlFor="fullname"
                className="block text-white tracking-wide font-normal mr-[45%]"
              >
                Name :
              </label>
              <input
                type="text"
                id="fullname"
                className=" border-[1px] w-[16vw] h-[44px] px-2 py-1 border-gray-600 rounded-md bg-[rgb(15,19,29)]"
                placeholder="Enter your full name"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex items-center justify-between">
              <label
                htmlFor="username"
                className="block text-white  tracking-wide  font-normal mr-[45%]"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                className="border-[1px] w-[16vw] h-[44px] px-2 py-1 border-gray-600 rounded-md bg-[rgb(15,19,29)]"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <button
              className="bg-[#9333EA] mt-3 text-white font-semibold  tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="button"
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
