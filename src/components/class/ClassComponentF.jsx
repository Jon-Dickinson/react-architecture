import React from "react"; 
import FunctionComponentF from '../function/FunctionComponentF'

import dataC from '../api/DataC'

class ClassComponentF extends React.Component {

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
<xmp className="color--white margin-b-20">
import dataC from '../api/DataC'
</xmp>
<xmp className="color--white margin-b-10">
&lt;FunctionComponentF info=&#123;dataC&#125; /&gt;
</xmp> 
        <FunctionComponentF info={dataC} />

      </div>
    );
  }
}

export default ClassComponentF