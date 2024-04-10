import React from "react";
import { screen, render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectListSidebar from "../components/projectListSidebar";
jest.mock("react-router-dom");
test("team name option",()=>{
    render(<ProjectListSidebar/>);
    const element=screen.getByText(/my team name/i);
    expect(element).toBeInTheDocument();
}); 
test("create project option",()=>{
    render(<ProjectListSidebar/>);
    const element=screen.getByText(/create project/i);
    expect(element).toBeInTheDocument();
}); 
test("project list option",()=>{
    render(<ProjectListSidebar/>);
    const element=screen.getByText(/all projects/i);
    expect(element).toBeInTheDocument();
}); 