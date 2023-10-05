// testSetup.js
import { setup } from "vitest";
import { Router } from "react-router-dom";

// Initialize ViTest and set up the Router component
setup({ jsx: { pragma: "h" } }, (v) => {
  // Set up your routing context here if needed
  return () => {
    // Wrap the component in the Router component
    return <Router>{v.body}</Router>;
  };
});
