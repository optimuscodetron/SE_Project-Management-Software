import React, { useEffect, useState } from "react";
import axios from "axios";
import SettingsSidebar from "../Component/SettingsSidebar";
import { ToastContainer, toast } from 'react-toastify';

const Profile = () => {
  const [formData, setFormData] = useState({
    email: "", // Default email
    fullname: "", // Default full name
    username: "", // Default username
  });

  useEffect(() => {
    profile();
  }, []);

  const profile = async () => {
    const userId = "65feb964dcd23e30ac1d1b3f"; // Replace with the actual user ID
    try {
      const response = await axios.get(`http://localhost:8000/api/users/profile/${userId}`, {
        headers: {
          Authorization: "Bearer YOUR_AUTH_TOKEN",
        },
      });
      const userData = response.data;
      setFormData({
        email: userData.email,
        fullname: userData.name,
        username: userData.username,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = "65feb964dcd23e30ac1d1b3f"; // Replace with the actual user ID
    try {
      const response = await axios.put(`http://localhost:8000/api/users/profile/${userId}`, {
        fullname: formData.fullname,
        username: formData.username,
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer <your_token>",
        },
      });
      toast.success('Profile updated successfully!');
      console.log('Profile updated successfully:', response.data);
      // Optionally, you can show a success message or redirect the user to another page
    } catch (error) {
      console.error('Error updating profile:', error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className=" bg-[#1f2937] flex flex-row w-screen h-screen ">
      <SettingsSidebar />

      <div className="w-[40vw] ml-[36vw] flex items-center h-full  overflow-auto justify-center ">
        <div className="w-full bg-[#111827] h-[full] ">
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
                  src="https://t3.ftcdn.net/jpg/05/79/55/26/360_F_579552668_sZD51Sjmi89GhGqyF27pZcrqyi7cEYBH.jpg"
                  alt=""
                  className="w-[110px] h-[110px] rounded-full  bg-pink-500 border-4 border-[#000000]"
                />
              </div>
            </div>

            <div className="mb-4 text-lg flex items-center justify-between border-b border-gray-700 pb-3 pt-4">
              <label
                htmlFor="email"
                className="block text-white w-[50%] tracking-wide font-normal mb-2"
              >
                Email :
              </label>
              <div className=" border-[1px] w-[50%] h-10 px-2 py-1 border-gray-600 rounded-md bg-[rgb(15,19,29)] ">
                <p className="text-white  ">{formData.email}</p>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between border-b border-gray-700 pb-3">
              <label
                htmlFor="fullname"
                className="block text-white w-[50%] tracking-wide font-normal mr-[45%]"
              >
                Name :
              </label>
              <input
                type="text"
                id="fullname"
                className=" border-[1px] w-[50%] h-10 px-2 py-1 border-gray-600 rounded-md bg-[rgb(15,19,29)]"
                placeholder="Enter Name"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex items-center justify-between ">
              <label
                htmlFor="username"
                className="block text-white w-[50%] tracking-wide  font-normal mr-[45%]"
              >
                Username :
              </label>
              <input
                type="text"
                id="username"
                className="border-[1px] w-[50%] h-10 px-2 py-1 border-gray-600 rounded-md bg-[rgb(15,19,29)]"
                placeholder="Enter username"
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
      <ToastContainer />
    </div>
  );
};

export default Profile;