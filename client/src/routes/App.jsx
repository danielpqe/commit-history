import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.min.css";
//import Layout from "../containers/Layout";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import CommitState from "../context/commits/CommitState";

const App = () => {
  return (
    <CommitState>
      <Home />

    </CommitState>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //     <Route path="*" element={<NotFound />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
