import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const ProjectSettingSidebar = ({ updateLoc, loc }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const handleGoBack = () => {
    window.history.back();
  };


  return (
    
    <div>
      {sidebarOpen ? (
        <aside
          class={`z-1 w-60 h-full transition-transform ${
            sidebarOpen ? "" : "-translate-x-full"
          } sm:translate-x-0 fixed sm:relative sm:h-full`}
        >
          <div
            class="h-screen overflow-auto px-2 py-2 bg-[#161c29]"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(0,0,0,0) rgba(0,0,0,0)",
            }}
          >
            <div class="flex">
              <button onClick={handleGoBack} className=" cursor-pointer ">
                <svg
                  className="h-7 w-7 text-gray-600"
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
              <h1 className="text-white text-center tracking-wide text-xl mx-auto">
                Project Setting
              </h1>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className=" cursor-pointer "
              >
                <svg
                  className="h-7 w-7 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <hr className="w-full h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-500" />
            <ul class="space-y-2 font-medium ">
              <li>
                <div
                  class={`flex items-center cursor-pointer p-2 ${
                    loc == "1" ? "bg-gray-700" : ""
                  } text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group no-underline hover:no-underline`}
                  onClick={() => {
                    updateLoc("1");
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path
                      fill-rule="evenodd"
                      d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="ms-3">General</span>
                </div>
              </li>

              <li>
                <div
                  class={`flex items-center cursor-pointer p-2 ${
                    loc == "2" ? "bg-gray-700" : ""
                  } text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group no-underline hover:no-underline`}
                  onClick={() => {
                    updateLoc("2");
                  }}
                >
                  <svg
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 2c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zM12 14c-2.667 0-8 1.333-8 4v2h16v-2c0-2.667-5.333-4-8-4z" />
                  </svg>

                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Team members
                  </span>
                </div>
              </li>

              <li>
                <div
                  class={`flex items-center cursor-pointer p-2 ${
                    loc == "3" ? "bg-gray-700" : ""
                  } text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group no-underline hover:no-underline`}
                  onClick={() => {
                    updateLoc("3");
                  }}
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
                    />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Cycles</span>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      ) : (
        <aside className="z-1 bg-transparent px-2 py-2 overflow-y-auto translate-x-0 fixed">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className=" cursor-pointer rounded-full  "
          >
            <svg
              className=" h-8 w-8 text-gray-600 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </aside>
      )}
    </div>
  );
};

export default ProjectSettingSidebar;
