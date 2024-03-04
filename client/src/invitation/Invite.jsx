import React from 'react';

function Invite() {
  const copyLink = () => {
    const linkInput = document.getElementById("inviteLink");
    linkInput.select();
    document.execCommand("copy");
  }

  const sendInvite = () => {
    // Implement your logic for sending invite by email
    alert("Invite sent successfully!");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-gray-200 rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Invite Co-workers</h2>
        <div className="flex items-center mb-4">
          <input type="text" id="inviteLink" className="flex-grow px-4 py-2 bg-gray-100 rounded-l-lg focus:outline-none" readOnly value="Generated Link" />
          <button onClick={copyLink} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg focus:outline-none">Copy Link</button>
        </div>
        <button onClick={sendInvite} className="block w-full bg-green-500 text-white py-2 px-4 rounded-lg focus:outline-none mb-4">Invite by Email</button>
      </div>
    </div>
  );
}

export default Invite;
