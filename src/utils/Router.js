import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RFQ_Submit from "../pages/RFQ_Submit/RFQ_Submit";
import RFQ_Acknowledge from "../pages/RFQ_Acknowledge/RFQ_Acknowledge";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>error</h1>,
    children: [
      {
        path: "/",
        element: <h1>home</h1>,
      },
      {
        path: "/rfqsubmit",
        element: <RFQ_Submit />,
      },
      {
        path: "/rfqack",
        element: <RFQ_Acknowledge />,
      },
    ],
  },
]);
