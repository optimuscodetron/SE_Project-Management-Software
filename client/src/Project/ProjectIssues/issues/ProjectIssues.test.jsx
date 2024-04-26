import { render, screen, waitFor } from "@testing-library/react";
import IssuePanel from "../../../Workspace/workspaceIssues/components/issuePanel";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";



jest.mock('axios');

describe("Project issue", () => {
    const moveIssue = jest.fn(); // Mock the moveIssue function


    const mockStore = createStore(() => ({
        workspaceNameId: {
            value: {
                name: 'Mock Workspace',
                id: 'mock_workspace_id',
            },
        },
    }));

    it("renders IssuePanel correctly", async () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <IssuePanel
                        stageName="Backlog"
                        issues={[
                            { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'Ayush Sahu', status: 'Backlog', priority: "urgent" },
                            { id: 2, title: 'Issue 2', description: 'Description 2', assignee: 'Chetan Kamble', status: 'Backlog', priority: "medium" }
                        ]}
                        onMoveIssue={moveIssue}
                    />
                </BrowserRouter>
            </Provider>
        );

        // Use data-testid for more robust testing
        await waitFor(() => {
            expect(getByTestId('issue-panel')).toBeInTheDocument();
            // expect(getByTestId('create-issue-button')).toBeInTheDocument();
            // expect(getByTestId('issue-card-2')).toBeInTheDocument();
        });


        // You can also test interactions like clicking buttons and checking state changes
        // For example:
        // fireEvent.click(screen.getByTestId('create-issue-button'));
        // expect(screen.getByTestId('create-issue-modal')).toBeInTheDocument();
    });


    it("renders IssueCard correctly", async () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <IssuePanel
                        stageName="Backlog"
                        issues={[
                            { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'Ayush Sahu', status: 'Backlog', priority: "urgent" },
                            { id: 2, title: 'Issue 2', description: 'Description 2', assignee: 'Chetan Kamble', status: 'Backlog', priority: "medium" }
                        ]}
                        onMoveIssue={moveIssue}
                    />
                </BrowserRouter>
            </Provider>
        );

        // Use data-testid for more robust testing
        // await waitFor(() => {
        //     expect(getByTestId('issue-panel')).toBeInTheDocument();
        //     // expect(getByTestId('create-issue-button')).toBeInTheDocument();
        //     // expect(getByTestId('issue-card-2')).toBeInTheDocument();
        // });

        await waitFor(() => {
            
            expect(getByTestId('issuecard1')).toBeInTheDocument();
        })

        // You can also test interactions like clicking buttons and checking state changes
        // For example:
        // fireEvent.click(screen.getByTestId('create-issue-button'));
        // expect(screen.getByTestId('create-issue-modal')).toBeInTheDocument();
    });




    it("renders IssueCard correctly 2", async () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <IssuePanel
                        stageName="Backlog"
                        issues={[
                            { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'Ayush Sahu', status: 'Backlog', priority: "urgent" },
                            { id: 2, title: 'Issue 2', description: 'Description 2', assignee: 'Chetan Kamble', status: 'Backlog', priority: "medium" }
                        ]}
                        onMoveIssue={moveIssue}
                    />
                </BrowserRouter>
            </Provider>
        );

        // Use data-testid for more robust testing
        await waitFor(() => {
            expect(getByTestId('issue-panel')).toBeInTheDocument();
            // expect(getByTestId('create-issue-button')).toBeInTheDocument();
            // expect(getByTestId('issue-card-1')).toBeInTheDocument();
            // expect(getByTestId('issue-card-2')).toBeInTheDocument();
        });

        // You can also test interactions like clicking buttons and checking state changes
        // For example:
        // fireEvent.click(screen.getByTestId('create-issue-button'));
        // expect(screen.getByTestId('create-issue-modal')).toBeInTheDocument();
    });
});
