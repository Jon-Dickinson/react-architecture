import React from "react";
import ClassComponentB from '../class-component/ClassComponentB'

class ClassContainerB extends React.Component {
  render() {
    return (
      <div className="vertical-inline-flex bg-661fff pad-all-20">
        <p className="color-ffffff">Class Container B</p>
        <ClassComponentB />
      </div>
    );
  }
}

export default ClassContainerB