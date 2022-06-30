import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import luluData from "./data.json";

const VerticalWithAxisBarchart = () => {
  const barchartCanvasRef = useRef();
  console.log(luluData);

  useEffect(() => {
    const data = [
      { date: "2022-01-01", imports: 1200 },
      { date: "2022-02-01", imports: 1400 },
      { date: "2022-03-01", imports: 1500 },
      { date: "2022-04-01", imports: 1600 },
      { date: "2022-05-01", imports: 1600 },
      { date: "2022-06-01", imports: 1750 },
    ];

    //const spacing = 50;
    const width = 600;
    const height = 500;

    const drawBarchartWithAxis = (_DOM) => {
      const svg = d3
        .select(barchartCanvasRef.current)
        .append("svg")
        .attr("id", "vertical-barchart-svg")
        .attr("width", width + width / 4)
        .attr("height", height + height / 4)
        .style("background", "pink");
      //.style("padding", spacing);

      const startDate = d3.min(data, function (d) {
        return new Date(d.date);
      });
      const endDate = d3.max(data, function (d) {
        return new Date(d.date);
      });

      const timeScale = d3
        .scaleTime()
        .domain([startDate, endDate])
        .range([0, width]);

      const yScale = d3
        .scaleLinear()
        .domain([
          d3.max(data, function (d) {
            return d.imports;
          }),
          0,
        ])
        .range([0, height]);

      //Define x and y axis
      const xAxis = d3
        .axisBottom(timeScale)
        .ticks(5)
        .tickFormat(function (d) {
          console.log(
            `${d.toString().split(" ")[1]} ${d.toString().split(" ")[3]}`
          );
          return `${d.toString().split(" ")[1]} ${d.toString().split(" ")[3]}`;
        });
      const yAxis = d3.axisLeft(yScale);

      // Append 'g' element and transform/translate
      svg
        .append("g")
        .attr(
          "transform",
          `translate(${width / 10 + 30}, ${height + height / 10})`
        )
        .call(xAxis);
      svg
        .append("g")
        .attr("transform", `translate(${width / 10}, ${height / 10})`)
        .call(yAxis);

      const rect = svg.selectAll("rect").data(data);

      rect
        .enter()
        .append("rect")
        .attr("width", 30)
        .attr("height", function (d) {
          return height - yScale(d.loss);
        })
        .attr("x", function (d) {
          return width / 10 + timeScale(d.date) + 15;
        })
        .attr("y", function (d) {
          return height / 10 + yScale(d.imports);
        })
        .style("fill", "indigo");
    };

    // Target barchart so it only renders once
    const barchartSvg = document.getElementById("vertical-barchart-svg");

    if (!barchartSvg) {
      drawBarchartWithAxis();
    }
  }, []);

  return (
    <div className="vertical-with-axis-barchart-container">
      <h4>Vertical Barchart with Axis</h4>
      <br />
      <div
        ref={barchartCanvasRef}
        className="vertical-with-axis-barchart"
      ></div>
    </div>
  );
};

export default VerticalWithAxisBarchart;
