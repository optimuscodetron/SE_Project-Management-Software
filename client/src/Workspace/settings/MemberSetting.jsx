// App.jsx
import React from 'react';
// import './tailwind.css'; // Include Tailwind CSS
// import './App.css'; // Add your custom styling in this file

const membersData = [
  { id: 1, name: 'Member Name 1', email: 'member1@example.com' },
  { id: 2, name: 'Member Name 2', email: 'member2@example.com' },
  // Add more members as needed
];

const MemberList = () => {
  return (
    <table className="table w-full border-collapse border border-gray-300 mt-8">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Member Options</th>
        </tr>
      </thead>
      <tbody>
        {membersData.map((member) => (
          <Member key={member.id} name={member.name} email={member.email} />
        ))}
      </tbody>
    </table>
  );
};

const Member = ({ name, email }) => {
  return (
    <tr className="border-b border-gray-300">
      <td className="py-2 px-4">
        <strong>{name}</strong>
        <br />
        {email}
      </td>
      <td className="py-2 px-4 text-right">
        <span className="cursor-pointer">&#8226;&#8226;&#8226;</span>
        {/* Add more options as needed */}
      </td>
    </tr>
  );
};

export default MemberList;
