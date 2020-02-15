import React from "react"
import ClassComponentE from '../class/ClassComponentE'
import FunctionComponentD from '../function/FunctionComponentD'

import dataA from '../api/DataA'
import dataB from '../api/DataB'

export default function FunctionComponentE() { 
  return (
    <div className="vertical-inline-flex bg-color--magenta pad-all-20 shadow-3">
<xmp className="color--white margin-b-10">
import dataA from '../api/DataA'
</xmp>
<xmp className="color--white margin-b-20">
import dataB from '../api/DataB'
</xmp>
<xmp className="color--white margin-b-10">
&lt;ClassComponentE info=&#123;dataA&#125; /&gt;
</xmp>
      <ClassComponentE info={dataA}/>

<xmp className="color--white margin-tb-10">
&lt;FunctionComponentD info=&#123;dataB&#125; /&gt;
</xmp>   
        <FunctionComponentD info={dataB} />
    </div>
  )
}