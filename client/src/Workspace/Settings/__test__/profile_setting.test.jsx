import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Profile from "../Profile/Profile";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
jest.mock("axios");
const mockStore = createStore(() => ({
  workspaceNameId: {
    value: {
      name: "Mock Workspace",
      id: "mock_workspace_id",
    },
  },
}));

describe("Profile Component", () => {
  const mockUserProfile = {
    email: "test@example.com",
    fullname: "Test User",
    username: "testuser",
  };

  beforeEach(() => {
    axios.get.mockResolvedValueOnce({ data: mockUserProfile });
    render(
      <Provider store={mockStore}>
        <Router>
          <Profile />
        </Router>
      </Provider>
    );
  });
 

  it("renders all necessary UI elements", () => {
    expect(screen.getAllByText("Profile")[1]).toBeInTheDocument();
    expect(
      screen.getByText("Manage your TrackerX profile")
    ).toBeInTheDocument();
    expect(screen.getByText("Email :")).toBeInTheDocument();
    expect(screen.getByText("Name :")).toBeInTheDocument();
    expect(screen.getByText("Username :")).toBeInTheDocument();
    expect(screen.getByText("Update")).toBeInTheDocument();
  });


  it("displays profile picture correctly", () => {
    const profilePic = screen.getByAltText("");
    expect(profilePic).toBeInTheDocument();
    expect(profilePic.src).toContain(
      "https://t3.ftcdn.net/jpg/05/79/55/26/360_F_579552668_sZD51Sjmi89GhGqyF27pZcrqyi7cEYBH.jpg"
    );
  });


  it("renders correct placeholder text in inputs", () => {
    expect(screen.getByPlaceholderText("Enter Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

});
