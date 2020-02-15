import React from "react";

class ClassComponentE extends React.Component {

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
<xmp className="color--white margin-b-10">
&#123;this.props.info.a&#125;
</xmp>
<xmp className="color--white margin-b-10">
&#123;this.props.info.b&#125;
</xmp>

        <h2>{this.props.info.a}</h2>
        <h2>{this.props.info.b}</h2>
      </div>
    );
  }
}

export default ClassComponentE