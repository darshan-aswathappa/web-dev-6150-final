import React from "react";
import ReactDOM from "react-dom/client";
import "style/index.css";
import { RouterProvider } from "react-router-dom";
import router from "routes";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
