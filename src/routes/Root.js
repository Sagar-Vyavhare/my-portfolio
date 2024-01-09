import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import Demo from "../Components/Demo";
import Demo2 from "../Components/Demo2";
import Second from "../Components/Second";
export default function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Portfolio}>
          <Route path="/" Component={Demo} />
          <Route path="/demo2" Component={Demo2} />
        </Route>
        <Route path="/sagar" Component={Second}>
          <Route path="/sagar" Component={Demo} />
          <Route path="/sagar/demo2" Component={Demo2} />
        </Route>
      </Routes>
    </Router>
  );
}
