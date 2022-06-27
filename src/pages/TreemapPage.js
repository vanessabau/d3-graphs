import React from "react";
import Treemap from "../components/zoom-treemap";
import treemapData from "../components/zoom-treemap/treemap-data.json";

const TreemapPage = () => {
  return (
    <div>
      <h1>React-D3 Zoomable Treemap</h1>
      <h4>
        Developed from a version of{" "}
        <a href="https://observablehq.com/@d3/zoomable-treemap">this</a>{" "}
        D3-HTML/JavaScript Zoomable treemap by Mike Bostock
      </h4>
      <p>Click into the tiles to see a deeper level of data</p>
      <Treemap dataJSON={treemapData} />
    </div>
  );
};
export default TreemapPage;
