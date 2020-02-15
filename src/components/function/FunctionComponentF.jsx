import React from "react"

// const FunctionComponentF = (props, { articles = [] }) => (
//   <div className="vertical-inline-flex bg-color--magenta pad-lr-20 pad-tb-10 shadow-3">
//     <ul>
//       {articles.map(({ webUrl, webTitle }) => (
//         <li key={webUrl}>
//           <a className="color-ffffff font-s--14" href={webUrl} target="_blank" rel="noopener noreferrer">
//             {webTitle}
//           </a>
//         </li>
//       ))}
//     </ul>
//     <h2>{props.info.a}</h2>
//     <h2>{props.info.b}</h2>
//   </div>
// );

const FunctionComponentF = props => (
  <div className="vertical-inline-flex bg-color--magenta pad-all-20 shadow-3">
<xmp className="color--white margin-b-10">
&#123;props.info.a&#125;
</xmp>
<xmp className="color--white margin-b-10">
&#123;props.info.b&#125;
</xmp>

    <h2>{props.info.a}</h2>
    <h2>{props.info.b}</h2>
 
  </div>
)

export default FunctionComponentF;