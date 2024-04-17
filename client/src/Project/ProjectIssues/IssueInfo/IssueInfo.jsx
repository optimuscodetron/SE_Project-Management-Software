import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import TitleDescrip from "./Components/TitleDescrip";
import Comment from "./Components/Comment";
import RightBar from "./Components/RightBar";
import axios from 'axios';
import { activeIssueSlice } from '../../../redux/issueId/activeIssueSlice'

function IssueInfo() {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const activeIssue = useSelector((state) => state.activeIssue.value);
  console.log("active issue",activeIssue._id);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth <= 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
