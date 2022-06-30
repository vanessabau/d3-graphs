import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const VerticalWithAxisBarchart = () => {
  const barchartCanvasRef = useRef();

  useEffect(() => {}, []);

  return (
    <div className="vertical-with-axis-barrchart-container">
      <h4>Vertical Barchart with Axis</h4>
      <div
        ref={barchartCanvasRef}
        className="vertical-with-axis-barchart"
      ></div>
    </div>
  );
};

export default VerticalWithAxisBarchart;
