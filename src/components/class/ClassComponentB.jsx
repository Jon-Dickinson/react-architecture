import React from "react";
import FunctionComponentB from '../function/FunctionComponentB'

class ClassComponentB extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  //  runs after DOM render
  componentDidMount() {

  }

  //  removes and updates
  componentWillUnmount() {

  }

  function() {
    this.setState({  });
  }
   
  render() {
    return (
      <div className="vertical-inline-flex bg-color--blue pad-all-20 shadow-3">
        <p className="color-ffffff">Class Component</p>
        <FunctionComponentB />
      </div>
    );
  }
}

export default ClassComponentB