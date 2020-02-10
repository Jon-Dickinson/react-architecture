import React from "react";
import ClassComponentD from '../class-component/ClassComponentD'

const dataA = { a: "A", b: "B" };

class ClassContainerD extends React.Component {
  render() {
    return (
      <div className="vertical-inline-flex bg-661fff pad-all-20 margin-t-20">
    
<xmp className="color--white margin-b-10">
const dataA = &#123;a: "A", b: "B"&#125;
</xmp>
<xmp className="color--white margin-b-10">
info=&#123;dataA&#125;
</xmp>

        <ClassComponentD info={dataA} />
      </div>
    );
  }
}

export default ClassContainerD;