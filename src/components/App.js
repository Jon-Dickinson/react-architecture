import React from "react";

import diagram from "../images/diagram.svg";

import ClassContainerA from "./container/ClassContainerA";
import ClassComponentA from "./class/ClassComponentA";

import FunctionComponentA from "./function/FunctionComponentA";
import FunctionComponentE from "./function/FunctionComponentE";

import ClassContainerB from "./container/ClassContainerB";
import ClassContainerC from "./container/ClassContainerC";
import ClassContainerD from "./container/ClassContainerD";
import ClassContainerF from "./container/ClassContainerF";

function App() {
  return (
    <div className="if__base-wrapper pad-tb-20 direction--column">
      <div className="flex__mid-container max-w-1280 direction--column">
        <img src={diagram} alt="diagram" />
      </div>  
      <div className="flex__mid-container max-w-768 direction--column margin-t-40">
        <p className="margin-b-10 margin-t-10">Set A</p>
        <ClassContainerA />
        <ClassComponentA />
        <FunctionComponentA />
        <p className="margin-b-10 margin-t-10">Set B</p>
        <ClassContainerB />
        <p className="margin-tb-10">Set C</p>
        <ClassContainerC />
        <p className="margin-tb-10">Set D</p>
        <ClassContainerD />
        <p className="margin-b-10 margin-t-10">Set E</p>
        <FunctionComponentE />
        <p className="margin-b-10 margin-t-10">Set F</p>
        <ClassContainerF />
      </div>
    </div>
  );
}

export default App;
