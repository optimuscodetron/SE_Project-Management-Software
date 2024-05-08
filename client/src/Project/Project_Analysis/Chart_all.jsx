//Project_Analysis
// Chart_all.jsx
import React, { useEffect, useState } from "react";
import ChartComponent from "./chart_status.jsx";
import ChartComponent1 from "./chart_mem.jsx";
import ChartComponent2 from "./chart_sprint.jsx";
import { useNavigate } from "react-router-dom";

const Tabs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isUserLoggedIn = () => {
      const cookies = document.cookie.split(";");
      console.log(document.cookie);
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith("usertoken=")) {
          const token = cookie.substring("usertoken=".length, cookie.length);
          // If token has some value, return true indicating user is logged in
          if (token) {
            return true;
          }
        }
      }
      // If no token found or token is empty, return false
      return false;
    };

    // Check if the user is logged in
    const isLoggedIn = isUserLoggedIn();
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login");
    }
  },[]);
  const [activeTab, setActiveTab] = useState("Status");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Status":
        return <ChartComponent />;
      case "Sprint":
        return <ChartComponent2 />;
      case "Member":
        return <ChartComponent1 />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "Status" ? "active" : ""}`}
          onClick={() => setActiveTab("Status")}
        >
          Status
        </button>
        <button
          className={`tab-btn ${activeTab === "Sprint" ? "active" : ""}`}
          onClick={() => setActiveTab("Sprint")}
        >
          Sprint
        </button>
        <button
          className={`tab-btn ${activeTab === "Member" ? "active" : ""}`}
          onClick={() => setActiveTab("Member")}
        >
          Member
        </button>
      </div>
      <div className="content">{renderTabContent()}</div>

      <style jsx>{`
        .container {
          background-color: #171e28;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .tabs {
          display: flex;
          justify-content: center;
          padding: 10px;
          background-color: #171e28; /* Your gradient colors */
        }
        .content {
          flex-grow: 1;
          overflow: auto;
          height: calc(100% - 40px); /* Adjust as needed */
        }
        .tab-btn {
          padding: 10px 20px;
          background-color: transparent;
          border: none;
          color: #ccc;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          outline: none;
          transition: color 0.3s;
        }
        .tab-btn.active {
          color: #48bb78;
          border-bottom: 2px solid #48bb78;
        }
        .tab-btn:hover {
          color: #48bb78;
        }
        .tab-btn:not(:last-child) {
          margin-right: 20px;
        }
      `}</style>
    </div>
  );
};

export default Tabs;
