import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SettingsSidebar from "../Component/SettingsSidebar";

describe("SettingsSidebar Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <SettingsSidebar showSideBar={true} />
      </MemoryRouter>
    );
  });

  it("renders correct active section based on location", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/workspace/settings/general"]}>
        <SettingsSidebar showSideBar={true} />
      </MemoryRouter>
    );
    const element = screen.getByTestId("generalTest");
    expect(element).toHaveTextContent(/general/i);
  });

  it("renders correct active section based on location - Members", () => {
    render(
      <MemoryRouter initialEntries={["/workspace/settings/members"]}>
        <SettingsSidebar showSideBar={true} />
      </MemoryRouter>
    );
    const element = screen.getByTestId("membersTest");
    expect(element).toHaveTextContent(/members/i);
  });

  it("renders correct active section based on location - Profile", () => {
    render(
      <MemoryRouter initialEntries={["/workspace/settings/profile"]}>
        <SettingsSidebar showSideBar={true} />
      </MemoryRouter>
    );
    const element = screen.getByTestId("profileTest");
    expect(element).toHaveTextContent(/profile/i);
  });

  it("does not render any active section when no location matches", () => {
    const { queryAllByTestId } = render(
      <MemoryRouter initialEntries={["/workspace/settings/other"]}>
        <SettingsSidebar showSideBar={true} />
      </MemoryRouter>
    );
    expect(queryAllByTestId("active-section")).toHaveLength(0);
  });

  it("hides sidebar when showSideBar prop is false", () => {
    const { container } = render(
      <MemoryRouter>
        <SettingsSidebar showSideBar={false} />
      </MemoryRouter>
    );
    expect(container.firstChild).toHaveClass("-translate-x-full");
  });

  it("displays sidebar when showSideBar prop is true", () => {
    const { container } = render(
      <MemoryRouter>
        <SettingsSidebar showSideBar={true} />
      </MemoryRouter>
    );
    expect(container.firstChild).not.toHaveClass("-translate-x-full");
  });
});
