import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <h1>Footer</h1>
    </>
  );
}

export default App;
