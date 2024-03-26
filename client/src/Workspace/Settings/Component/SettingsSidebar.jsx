import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Assuming you're using React Router
import { MdWorkspacesOutline } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const SettingsSidebar = (props) => {
 const location = useLocation();
 const array=location.pathname.split("/");
 const section=array[array.length-1];
 console.log(section);

  return (
    <div
      className={` fixed sm:relative custom-sidebar w-[12rem] md:w-[18rem] mt-16 z-10 overflow-hidden transition-transform ${
        props.showSideBar ? "" : "-translate-x-full"
      } bg-gray-900 border-r border-gray-200 sm:translate-x-0`}
    >
      <div className="text-white  p-2 ">
        <div className="box-border mt-1 text-center border-b-[1px]">
          <h1 className="text-3xl tracking-wide font-medium mb-3">Settings</h1>
        </div>

        <div className="flex flex-col ml-[2vw] my-4 mr-1">

          <Link to="/workspace/settings/general"  className={`flex items-center justify-around p-2 ${ section==="general" ? "bg-gray-700" : "" 
            } hover:bg-gray-700 text-white h-12 my-[6px] rounded-md no-underline hover:no-underline`}
          >
            <MdWorkspacesOutline  />
            <div>
              General
            </div>
            <div></div>
          </Link>

          <Link to="/workspace/settings/members"  className={`flex items-center  justify-around p-2 ${ section==="members" ? "bg-gray-700" : "" 
            } hover:bg-gray-700 text-white h-12 my-[6px] rounded-md no-underline hover:no-underline`}
          >
            <FaUsers />
            <div className="pl-1">
              Members
          </div>
          <div></div>
            </Link>

            <Link to="/workspace/settings/profile"  className={`flex items-center  justify-around p-2 ${ section==="profile" ? "bg-gray-700" : "" 
            } hover:bg-gray-700 text-white h-12 my-[6px] rounded-md no-underline hover:no-underline`}
          >
            <CgProfile  />
           <div className="pr-3">
              Profile
          </div>
          <div></div>
          
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;
