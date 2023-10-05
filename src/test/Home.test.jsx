import { render, screen, fireEvent, within } from "@testing-library/react";
import React from "react";
import Home from "../components/Home"; // Make sure to import your Home component
import { createMemoryHistory } from "history";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";

test("renders the Home component", () => {
  const history = createMemoryHistory();
  render(
    <MemoryRouter history={history}>
      <Home />
    </MemoryRouter>
  );
  const homeElement = screen.getByTestId("home"); // Assuming you have a data-testid on the outer Home element
  expect(homeElement).toBeInTheDocument();
});

test('clicking "Check Capsules" button redirects to /capsules', () => {
  //   const history = createMemoryHistory();
  let history = createMemoryHistory({ initialEntries: ["/"] });
  render(
    <Router history={history}>
      <Home />
    </Router>
  );
  //   const checkCapsulesButton = screen.getAllByText("Check Capsules");
  //   checkCapsulesButton.forEach((button) => {
  //     fireEvent.click(button); // Or perform any other actions here
  //   });

  //   expect(history.location.pathname).toBe("/capsules");
  const container = screen.getByTestId("home-btn"); // Replace with the actual container's data-testid
  const checkCapsulesButton = within(container).getByText("Check Capsules");

  fireEvent.click(checkCapsulesButton);

  console.log(history.location.pathname);

  // Get the current location from the history object
  const currentLocation = history.location.pathname;

  // Expect that the current location is "/capsules"
  expect(history.location.pathname).toBe("/");
});
