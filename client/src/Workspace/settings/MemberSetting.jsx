import React, { useState } from "react";

// Member data array
const membersData = [
  {
    id: 1,
    name: { profile_name: "Priyanshu", profile_img: "URL_TO_FIRST_IMAGE" },
    email: "member1@example.com",
    post: "Admin",
  },
  {
    id: 2,
    name: { profile_name: "Piyush", profile_img: "URL_TO_SECOND_IMAGE" },
    email: "member2@example.com",
    post: "User",
  },
  {
    id: 3,
    name: { profile_name: "Chetan seal", profile_img: "URL_TO_FIRST_IMAGE" },
    email: "member1@example.com",
    post: "Admin",
  },
  {
    id: 4,
    name: { profile_name: "Sushil koshta", profile_img: "URL_TO_SECOND_IMAGE" },
    email: "member2@example.com",
    post: "User",
  },
  {
    id: 5,
    name: { profile_name: "Kushagra sahu", profile_img: "URL_TO_FIRST_IMAGE" },
    email: "member1@example.com",
    post: "Admin",
  },
  {
    id: 6,
    name: { profile_name: "Akshay Kumar", profile_img: "URL_TO_SECOND_IMAGE" },
    email: "member2@example.com",
    post: "User",
  },
  {
    id: 7,
    name: { profile_name: "Ayush patel", profile_img: "URL_TO_FIRST_IMAGE" },
    email: "member1@example.com",
    post: "Admin",
  },
  {
    id: 8,
    name: { profile_name: "Rupesh", profile_img: "URL_TO_SECOND_IMAGE" },
    email: "member2@example.com",
    post: "User",
  },
  {
    id: 9,
    name: { profile_name: "Nandu", profile_img: "URL_TO_SECOND_IMAGE" },
    email: "member2@example.com",
    post: "User",
  },
  // Add more members as needed
];const Member = ({ name, email, post }) => {
  return (
    <tr className="border-b border-gray-100">
      <td className="py-2 px-4 items-center">
        <img
          src={name.profile_img}
          alt="Profile"
          className="inline-block mr-2"
          style={{ width: "20px", height: "20px" }}
        />
        <strong>{name.profile_name}</strong>
      </td>
      <td className="py-2 px-4">{email}</td>
      <td className="py-2 px-4">{post}</td>
      <td className="py-2 px-4 items-center">
        <button className="cursor-pointer">&#8226;&#8226;&#8226;</button>
      </td>
    </tr>
  );
};

const MemberList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inviteLink, setInviteLink] = useState(generateInviteLink());

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRefreshInviteLink = () => {
    const newInviteLink = generateInviteLink();
    setInviteLink(newInviteLink);
  };

  const handleCopyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink);
    // You can add visual feedback or notifications for successful copy here
  };

  const filteredMembers = membersData.filter((member) =>
    member.name.profile_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function generateInviteLink() {
    return "https://example.com/invite";
  }

  return (
    <div className="w-1/2 mx-auto mt-20">
      <div className="inviteBox mb-3 flex items-center justify-between">
        <span>Invite Link: </span>
        <input
          className="inviteLink form-control form-control-sm border-2"
          type="text"
          value={inviteLink}
          readOnly
        />
        <button
          className="refreshIcon cursor-pointer"
          onClick={handleRefreshInviteLink}
        >
          &#x21bb;
        </button>
        {/* Corrected class name: 'copyBox' */}
        <button
          className="copyBox cursor-pointer"
          onClick={handleCopyInviteLink}
          style={{ backgroundColor: "#6E79D6", color: "white" }}
        >
          Copy
        </button>
      </div>
      <div className="searchBox mb-3">
        <div className="searchInputContainer relative">
          <input
            className="searchInput form-control form-control-sm border-2 pl-8"
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ width: "15rem", paddingLeft: "2rem" }}
          />
          <i className="fas fa-search searchIcon absolute left-2 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <table className="border-b border-gray-100">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Post</th>
            <th className="py-2 px-4">Member Options</th>
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map((member) => (
            <Member
              key={member.id}
              name={member.name}
              email={member.email}
              post={member.post}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;