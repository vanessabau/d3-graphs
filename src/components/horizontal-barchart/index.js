import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./horizontal-barchart.css";

const HorizontalBarchart = () => {
  const containerRef = useRef();

  useEffect(() => {
    const numbers = [31, 25, 35, 18, 9, 14];

    const bars = d3.select(containerRef.current).selectAll("div").data(numbers);
    // You could also use "rect". You would need to specify the width of the rect
    // as well as x and y. x can be the same and ywill be different
    bars
      .enter()
      .append("div")
      .classed("horizontal-barchart", true)
      .style("width", function (d) {
        return d * 10 + "px";
      })
      .text((d) => {
        return d;
      });
  }, []);

  return (
    <>
      <h5>Computers sold each day</h5>
      <div className="horizontal-barchart-container" ref={containerRef}></div>
    </>
  );
};

export default HorizontalBarchart;
