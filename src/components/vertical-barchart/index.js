import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

import "./vertical-barchart.css";

const VerticalBarchart = () => {
  const containerRef = useRef();

  useEffect(() => {
    const numbers = [31, 25, 35, 18, 9, 14];

    const width = 600;
    const height = 500;

    const drawVerticalBarchart = (_DOM) => {
      const svg = d3
        .select(containerRef.current)
        .append("svg")
        .attr("id", "barchart")
        .attr("width", width)
        .attr("height", height)
        .style("background", "lightgray");

      const rectangles = svg.selectAll("rect").data(numbers);

      rectangles
        .attr("viewbox", [0.5, -30.5, 1200, 1200])
        .enter()
        .append("rect")
        .attr("width", 25)
        .attr("height", function (d, i) {
          return d * 10;
        })
        .attr("x", function (d, i) {
          return i * 28 + 10;
        })
        .attr("y", function (d, i) {
          return height - 25 - d * 10;
        })
        .style("fill", "mediumgray");

      const data = svg.selectAll("text").data(numbers);
      data
        .enter()
        .append("text")
        .text(function (d) {
          return d;
        })
        .style("stroke", "mediumgray")
        .style("font-size", "15px")
        .attr("x", function (d, i) {
          return 10 + i * 28;
        })
        .attr("y", function (d, i) {
          return height - 5;
        });
    };

    // Prevent more than one barchart from rendering
    const svgBarchart = document.getElementById("barchart");

    if (!svgBarchart) {
      drawVerticalBarchart();
    }
  }, []);

  return (
    <>
      <h5>Computers sold each day</h5>
      <div className="vertical-barchart-container" ref={containerRef}></div>
    </>
  );
};

export default VerticalBarchart;
