import { render, screen, fireEvent } from "@testing-library/react";
import CreateNewProject from "./CreateNewProject";

jest.mock("react-dom", () => ({
    ...jest.requireActual("react-dom"),
    createPortal: (node) => node,
}));

test("Test text", () => {
    render(<CreateNewProject />);

    const expectedTexts = [
        "Workspace",
        "Project Status",
        "Lead",
        "Members",
        "Cancel",
        "Create Project",
    ];

    expectedTexts.forEach((text) => {
        const element = screen.getByText(text);
        expect(element).toBeInTheDocument();
    });
});

test("Test input boxes", () => {
    render(<CreateNewProject />);

    // Get the input boxes by their data-testid attributes
    const issuenameTextbox = screen.getByTestId("textbox1");
    const descriptionTextbox = screen.getByTestId("textbox2");

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
    expect(issuenameTextbox.placeholder).toBe("Project name");
    expect(descriptionTextbox.placeholder).toBe("Description (optional)");
});

test("Test combobox", () => {
    render(<CreateNewProject />);

    const projectstatus = screen.getByTestId("combobox1");
    const lead = screen.getByTestId("combobox2");
    const members = screen.getByTestId("combobox3");

    expect(projectstatus).toBeInTheDocument();
    expect(lead).toBeInTheDocument();
    expect(members).toBeInTheDocument();

    fireEvent.change(projectstatus, { target: { value: "Backlog" } });
    fireEvent.change(lead, { target: { value: "Ji Ayush" } });
    fireEvent.change(members, { target: { value: "Ji Ayush" } });

    expect(projectstatus.value).toBe("Backlog");
    expect(lead.value).toBe("Ji Ayush");
    expect(members).toHaveValue("Ji Ayush");
});

test("Test start date selection", () => {
    render(<CreateNewProject />);

    // Get the DatePicker element
    const datePicker = screen.getByPlaceholderText("Start Date");

    // Check if the DatePicker element is rendered
    expect(datePicker).toBeInTheDocument();

    // Choose a dummy date (e.g., April 15, 2024)
    fireEvent.click(datePicker);
    const dummyDate = new Date("2024-04-15");
    fireEvent.change(datePicker, { target: { value: dummyDate } });

    expect(datePicker).toHaveValue("04/15/2024");
});

test("Test target date selection", () => {
    render(<CreateNewProject />);

    // Get the DatePicker element
    const datePicker = screen.getByPlaceholderText("Target Date");

    // Check if the DatePicker element is rendered
    expect(datePicker).toBeInTheDocument();

    // Choose a dummy date (e.g., April 15, 2024)
    fireEvent.click(datePicker);
    const dummyDate = new Date("2024-04-15");
    fireEvent.change(datePicker, { target: { value: dummyDate } });

    expect(datePicker).toHaveValue("04/15/2024");
});

test("Test cancel dropdown", () => {
    render(<CreateNewProject />);

    // Test cancel button clicks
    const cancelButton = screen.getByText("Cancel");
    const createissueButton = screen.getByText("Create Project");

    // Simulate button clicks
    fireEvent.click(cancelButton);

    // Assert that the dropdown appears in the DOM
    const dropdownText = screen.getByText(
        "Are you sure u want to discard this project?"
    );
    expect(dropdownText).toBeInTheDocument();

    //Get drop down buttons
    const dropdowncancel = screen.getByTestId("dropdowncancel");
    const dropdowndiscard = screen.getByTestId("dropdowndiscard");

    //   check if they exist
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
    const issuenameTextbox = screen.getByTestId("textbox1");
    expect(
        screen.queryByText("Project name cannot be empty")
    ).not.toBeInTheDocument();

    // Check if the error message appears
    fireEvent.click(createissueButton);
    expect(
        screen.queryByText("Project name cannot be empty")
    ).toBeInTheDocument();

    // Test typing in the issue name
    fireEvent.change(issuenameTextbox, {
        target: { value: "Test_warn" },
    });

    // Check if the error message disappears after entering the issue name
    expect(
        screen.queryByText("Project name cannot be empty")
    ).not.toBeInTheDocument();
});
