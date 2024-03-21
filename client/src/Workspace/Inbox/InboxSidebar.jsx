import React, { useState } from 'react';
import WorkspaceSidebar from '../components/workspaceSidebar/workspaceSidebar'; // Assuming this component exists elsewhere in your project
import "./Inbox.css";
import Navbar from '../../Components/Layout/navbar/navbar';

const Inbox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'John Doe',
      subject: 'Project Update',
      body: 'This is a message about a project update.',
      isRead: false,
    },
    {
      id: 2,
      sender: 'Jane Smith',
      subject: 'Task Reminder',
      body: 'This is a message to remind you about a task.',
      isRead: true,
    },
  ]);
  const [selectedMessageId, setSelectedMessageId] = useState(null);

  const handleSelectMessage = (messageId) => {
    setSelectedMessageId(messageId);
  };

  return (
    <div className="inbox-container">
        
      <WorkspaceSidebar />
      <div className="inbox-content">
        <div className="message-list">
          <h2>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H28V28H4Z" fill="#007BFF" />
              <path d="M22 6L16 12L10 6L9 7L13 11L22 6Z" fill="#fff" />
              <path d="M12 18L8 22L7 21L11 17L16 21L15 22L12 18Z" fill="#fff" />
            </svg>
            Inbox
          </h2>
          <ul>
            {messages.map((message) => (
              <li
                key={message.id}
                className={`message-item ${
                  selectedMessageId === message.id ? 'selected' : ''
                }`}
                onClick={() => handleSelectMessage(message.id)}
              >
                <div className="message-sender">{message.sender}</div>
                <div className="message-subject">{message.subject}</div>
                {message.isRead && <div className="message-unread-dot"></div>}
              </li>
            ))}
          </ul>
        </div>
        {selectedMessageId && (
          <div className="message-details">
            <h2>{messages.find((m) => m.id === selectedMessageId)?.subject}</h2>
            <div className="message-sender">From: {messages.find((m) => m.id === selectedMessageId)?.sender}</div>
            <div className="message-body">{messages.find((m) => m.id === selectedMessageId)?.body}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
