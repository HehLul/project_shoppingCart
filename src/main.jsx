import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Create a component to hold state and pass it to the routes
const App = () => {
  const [cartQuantity, setCartQuantity] = useState(321);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home cartQuantity={cartQuantity} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop",
      element: (
        <Shop cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
