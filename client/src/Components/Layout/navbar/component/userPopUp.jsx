import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../../../../UI/Modal";
const UserPopUp = () => {
  const nameInitials = "NG";

  const [userInfo, setUserInfo] = useState(false);
  const openUserInfoHandler = () => {
    setUserInfo((prevState)=>!prevState);
  };
  const closeUserInfoHandler = () => {
    setUserInfo(false);
  };

  const userName = "Nikhil Garg";

  const userEmailId = "nikhilgarg@gmail.com";
  return (
    <div className="flex flex-col relative">
      <button
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        className="text-white bg-blue-700 hover:bg-blue-800 hover:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center "
        type="button"
        onClick={openUserInfoHandler}
      >
        {nameInitials}
      </button>
      {userInfo && (
        <Modal onClose={closeUserInfoHandler} top={"28px"} left={"75px"} right={"0px"}>
          <div
            className={`z-10 bg-gray-900 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-10 right-0` }
           >
            <div className="px-4 py-3 text-sm text-white dark:text-white">
              <div>{userName}</div>
              <div className="font-medium truncate">{userEmailId}</div>
            </div>

            <ul className="text-sm text-gray-700 dark:text-gray-200 p-0">
              <li>
                <NavLink
                  to="/workspace"
                  className="flex  text-white justify-center w-full py-2 text-decoration-none "
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/workspace/settings/profile"}
                  className="flex text-white justify-center w-full py-2 text-decoration-none"
                >
                  Settings
                </NavLink>
              </li>
            </ul>
            <div className="">
              <NavLink
                to="/"
                className="flex text-white justify-center w-full py-2 text-sm text-decoration-none  "
              >
                Sign out
              </NavLink>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
export default UserPopUp;
