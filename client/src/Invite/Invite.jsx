import React, { useState } from 'react';
import WorkspaceSidebar from '../Workspace/components/workspaceSidebar/workspaceSidebar';
import Navbar from '../Components/Layout/navbar/navbar';
import Modal from "../UI/Modal";
import "./Invite.css";

function Invite(props) {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  const sendInvite = () => {
    // Temporary logic for sending invite by email
    const subject = "Invitation to Workspace";
    const body = `Hi,\n\nYou have been invited to join our workspace. Click on the following link to join:\n\n${generatedLink}\n\nRegards,`;
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const copyLink = () => {
    // Temporary logic for generating a random link
    const randomLink = `https://example.com/invite/${Math.random().toString(36).substring(7)}`;
    setGeneratedLink(randomLink);

    // Copy the generated link to the clipboard
    navigator.clipboard.writeText(randomLink)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy link: ", error);
      });
  }

  return (
    <Modal onClose={props.onCloseInviteMembers}>
     <div className=" flex justify-center items-center bg-grey"> 
    <div className=" max-w-md mx-auto bg-gray-300  p-4 shadow-md overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">Invite Co-workers to your workspace</h2>
      <div className="flex items-center mb-4">
        <input type="text" id="inviteLink" className="flex-grow px-4 py-2 bg-gray-100 rounded-l-lg focus:outline-none" readOnly value={generatedLink} />
        <button onClick={copyLink} className="bg-blue-700 text-white px-4 py-2 rounded-r-lg focus:outline-none hover:bg-blue-600">Copy Link</button>
      </div>
      {showForm ? (
        <form onSubmit={sendInvite}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            className="block w-full px-4 py-2 mb-4 bg-gray-100 rounded-lg focus:outline-none"
            required
          />
          <button type="submit" className="block w-full bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none mb-4 hover:bg-blue-600">Send Invite</button>
        </form>
      ) : (
        <button onClick={toggleForm} className="block w-full bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none mb-4 hover:bg-blue-600">Invite by Email</button>
      )}
    </div>
    </div>
</Modal>

  );
}

export default Invite;
