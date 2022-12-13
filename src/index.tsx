import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GenericError } from "./pages/error-screens/GenericError";
import GenericRouter from "./components/generic-outlet/GenericRouter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <GenericError />,
  },
  {
    path: "shops",
    element: <GenericRouter />,
    errorElement: <GenericError />,
    children: [
      {
        path: "",
        element: <div>SHOPS</div>,
      },
      {
        path: ":shopId",
        element: <div>Shop ID</div>,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
