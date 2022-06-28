import React from "react";
import HorizontalBarchart from "../components/horizontal-barchart";

const HorizontalBarchartPage = () => {
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
      <p>Horizontal Barchart built with styled "div" elements</p>
      <p>
        This could also be built with "rect" elements where the width of x would
        need to be specified as well as the x and y properties of the rect. x
        would be the same and y would be different
      </p>
      <HorizontalBarchart />
    </div>
  );
};
export default HorizontalBarchartPage;
