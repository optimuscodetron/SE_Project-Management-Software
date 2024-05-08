import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import UserPopUp from "./component/userPopUp";
import Modal from '../../../UI/Modal';
import './navbar.css';
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    const isUserLoggedIn = () => {
      const cookies = document.cookie.split(";");
      console.log(document.cookie);
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith("usertoken=")) {
          const token = cookie.substring("usertoken=".length, cookie.length);
          // If token has some value, return true indicating user is logged in
          if (token) {
            return true;
          }
        }
      }
      // If no token found or token is empty, return false
      return false;
    };

    // Check if the user is logged in
    const isLoggedIn = isUserLoggedIn();
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login");
    }
  },[]);
  return (
    <nav className="z-50 w-screen bg-[#171e28] border-b border-gray-200 dark:bg-[#171e28] dark:border-gray-700 h-16 custom-navbar">
      <div className="flex items-center justify-between h-16 px-3">
        <div className="flex items-center justify-start rtl:justify-end">

          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={props.showSideBarHandler}
          >
            <span className="sr-only">Open sidebar</span>
            <GiHamburgerMenu />
          </button>
          <NavLink to="/workspace" className="flex ms-2 md:me-24 text-decoration-none ">
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white dark:text-white">
              TrackerX
            </span>
          </NavLink>

        </div>
        <UserPopUp />
      </div>
    </nav>
  );
};
export default Navbar;
