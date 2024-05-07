import { render, screen, fireEvent } from "@testing-library/react";
import CreateNewIssue from "./CreateNewIssue";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";


jest.mock("react-dom", () => ({
    ...jest.requireActual("react-dom"),
    createPortal: (node) => node,
}));

describe('Create New Issue Page Test', () => {


    const closeCreateIssue = jest.fn();

    const mockStore = createStore(() => ({
        userId: {
          value: "mockUserId",
        },
        activeProject: {
          value: {
            _id: "mockProjectId",
          },
        },
      }));

    test("Test text", () => {
        const {getByText} = render(
            <Provider store={mockStore}>
                    <CreateNewIssue
                        onCloseCreateIssue={closeCreateIssue}
                        isWorkspaceContext={true}
                        data-testid="create-issue-modal" />
            </Provider>
        );

        const expectedTexts = [
            "Workspace",
            "Issue Type",
            "Priority",
            "Cycle",
            "Cancel",
            "Create Issue",
        ];

        expectedTexts.forEach((text) => {
            expect(getByText(text)).toBeInTheDocument();
        });
    });

    test("Test input boxes", () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                    <CreateNewIssue
                        onCloseCreateIssue={closeCreateIssue}
                        isWorkspaceContext={true}
                        data-testid="create-issue-modal" />
            </Provider>
        );

        // Get the input boxes by their data-testid attributes
        const issuenameTextbox = getByTestId("textbox1");
        const descriptionTextbox = getByTestId("textbox2");

        // Check if the input boxes are rendered
        expect(issuenameTextbox).toBeInTheDocument();
        expect(descriptionTextbox).toBeInTheDocument();

        // Test typing in the input boxes
        fireEvent.change(issuenameTextbox, {
            target: { value: "Test1" },
        });
        fireEvent.change(descriptionTextbox, {
            target: { value: "Test2" },
        });

        // Check if the input values are updated correctly
        expect(issuenameTextbox.value).toBe("Test1");
        expect(descriptionTextbox.value).toBe("Test2");

        // Check the placeholders
        expect(issuenameTextbox.placeholder).toBe("Issue name ");
        expect(descriptionTextbox.placeholder).toBe("Description");
    });

    test("Test combobox", () => {
        render(
            <Provider store={mockStore}>
                    <CreateNewIssue
                        onCloseCreateIssue={closeCreateIssue}
                        isWorkspaceContext={true}
                        data-testid="create-issue-modal" />
            </Provider>
        );

        const issuetype = screen.getByTestId("combobox1");
        const assignee = screen.getByTestId("combobox2");
        const priority = screen.getByTestId("combobox3");
        const cycle = screen.getByTestId("combobox4");
        const project = screen.getByTestId("combobox5");

        expect(issuetype).toBeInTheDocument();
        expect(assignee).toBeInTheDocument();
        expect(priority).toBeInTheDocument();
        expect(cycle).toBeInTheDocument();
        expect(project).toBeInTheDocument();

        fireEvent.change(issuetype, { target: { value: "Bug" } });
        fireEvent.change(assignee, { target: { value: "Ji Ayush" } });
        fireEvent.change(priority, { target: { value: "Low" } });
        fireEvent.change(cycle, { target: { value: "Cycle 1" } });
        fireEvent.change(project, { target: { value: "Project 1" } });

        expect(issuetype.value).toBe("Bug");
        expect(assignee.value).toBe("Ji Ayush");
        expect(priority.value).toBe("Low");
        expect(cycle.value).toBe("Cycle 1");
        expect(project.value).toBe("Project 1");
    });

    test("Test date selection", () => {
        render(
            <Provider store={mockStore}>
                    <CreateNewIssue
                        onCloseCreateIssue={closeCreateIssue}
                        isWorkspaceContext={true}
                        data-testid="create-issue-modal" />
            </Provider>
        );

        // Get the DatePicker element
        const datePicker = screen.getByPlaceholderText("Due Date");

        // Check if the DatePicker element is rendered
        expect(datePicker).toBeInTheDocument();

        // Choose a dummy date (e.g., April 15, 2024)
        fireEvent.click(datePicker);
        const dummyDate = new Date("2024-04-15");
        fireEvent.change(datePicker, { target: { value: dummyDate } });

        expect(datePicker).toHaveValue("04/15/2024");
    });

    test("Test cancel dropdown", () => {
        const {getByTestId , getByText , queryByText}= render(
            <Provider store={mockStore}>
                    <CreateNewIssue
                        onCloseCreateIssue={closeCreateIssue}
                        isWorkspaceContext={true}
                        data-testid="create-issue-modal" />
            </Provider>
        );

        // Test cancel button clicks
        const cancelButton = getByText("Cancel");
        const createissueButton = getByText("Create Issue");


        // Simulate button clicks
        fireEvent.click(cancelButton);

        // Assert that the dropdown appears in the DOM
        const dropdownText = getByText(
            "Are you sure u want to discard this Issue?"
        );
        expect(dropdownText).toBeInTheDocument();

        //Get drop down buttons
        const dropdowncancel = getByTestId("dropdowncancel");
        const dropdowndiscard = getByTestId("dropdowndiscard");

        //check if they exist
        expect(dropdowncancel).toBeInTheDocument();
        expect(dropdowndiscard).toBeInTheDocument();

        // Simulate cancel button click in dropdown
        fireEvent.click(dropdowncancel);
        //Expect drop down gone
        expect(dropdownText).not.toBeInTheDocument();

        // Simulate discard button clicks
        fireEvent.click(cancelButton);
        fireEvent.click(dropdowndiscard);
        // //Expect drop down gone
        expect(dropdownText).not.toBeInTheDocument();


        //check create empty issue warning
        const issuenameTextbox = getByTestId("textbox1");
        expect(queryByText("Issue name cannot be empty")).not.toBeInTheDocument();

        // Check if the error message appears
        fireEvent.click(createissueButton);

        // expect(queryByText("Issue name cannot be empty")).toBeInTheDocument();

        // Test typing in the issue name
        fireEvent.change(issuenameTextbox, {
            target: { value: "Test_warn" },
        });

        fireEvent.click(createissueButton);
        // Check if the error message disappears after entering the issue name
        expect(queryByText("Issue name cannot be empty")).not.toBeInTheDocument();

    });

});