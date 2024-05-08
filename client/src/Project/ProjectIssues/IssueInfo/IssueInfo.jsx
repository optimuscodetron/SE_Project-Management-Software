import React, { useEffect, useState } from "react";
import TitleDescrip from "./Components/TitleDescrip";
import Comment from "./Components/Comment";
import RightBar from "./Components/RightBar";
import { useNavigate } from "react-router-dom";

function IssueInfo() {
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
    else{
      const handleResize = () => {
        setIsMediumScreen(window.innerWidth <= 1024);
      };
  
      handleResize(); // Initial check
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  },[]);
  const [isMediumScreen, setIsMediumScreen] = useState(false);


  const handleGoBack = () => {
    window.history.back();
  };


  
  return (
    <div class="flex flex-row h-screen w-screen">
      <aside className="z-1 bg-transparent px-2 py-3 translate-x-0 fixed">
        <button onClick={handleGoBack} className=" cursor-pointer ">
          <svg
            className=" h-8 w-8 text-gray-500 "
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </aside>
      <div className="flex flex-col w-full h-screen">
        {isMediumScreen && <RightBar  />}
      <div className="bg-gray-800 z-0 w-full h-full text-white justify-center p-10">
        <div
          className="flex flex-col rounded overflow-auto mx-auto h-[100%] mb-4 w-[90%] bg-gray-900"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(0,0,0,0) rgba(0,0,0,0)",
          }}
        >
          
          <TitleDescrip />
          <div className="mt-2 mx-2 my-2">
            <hr />
          </div>
          <Comment />
        </div>
      </div>

      </div>
      {!isMediumScreen && <RightBar />}
    </div>
  );
}

export default IssueInfo;
