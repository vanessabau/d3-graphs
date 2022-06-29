import React from "react";
import VerticalBarchart from "../components/vertical-barchart";

const VerticalBarchartPage = () => {
  return (
    <div>
      <h1>React-D3 Horizontal Barchart</h1>
      <h4>
        Developed from the D3-HTML/JavaScript horizontal barchart in the{" "}
        <a href="https://www.udemy.com/course/d3js-data-visualization-projects//">
          Udemy course
        </a>
        {"  "}
        by Crypters Infotech
      </h4>
      <VerticalBarchart />
    </div>
  );
};
export default VerticalBarchartPage;
