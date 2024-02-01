import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SubmitForm from "../pages/SubmitForm/SubmitForm";
import AcknowledgeForm from "../pages/AcknowledgeForm/AcknowledgeForm";
import QueryTable from "../pages/QueryTable/QueryTable";
import Home from "../pages/Home/Home";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>error</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rfqsubmit",
        element: <SubmitForm />,
      },
      {
        path: "/rfqack",
        element: <AcknowledgeForm />,
      },
      {
        path: "/rfqtable",
        element: <QueryTable />,
      },
    ],
  },
]);
