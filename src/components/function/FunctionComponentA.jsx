import React from "react"
import FunctionComponentB from '../function/FunctionComponentB'

export default function FunctionComponentA() { 
  return (
    <div className="vertical-inline-flex bg-color--magenta pad-all-20">
      <p className="color-ffffff">Function Component</p>
      <FunctionComponentB />
    </div>
  )
}