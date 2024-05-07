import ProjectSettingGeneral from "./ProjectSettingGeneral";
import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import activeProjectSlice from "../../../redux/ProjectData/activeProjectSlice";


const mockStore = createStore(() => ({
    workspaceNameId: {
        value: {
            name: 'Mock Workspace',
            id: 'mock_workspace_id',
        },
    },
    activeProject: {
        value: {
            name: 'mock project',
            status: true,
            discription: 'project test 1',
            id: 'mock_project_id'
        }
    }
}));

describe('Project General Setting Testing', () => {
    it('Render Correctly', () => {
        const { getByText } = render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <ProjectSettingGeneral />
                </BrowserRouter>
            </Provider>
        );
        expect(getByText("Project Details")).toBeInTheDocument();
    });

    it("Fill the form correctly", () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <ProjectSettingGeneral />
                </BrowserRouter>
            </Provider>
        );

        // Simulate user input and submit the form
        const inputNameElement = getByTestId('ProjectNameInput');
        fireEvent.change(inputNameElement, {
            target: { value: "Test Project" },
        });
        const inputDescriptionElement = getByTestId("ProjectDescriptionInput");
        fireEvent.change(inputDescriptionElement, {
            target: { value: "This is a test project." },
        });

        // You can add assertions here to check if the form submission works as expected
        // For example, you can check if a success message is displayed after submission
        expect(inputNameElement.value).toBe("Test Project");
        expect(inputDescriptionElement.value).toBe("This is a test project.");
    });


    it("Submits the form correctly", () => {
        const {getByTestId,  getByText } = render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <ProjectSettingGeneral />
                </BrowserRouter>
            </Provider>
        );
        const inputNameElement = getByTestId('ProjectNameInput');
        fireEvent.change(inputNameElement, {
            target: { value: "" },
        });

        fireEvent.click(getByText('Submit'));
        // Simulate user input and submit the form
        expect(getByText("Project name must not be empty.")).toBeInTheDocument();

    });
});