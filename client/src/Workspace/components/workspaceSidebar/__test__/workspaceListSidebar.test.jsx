import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import Axios from "axios";
import { PiMonitorFill } from "react-icons/pi";
import WorkspaceListSidebar from "../components/workspacesListSidebar";
import { Provider } from "react-redux";
import { createStore } from "redux";

jest.mock("axios");

const mockHeaderInfo = jest.fn();
const mockOpenWorkspace = jest.fn();
const mockStore = createStore((state = {}) => state);

describe("WorkspaceListSidebar Component", () => {
  const initialProps = {
    headerInfo: mockHeaderInfo,
    openWorkspace: mockOpenWorkspace,
  };
  const renderComponent = (props) => {
    return render(
      <Provider store={mockStore}>
        <Router>
          <WorkspaceListSidebar {...initialProps} {...props} />
        </Router>
      </Provider>
    );
  };
  test("renders the component with initial state", async () => {
    renderComponent();

    // Check initial display and properties
    expect(screen.getByText("Workspace 1")).toBeInTheDocument();
    expect(mockHeaderInfo).toHaveBeenCalledWith({
      headerIcon: <PiMonitorFill />,
      headerTitle: "Workspace 1",
    });
  });

  // Test case for toggling workspaces list visibility
  test("toggles workspaces list visibility", async () => {
    renderComponent();

    // Click on the current workspace to toggle the list visibility
    fireEvent.click(screen.getAllByText("Workspace 1")[0]);

    // Check if the workspaces list is visible
    await waitFor(() => {
      expect(screen.getAllByText("Workspace 1")[1]).toBeInTheDocument();
      expect(screen.getByText("Workspace 2")).toBeInTheDocument();
      expect(screen.getByText("Workspace 3")).toBeInTheDocument();
    });
  });

});
