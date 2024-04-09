import React from "react";
import { screen, render, act } from "@testing-library/react";
import Registration from "./Registration";
import userEvent from "@testing-library/user-event";

jest.mock("./auth.jpg", () => "client/src/Authantication/views/auth.jpg");
jest.mock("react-router-dom");

test("renders trackerX test", () => {
  render(<Registration />);
  const linkElement = screen.getByText(/TrackerX/i);
  expect(linkElement).toBeInTheDocument();
});

test("sign up", () => {
  render(<Registration />);
  const linkElement = screen.getByRole("button", { name: /sign up/i });
  expect(linkElement).toBeInTheDocument();
});

test("renders account test", () => {
  render(<Registration />);
  const linkElement = screen.getByText(/already have an account\?/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders login test", () => {
  render(<Registration />);
  const linkElement = screen.getByTestId("testLogin", { name: /login/i });
  expect(linkElement).toBeInTheDocument();
});

test("create password placeholder test", () => {
  render(<Registration />);
  const linkElement = screen.getByPlaceholderText(/create password/i);
  expect(linkElement).toBeInTheDocument();
});

test("confirm password placeholder test", () => {
  render(<Registration />);
  const linkElement = screen.getByPlaceholderText(/confirm password/i);
  expect(linkElement).toBeInTheDocument();
});

test("enter name placeholder test", () => {
  render(<Registration />);
  const linkElement = screen.getByPlaceholderText(/enter full name/i);
  expect(linkElement).toBeInTheDocument();
});

test("enter email placeholder test", () => {
  render(<Registration />);
  const linkElement = screen.getByPlaceholderText(/enter email address/i);
  expect(linkElement).toBeInTheDocument();
});

test("enter email input test", async () => {
  userEvent.setup();
  render(<Registration />);
  const input = "nikhilgarg657@gmail.com";
  const linkElement = screen.getByPlaceholderText(/enter email address/i);
  await act(async () => {
    await userEvent.type(linkElement, input);
  });
  expect(screen.getAllByRole("textbox")[0]).toHaveValue(input);
});

test("enter name input test", async () => {
  userEvent.setup();
  render(<Registration />);
  const input = "nikhil garg";
  const linkElement = screen.getByPlaceholderText(/enter full name/i);
  await act(async () => {
    await userEvent.type(linkElement, input);
  });
  expect(screen.getAllByRole("textbox")[1]).toHaveValue(input);
});

test("create password input test", async () => {
  userEvent.setup();
  render(<Registration />);
  const input = "nikhilg123";
  const linkElement = screen.getByPlaceholderText(/create password/i);
  await act(async () => {
    await userEvent.type(linkElement, input);
  });
  expect(linkElement).toHaveValue(input);
});

test("confirm password input test", async () => {
  userEvent.setup();
  render(<Registration />);
  const input = "nikhilg123";
  const linkElement = screen.getByPlaceholderText(/confirm password/i);
  await act(async () => {
    await userEvent.type(linkElement, input);
  });
  expect(linkElement).toHaveValue(input);
});
