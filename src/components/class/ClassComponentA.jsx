import React from "react";

class ClassComponentA extends React.Component {

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
      <div className="vertical-inline-flex bg-color--blue pad-all-20">
        <p className="color-ffffff">Class Component</p>
      </div>
    );
  }
}

export default ClassComponentA