import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/index";

import HomePage from "./pages/HomePage";
import TreemapPage from "./pages/TreemapPage";
import BarchartPage from "./pages/BarchartPage";
import HorizontalBarchartPage from "./pages/HorizontalBarchartPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/barchart" element={<BarchartPage />} />
        <Route
          path="/horizontal-barchart"
          element={<HorizontalBarchartPage />}
        />
        <Route path="/treemap" element={<TreemapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
