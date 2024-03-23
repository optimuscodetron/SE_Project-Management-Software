import React, { useState } from "react";
import SettingsSidebar from "../Component/SettingsSidebar";
import Navbar from "../../../Components/Layout/navbar/navbar";

const Profile = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    email: "user@example.com", // Default email
    fullname: "John Doe", // Default full name
    username: "johndoe123", // Default username
  });

  const [showSidebar, setShowSidebar] = useState(false);

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

  const handleSidebar = () => {
    setShowSidebar((prevstate) => !prevstate);
  };

  return (
    <div>
      <Navbar showSideBarHandler={handleSidebar} />

    <div className=" bg-[#1f2937] fixed flex flex-row w-screen h-screen ">
      <SettingsSidebar showSideBar={showSidebar} />

      <div className="flex justify-center h-full w-full overflow-auto  ">
        <div className="w-[80vw] sm:w-[70vw] md:w-[50vw] mt-20  bg-[#111827] overflow-y-scroll py-5 px-16">
          <div className=" rounded-lg shadow-md  text-white">
            <h1 className="text-3xl text-center font-normal tracking-wide mb-2 ">
              Profile
            </h1>
            <p className="text-gray-500 text-center mb-6 ">
              Manage your TrackerX profile
            </p>

            <hr className="my-6" />

            <div className=" ">
              <h2 className="text-[16px] font-normal mb-2">Profile Picture</h2>
              <div className="mb-6 flex items-center justify-center">
                <img
                  src="https://t3.ftcdn.net/jpg/05/79/55/26/360_F_579552668_sZD51Sjmi89GhGqyF27pZcrqyi7cEYBH.jpg" // Replace "profile.jpg" with your profile photo URL
                  alt=""
                  className="w-[100px] h-[100px] rounded-full  bg-pink-500 border-4 border-[#000000]"
                />
              </div>
            </div>

            <div className="mb-4 md:text-[16px] text-sm  flex items-center justify-center md:justify-between border-b border-gray-700 pb-3 pt-3 ">
              <label
                htmlFor="email"
                className="block text-white w-[50%]  tracking-wide font-normal mb-2"
              >
                Email :
              </label>
              <input
               type="text"
               id="fullname"
               readOnly
               className=" border-[1px] w-[41vw]  md:w-[17vw] px-4 py-2 border-gray-600 rounded-md bg-gray-800 "
               value={formData.email}
               >
              </input>
            </div>


            <div className="mb-4 md:text-[16px] text-sm flex items-center justify-center md:justify-between border-b border-gray-700 pb-3">
              <label
                htmlFor="fullname"
                className="block text-white w-[50%] tracking-wide font-normal mb-2"
              >
                Name :
              </label>
              <input
                type="text"
                id="fullname"
                className=" border-[1px] w-[41vw] md:w-[17vw] px-4 py-2 outline-1 border-gray-600 rounded-md bg-[rgb(15,19,29)]"
                placeholder="Enter Name"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4  md:text-[16px] text-sm flex items-center justify-center md:justify-between border-b border-gray-700 pb-3">
              <label
                htmlFor="username"
                className="block text-white w-[50%] tracking-wide  font-normal mb-2"
              >
                Username :
              </label>
              <input
                type="text"
                id="username"
                className="border-[1px] w-[39vw] md:w-[17vw] px-4 py-2 border-gray-600 rounded-md bg-[rgb(15,19,29)]"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <button
              className="bg-[#9333EA] mt-[10px] text-white font-semibold  tracking-wide py-[6px] px-4 rounded focus:outline-none focus:shadow-outline "
              type="button"
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
