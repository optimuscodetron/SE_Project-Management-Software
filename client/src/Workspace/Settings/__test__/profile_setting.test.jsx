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

  it("renders and handles form inputs correctly", () => {
    const nameInput = screen.getByPlaceholderText("Enter Name");
    const usernameInput = screen.getByPlaceholderText("Enter username");
    expect(nameInput).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    fireEvent.change(nameInput, { target: { value: "New Name" } });
    fireEvent.change(usernameInput, { target: { value: "newusername" } });

    expect(nameInput.value).toBe("New Name");
    expect(usernameInput.value).toBe("newusername");
  });

  it("displays profile picture correctly", () => {
    const profilePic = screen.getByAltText("");
    expect(profilePic).toBeInTheDocument();
    expect(profilePic.src).toContain(
      "https://t3.ftcdn.net/jpg/05/79/55/26/360_F_579552668_sZD51Sjmi89GhGqyF27pZcrqyi7cEYBH.jpg"
    );
  });

  it("handles button interactions correctly", () => {
    const updateButton = screen.getByText("Update");
    expect(updateButton).toBeInTheDocument();
    fireEvent.click(updateButton);

  });

  it("renders correct placeholder text in inputs", () => {
    expect(screen.getByPlaceholderText("Enter Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

  it("handles sidebar toggle correctly", () => {
    const navbar = screen.getByRole("navigation");
    fireEvent.click(navbar);
  });

  it('allows user to update fullname and username fields',() => {

    fireEvent.change(screen.getByPlaceholderText('Enter Name'), { target: { value: 'Updated User' } });
    fireEvent.change(screen.getByPlaceholderText('Enter username'), { target: { value: 'updateduser' } });
    expect(screen.getByPlaceholderText('Enter Name').value).toBe('Updated User');
    expect(screen.getByPlaceholderText('Enter username').value).toBe('updateduser');

  });

  it('submits the form and updates the profile', async () => {

    axios.put.mockResolvedValueOnce({ data: { success: true } });
    fireEvent.change(screen.getByPlaceholderText('Enter Name'), { target: { value: 'Updated User' } });
    fireEvent.change(screen.getByPlaceholderText('Enter username'), { target: { value: 'updateduser' } });
    fireEvent.click(screen.getByText('Update'));
    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledTimes(1);
      expect(screen.getByText('Profile updated successfully!')).toBeInTheDocument();
    });

  });

  it('handles errors during profile update', async () => {

    axios.put.mockRejectedValueOnce(new Error('Error updating profile'));
    fireEvent.change(screen.getByPlaceholderText('Enter Name'), { target: { value: 'Updated User' } });
    fireEvent.change(screen.getByPlaceholderText('Enter username'), { target: { value: 'updateduser' } });
    fireEvent.click(screen.getByText('Update'));
    await waitFor(() => {
      expect(screen.getByText('Error updating profile!')).toBeInTheDocument();
    });

  });
});
