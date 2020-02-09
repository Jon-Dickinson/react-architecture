import React from "react";
import FunctionComponentB from '../function/FunctionComponentB'

class ClassComponentB extends React.Component {
  render() {
    return (
      <div className="vertical-inline-flex bg-color--blue pad-all-20">
        <p className="color-ffffff">Class Component B</p>
        <FunctionComponentB />
      </div>
    );
  }
}

export default ClassComponentB