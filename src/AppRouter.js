import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/index";

import HomePage from "./pages/HomePage";
import TreemapPage from "./pages/TreemapPage";
import BarchartPage from "./pages/BarchartPage";
import HorizontalBarchartPage from "./pages/HorizontalBarchartPage";
import VerticalBarchartPage from "./pages/VerticalBarchartPage";
import VerticalWithAxisBarchartPage from "./pages/VerticalWithAxisBarchart";

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
        <Route path="/vertical-barchart" element={<VerticalBarchartPage />} />
        <Route
          path="/vertical-barchart-with-axis"
          element={<VerticalWithAxisBarchartPage />}
        />
        <Route path="/treemap" element={<TreemapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
