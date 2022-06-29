import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

import "./vertical-barchart.css";

const VerticalBarchart = () => {
  const containerRef = useRef();
  const secondContainerRef = useRef();

  useEffect(() => {
    const numbers = [31, 25, 35, 18, 9, 14];
    const secondNumbers = [3100, 250, 35, 1800, 90, 140];

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

    const colorScale = d3
      .scaleLinear()
      .domain([
        d3.min(secondNumbers, function (d) {
          return d;
        }),
        d3.max(secondNumbers, function (d) {
          return d;
        }),
      ])
      .range(["indigo", "deeppink"]);

    const myScale = d3
      .scaleLinear()
      .domain([
        d3.min(secondNumbers, function (d) {
          return d - 50;
        }),
        d3.max(secondNumbers, function (d) {
          return d + 50;
        }),
      ])
      .range([0, height - 20]);
    // Create scales
    const horizontalAxisScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([0, 500]);

    const verticalAxisScale = d3
      .scaleLinear()
      .domain([
        d3.min(secondNumbers, function (d) {
          return d - 50;
        }),
        d3.max(secondNumbers, function (d) {
          return d + 50;
        }),
      ])
      .range([height - 20, 0]); // reverse the range values to re-order the y axis values

    // Call d3 axis methods and pass a scale int he scale method
    // Note the two ways you can call the scale
    const xAxis = d3.axisBottom().scale(horizontalAxisScale);
    const yAxis = d3.axisLeft(verticalAxisScale);

    const drawSecondVerticalBarchart = (_DOM) => {
      const svg = d3
        .select(secondContainerRef.current)
        .append("svg")
        .attr("id", "second-barchart")
        .attr("width", width)
        .attr("height", height)
        .style("background", "pink");

      // Append the g element which provides the ticks and labels and call our axis
      svg.append("g").attr("transform", "translate(50, 480)").call(xAxis);
      svg.append("g").attr("transform", "translate(50, 0)").call(yAxis);

      const rectangles = svg.selectAll("rect").data(secondNumbers);

      rectangles
        .enter()
        .append("rect")
        .attr("width", 25)
        .attr("height", function (d, i) {
          return myScale(d);
        })
        .attr("x", function (d, i) {
          return i * 28 + 50;
        })
        .attr("y", function (d, i) {
          // We set the height of rectangles in relation to the values in our data but this won't always work
          // Use d3 scales for data to make sense
          return height - 20 - myScale(d);
        })
        .style("fill", function (d) {
          return colorScale(d);
        });
    };

    // Prevent more than one barchart from rendering
    const svgBarchart = document.getElementById("barchart");
    const secondBarchart = document.getElementById("second-barchart");

    if (!svgBarchart) {
      drawVerticalBarchart();
    }
    if (!secondBarchart) {
      drawSecondVerticalBarchart();
    }
  }, []);

  return (
    <div className="vertical-barchart-container">
      <h4>Basic Barchart using the data values for bar height</h4>
      <div ref={containerRef} className="vertical-barchart basic"></div>
      <br />
      <h4>
        Barchart using scales to create bar height, color mapping, left and
        right axis
      </h4>
      <div ref={secondContainerRef} className="vertical-barchart scaled"></div>
      <h4>Some notes to myself on how this was built</h4>
      <p>
        Instead of hard coding the height and width we used scaleLinear(), our
        array of numbers, and a function to create the height of the rectangles.
      </p>
      <p>
        We can also use <strong>interpolation</strong> which means mapping
        values to numbers to set the colors. In this way we can do different
        kinds of color mapping using d3 scales.
      </p>

      <p>
        {" "}
        The second graph will use a continuous scale: scaleLinear() to better
        show data. We need to pass the input domain and output range (of pixels
        output area). Pass each the range min/max, use myScale(d) for height and
        y attributes. Instead of hard coding values you can use d3 min/max
        methods to determine value Instead of const myScale =
        d3.scaleLinear().domain([-100, 4000]).range([0, 500]);
      </p>
      <h4>d3 provides four options to create an axis</h4>
      <ul>
        <li>axis-top</li>
        <li>axis-bottom</li>
        <li>axis-left</li>
        <li>axis-right</li>
      </ul>
    </div>
  );
};

export default VerticalBarchart;
