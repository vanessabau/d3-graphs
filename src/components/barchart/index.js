import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./barchart.css";

const Barchart = () => {
  const svgRef = useRef();

  useEffect(() => {
    const jsonData = {
      data: [
        { bin: "0.0-0.1", frequency: 15 },
        { bin: "0.1-0.2", frequency: 19 },
        { bin: "0.2-0.3", frequency: 175 },
        { bin: "0.3-0.4", frequency: 248 },
        { bin: "0.4-0.5", frequency: 144 },
        { bin: "0.5-0.6", frequency: 422 },
        { bin: "0.6-0.7", frequency: 457 },
        { bin: "0.7-0.8", frequency: 0 },
        { bin: "0.8-0.9", frequency: 0 },
        { bin: "0.9-1.0", frequency: 0 },
      ],
    };
    console.log(jsonData);
    const svgCanvas = d3.select(svgRef.current);

    const margin = { top: 10, right: 30, bottom: 30, left: 30 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    const x = d3.scaleLinear().rangeRound([0, width]);

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(jsonData["data"], function (d) {
          return d.frequency;
        }),
      ])
      .range([height, 0]);

    const svg = svgCanvas
      .attr("viewBox", [0.5, -30.5, 1200, 1200])
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("data-id", "whole-graph-id")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const bar = svg
      .selectAll(".bar")
      .data(jsonData["data"])
      .enter()
      .append("g")
      .attr("data-id", "bar-id")
      .attr("class", "bar")
      .attr("transform", function (d, i) {
        return "translate(" + x(i / 10) + "," + y(d.frequency) + ")";
      });

    bar
      .append("rect")
      .attr("x", 1)
      .attr("width", 89)
      .attr("height", function (d) {
        return height - y(d.frequency);
      });

    svg
      .append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg.append("g").attr("class", "axis axis--y").call(d3.axisLeft(y));
  }, []);

  return (
    <div className="barchart-container">
      <svg ref={svgRef}></svg>
    </div>
  );
};
export default Barchart;
