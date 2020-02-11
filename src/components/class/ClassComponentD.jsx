import React from "react"; 

class ClassComponentD extends React.Component {
  render() {
    return (
      <div class="vertical-inline-flex bg-color--blue pad-all-20">
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

export default ClassComponentD;