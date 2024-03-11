import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";

function Members() {
  // Array of team members
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Member" },
    {
      id: 3,
      name: "Ayush Sahu",
      email: "2021csb1077@iitrpr.ac.in",
      role: "Member",
    },
    {
      id: 4,
      name: "Chetan Kamble",
      email: "2021csb1079@iitrpr.ac.in",
      role: "Member",
    },
    {
      id: 5,
      name: "Khusboo Gupta",
      email: "2021csb1105@iitrpr.ac.in",
      role: "Member",
    },
    {
      id: 6,
      name: "Kushagra Sharma",
      email: "2021csb1107@iitrpr.ac.in",
      role: "Member",
    },
    {
      id: 7,
      name: "Manav Chauhan",
      email: "2021csb1108@iitrpr.ac.in",
      role: "Member",
    },
    {
      id: 8,
      name: "Nikhil Garg",
      email: "2021csb1077@iitrpr.ac.in",
      role: "Member",
    },
    {
      id: 9,
      name: "Patel Het",
      email: "2021csb1119@iitrpr.ac.in",
      role: "Member",
    },
    {
      id: 10,
      name: "Piyush Kumar",
      email: "2021csb1123@iitrpr.ac.in",
      role: "Member",
    },
    {
      id: 11,
      name: "Priyanshu Kumar",
      email: "2021csb1125@iitrpr.ac.in",
      role: "Member",
    },
    {
      id: 12,
      name: "Sushil Kumar",
      email: "2021csb1136@iitrpr.ac.in",
      role: "Member",
    },
    {
      id: 13,
      name: "Vavadiya Harsh",
      email: "2021csb1139@iitrpr.ac.in",
      role: "Member",
    },
    // Add more team members as needed
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // State for showing remove confirmation popup
  const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);
  const [memberToRemove, setMemberToRemove] = useState(null);

  // State for showing add member popup
  const [showAddMemberPopup, setShowAddMemberPopup] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState(""); // State for the email input

  // Function to handle adding a new member
  const handleAddMember = () => {
    // If newMemberEmail is not empty, proceed to add member
    if (newMemberEmail.trim() !== "") {
      // Add logic to add new member to the team
      console.log("Adding new member with email:", newMemberEmail);
      // Clear the email input and close the popup
      setNewMemberEmail("");
      setShowAddMemberPopup(false);
    }
  };

  // Function to remove a team member
  const handleRemoveMember = (memberId) => {
    setMemberToRemove(memberId);
    setShowRemoveConfirmation(true);
  };

  // Function to confirm removal of a team member
  const confirmRemoveMember = () => {
    setTeamMembers((prevMembers) =>
      prevMembers.filter((member) => member.id !== memberToRemove)
    );
    setShowRemoveConfirmation(false);
  };

  // Filter team members based on search query
  const filteredTeamMembers = teamMembers.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div class="flex flex-row w-screen">
      <Sidebar />
      <div className="bg-gray-800 w-full text-white justify-center p-10">
        <div className="flex flex-col mx-auto h-[100%] mb-4 w-full lg:w-[60%] bg-gray-900 p-3 ">
          <h1 className="text-3xl font-bold mb-4 border-b border-gray-600 pb-3">
            Team Members
          </h1>

          {/* Search Box */}
          <div className="flex justify-between mb-4">
            <input
              type="text"
              placeholder="Search members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-sm border-gray-600 text-white font-normal bg-[rgb(15,19,29)] text-base px-3 py-1 w-48 mr-2"
            />
            <button
              onClick={() => setShowAddMemberPopup(true)}
              className="inline-flex items-center px-4 py-2 bg-[#9333EA] rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:outline-none hover:bg-[#9233eac6] hover:ring hover:ring-indigo-300 disabled:opacity-25 transition "
            >
              Add Member
            </button>
            {showAddMemberPopup && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700 bg-opacity-50">
                <div className="bg-gray-900 text-center p-6 rounded-md shadow-md border-1 border-gray-700">
                  <h2 className="text-lg font-semibold mb-4">Add Member</h2>
                  {/* Email input field */}
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={newMemberEmail}
                    onChange={(e) => setNewMemberEmail(e.target.value)}
                    className="border border-gray-600 rounded-sm text-white font-normal bg-[rgb(15,19,29)] text-base px-3 py-1 mb-2"
                  />
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={handleAddMember}
                      className="text-center px-4 py-2 bg-[#9333EA] rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:outline-none hover:bg-[#9233eac6] hover:ring hover:ring-indigo-300 disabled:opacity-25 transition mr-2  w-[7vw]"
                    >
                      Add Member
                    </button>
                    <button
                      onClick={() => setShowAddMemberPopup(false)}
                      className="text-center font-semibold text-xs  uppercase tracking-widest hover:outline-none hover:ring hover:ring-indigo-300 disabled:opacity-25 transition bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400  w-[7vw] "
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* List of Team Members */}
          <div className="grid gap-2">
            {filteredTeamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-900 mx-4 border-b border-gray-600 pb-[-10px] flex justify-between items-center"
              >
                <div className="flex flex-col ">
                  <h2 className="text-lg ">{member.name}</h2>
                  <p className="text-gray-600 w-[10vw]">{member.email}</p>
                </div>
                <div>
                  <p className="text-white text-sm mx-4 my-auto">{member.role}</p>
                </div>
                <div className="flex items-center">
                  {/* <p className="text-gray-600 mx-4">{member.role}</p> */}
                  <button
                    onClick={() => handleRemoveMember(member.id)}
                    className="text-white hover:text-red-500 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4m0 9.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402"
                      />
                    </svg>
                  </button>
                  {showRemoveConfirmation && member.id === memberToRemove && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700 bg-opacity-50">
                      <div className="bg-gray-900 rounded-md border-1 border-gray-700 text-center p-6 shadow-md">
                      <h2 className="text-lg font-semibold mb-4">Remove Member?</h2>
                        <div className="flex justify-end mt-2">
                          <button
                            onClick={confirmRemoveMember}
                            className="bg-red-500 w-[6vw] text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 mr-2"
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => setShowRemoveConfirmation(false)}
                            className="bg-gray-300 w-[6vw] text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
