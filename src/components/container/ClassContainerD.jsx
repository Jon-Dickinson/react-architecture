import React from "react";
import ClassComponentD from '../class/ClassComponentD'
import FunctionComponentD from '../function/FunctionComponentD'

const dataA = { a: "A", b: "B" };
const dataB = { a: "A", b: "B" };

class ClassContainerD extends React.Component {
  render() {
    return (
      <div className="vertical-inline-flex bg-661fff pad-all-20 shadow-3">
    
<xmp className="color--white margin-b-10">
const dataA = &#123;a: "A", b: "B"&#125;
</xmp>
<xmp className="color--white margin-b-20">
const dataB = &#123;a: "A", b: "B"&#125;
</xmp>
<xmp className="color--white margin-b-10">
&lt;ClassComponentD info=&#123;dataA&#125; /&gt;
</xmp>


        <ClassComponentD info={dataA} />

<xmp className="color--white margin-tb-10">
&lt;FunctionComponentD info=&#123;dataB&#125; /&gt;
</xmp>   
        <FunctionComponentD info={dataB} />
      </div>
    );
  }
}

export default ClassContainerD;