import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Adjust the import path based on your project structure
import Navbar from "../components/Navbar";
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter for testing

test("Navbar renders correctly", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const listElement = screen.getAllByRole("link");
  expect(listElement.length).toBe(10);
  // Ensure that the Navbar component renders without errors
  expect(screen.getByRole("navigation")).toBeInTheDocument();
  
});

test("renders main logo image", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const title = screen.getByTestId("SPACE X");
  expect(title).toBeInTheDocument();
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});

test("toggles menu when the button is clicked", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  // Find the menu button and simulate a click event
  const menuButton = screen.getByTestId("menu-button");
  fireEvent.click(menuButton);

  // Assert that the menu is open
  expect(screen.getByTestId("menu-button")).toHaveClass("focus:outline-none");

  // Click the menu button again
  fireEvent.click(menuButton);

  // Assert that the menu is closed
  expect(screen.getByTestId("menu")).not.toHaveClass("bg-brandPrimary");
});
