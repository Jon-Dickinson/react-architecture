import React from "react";
import ClassComponentB from '../class/ClassComponentB'

class ClassContainerB extends React.Component {
  render() {
    return (
      <div className="vertical-inline-flex bg-661fff pad-all-20 shadow-3">
        <p className="color-ffffff">Class Container</p>
        <ClassComponentB />
      </div>
    );
  }
}

export default ClassContainerB