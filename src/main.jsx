import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Capsules from "./pages/Capsules.jsx";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/capsules",
    element: <Capsules />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      {/* <RouterProvider router={router} /> */}

      <Routes>
        {/* <Navbar /> */}
        <Route path="/" element={<App />} />
        <Route path="/capsules" element={<Capsules />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
