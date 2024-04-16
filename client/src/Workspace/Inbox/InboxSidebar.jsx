import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Inbox.css";
import InboxIssues from './InboxIssues';
//import IssueInfo from './Issue_Info';
import IssueInfo from "../../Project/ProjectIssues/IssueInfo/IssueInfo";
import { useSelector,useDispatch } from "react-redux";

// import { Axios } from "axios";
import axios from "axios";

const Inbox = (props) => {
  const [messages, setMessages] = useState([
    {
      id: 6,
      sender: 'Issue 1 ',
      subject: 'Alert',
      body: 'This is a message about upcoming meeting. Answer the poll for deciding meeting date.',
      isRead: false,
      relatedTask: {
        taskId: 'Task005',
        taskName: 'Meetings',
        deadline: '2024-04-10',
        completed: false,
      },
    },
    {
      id: 5,
      sender: 'Issue 2',
      subject: 'Alert',
      body: 'This is a message to ask info about your branch of the project.',
      isRead: true,
      relatedTask: {
        taskId: 'Task006',
        taskName: 'Merging',
        deadline: '2024-03-26',
        completed: true,
      },
    },
    {
      id: 1,
      sender: 'Issue 3',
      subject: 'Alert',
      body: 'This is a message about a project update.',
      isRead: false,
      relatedTask: {
        taskId: 'Task001',
        taskName: 'Implement User Authentication',
        deadline: '2024-04-15',
        completed: false,
      },
    },
    {
      id: 2,
      sender: 'Issue 4',
      subject: 'Alert',
      body: 'This is a message to remind you about a task.',
      isRead: true,
      relatedTask: {
        taskId: 'Task002',
        taskName: 'Update Dashboard UI',
        deadline: '2024-03-28',
        completed: true,
      },
    },
    {
      id: 3,
      sender: 'Issue 5',
      subject: 'Alert',
      body: 'The deadline for the UI redesign task has been extended to next week.',
      isRead: false,
      relatedTask: {
        taskId: 'Task003',
        taskName: 'Redesign User Interface',
        deadline: '2024-04-05',
        completed: false,
      },
    },
    {
      id: 4,
      sender: 'Issue 6',
      subject: 'Alert',
      body: 'I need to request some time off next month.',
      isRead: false,
      relatedTask: {
        taskId: 'Task004',
        taskName: 'Optimize Database Queries',
        deadline: '2024-04-15',
        completed: false,
      },
    },
    // Add more messages as needed
  ]);


  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [showIssueInfo, setShowIssueInfo] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filterOption, setFilterOption] = useState('all'); // Default filter option
  const [isOpen, setIsOpen] = useState(false); 
  const workspaceId = useSelector((state) => state.workspaceNameId.value.id);
  const [filteredList, setFilteredList] = useState([]); // Declare filteredList state variable


  const handleSelectMessage = (messageId) => {
    setSelectedMessageId(messageId);
    setShowIssueInfo(true);
  };

  const handleCloseIssueInfo = () => {
    setSelectedMessageId(null);
    setShowIssueInfo(false);
  };

  // Function to filter messages based on search input and filter option
  const filteredMessages = messages.filter(message => {
    // Filter by search input
    const searchMatch = message.sender.toLowerCase().includes(searchInput.toLowerCase()) ||
                       message.subject.toLowerCase().includes(searchInput.toLowerCase()) ||
                       message.body.toLowerCase().includes(searchInput.toLowerCase());
    // Filter by filter option
    const filterMatch = filterOption === 'all' || 
                        (filterOption === 'read' && message.isRead) ||
                        (filterOption === 'unread' && !message.isRead);
    return searchMatch && filterMatch;
  });

  const fetchInboxMessages = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/users/workspace/issues`,
        {
          params: {
            workspaceId,
          },
          withCredentials: true,
        }
      );
      const data = response.data.issues; // Assuming the response structure
      const formattedMessages = data.map((issue) => ({
        id: issue._id,
        title: issue.title,
        assigneeUsername: issue.assigneeUserID.username, // Assuming username field
        stage: issue.stage,
      }));
      setMessages(formattedMessages);
    } catch (error) {
      console.error("Error fetching inbox messages:", error);
      // Handle errors as needed
    }
  };

  useEffect(() => {
    fetchInboxMessages();
  }, [workspaceId]);
  // Filter by assignee
const handleFilterAssignee = (name) => {
  setFilteredList(messages.filter((message) => {
    // Check if assignee is defined before accessing toLowerCase()
    return message.assignee && message.assignee.toLowerCase() === name.toLowerCase();
  }));
};

// Filter by priority
const handleFilterPriority = (priority) => {
  setFilteredList(messages.filter((message) => {
    // Check if priority is defined before accessing toLowerCase()
    return message.priority && message.priority.toLowerCase() === priority.toLowerCase();
  }));
};

// Filter by project
const handleFilterProject = (projectId) => {
  setFilteredList(messages.filter((message) => {
    // Check if projectId is defined before accessing it
    return message.projectId === projectId;
  }));
};



  return (
    <div className="inbox-container bg-navy-700">
      <div className="inbox-content">
        <div className="message-list">
          {/* Search Input */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search messages..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            
      
            <div className="filter-dropdown">
            <select
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <option value="all">All</option>
              <option value="read">Read</option>
              <option value="unread">Unread</option>
            </select>
      <div className="dropdown-arrow"></div> {/* Arrow indicating dropdown */}
    </div>
          </div>
          {/* Message List */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className='flex justify-end mx-2'>
          <div onClick={props.onCloseInbox} className="close-button">
              &#x2716;   
            </div>
            <br></br>
            </div>
          <h2 className="inbox-title">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H28V28H4Z" fill="#007BFF" />
              <path d="M22 6L16 12L10 6L9 7L13 11L22 6Z" fill="#fff" />
              <path d="M12 18L8 22L7 21L11 17L16 21L15 22L12 18Z" fill="#fff" />
            </svg>
            Inbox
          </h2>
          <ul>
            {filteredMessages.map((message) => (
              <li
                key={message.id}
                className={`message-item ${selectedMessageId === message.id ? 'selected' : ''}`}
                onClick={() => handleSelectMessage(message.id)}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="message-sender">{message.sender}</div>
                <div className="message-subject">{message.subject}</div>
                {message.isRead && <div className="message-unread-dot"></div>}
              </li>
            ))}
          </ul>
        </div>
        {showIssueInfo && (
          <div className="issue-info">
            <div className="message-details">
              <IssueInfo onCloseIssueInfo={handleCloseIssueInfo}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;


  