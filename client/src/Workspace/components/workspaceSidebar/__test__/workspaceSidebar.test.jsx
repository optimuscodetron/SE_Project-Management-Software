import React from "react";
import { screen, render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WorkspaceSidebar from "../workspaceSidebar";
jest.mock("react-router-dom");
// test("workspace setting option",()=>{
//     render(<WorkspaceSidebar/>);
//     const element=screen.getByText(/workspace settings/i);
//     expect(element).toBeInTheDocument();
// }); 
test("invite members option",()=>{
    render(<WorkspaceSidebar/>);
    const element=screen.getByTestId("testInviteMembers");
    expect(element).toHaveTextContent(/invite members/i);
}); 
test("inbox option",()=>{
    render(<WorkspaceSidebar/>);
    const element=screen.getByTestId("testInbox");
    expect(element).toHaveTextContent(/inbox/i);
}); 
// test("create workspace option",()=>{
//     render(<WorkspaceSidebar/>);
//     const element=screen.getByTestId("testCreateWorkspace");
//     expect(element).toHaveTextContent(/create workspace/i);
// }); 
