import React, { Fragment } from "react";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import { Analytics } from "@vercel/analytics/react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Analytics />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Policy />} path="/policy"></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
