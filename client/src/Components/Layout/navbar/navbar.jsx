import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import UserPopUp from "./component/userPopUp";
const Navbar = (props) => {
  return (
    <nav className="fixed z-50 w-screen bg-[#171e28] border-b border-gray-200 dark:bg-[#171e28] dark:border-gray-700 h-16">
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

          <a href="#" className="flex ms-2 md:me-24 text-decoration-none ">
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white dark:text-white">
              TrackerX
            </span>
          </a>
        </div>
        <UserPopUp />
      </div>
    </nav>
  );
};
export default Navbar;
