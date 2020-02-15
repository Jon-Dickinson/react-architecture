import React from "react";
import FunctionComponentF from '../function/FunctionComponentF';

import ClassComponentF from '../class/ClassComponentF'

import dataA from '../api/DataA'
import dataB from '../api/DataB'


class ClassContainerF extends React.Component {
  render() {
    return (
      <div className="vertical-inline-flex bg-661fff pad-all-20">
<xmp className="color--white margin-b-10">
import dataA from '../api/DataA'
</xmp>
<xmp className="color--white margin-b-20">
import dataB from '../api/DataB'
</xmp>

<xmp className="color--white margin-b-10">
&lt;FunctionComponentF info=&#123;dataA&#125; /&gt;
</xmp>  
        <FunctionComponentF info={dataA} />
<xmp className="color--white margin-tb-10">
&lt;FunctionComponentF info=&#123;dataB&#125; /&gt;
</xmp>  
        <FunctionComponentF info={dataB} />

<xmp className="color--white margin-tb-10">
&lt;ClassComponentF /&gt;
</xmp>  
        <ClassComponentF />


      </div>
    );
  }
}

export default ClassContainerF;