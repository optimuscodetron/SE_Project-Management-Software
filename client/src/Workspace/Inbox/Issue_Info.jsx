import React, { useEffect, useState } from "react";
import TitleDescrip from "../../Project/ProjectIssues/IssueInfo/Components/TitleDescrip";
import Comment from "../../Project/ProjectIssues/IssueInfo/Components/Comment";
import RightBar from "../../Project/ProjectIssues/IssueInfo/Components/RightBar";

//import "./IssueInfo.css"; // Import the CSS file

function IssueInfo() {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

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
    <div class="flex flex-row h-screen w-screen overflow-hidden">
      <aside className="z-1 bg-transparent px-0 py-0 translate-x-0 fixed">
       { /*<button onClick={handleGoBack} className=" cursor-pointer ">
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
  </button>*/}
      </aside>
      <div className="flex flex-col w-full h-screen overflow-hidden">
        {isMediumScreen && <RightBar  />}
      <div className=" z-0 w-full h-full text-white justify-center p-0">
        <div
          className="flex flex-col rounded overflow-auto mx-auto h-[100%] mb-4 w-[90%] "
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

