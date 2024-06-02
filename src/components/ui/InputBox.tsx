import React from 'react'
import './input.css'

const InputBox = ({
    type,span, placeholder,styles
}:{
    type:string,
    span:string,
    placeholder:string,
    styles?:object

}) => {
  return (
    <div className="inputBox h-20 py-1 left-2" >
    <input placeholder={placeholder} type={type} style={styles} />
    <span>{span}</span>
  </div>
  )
}

export default InputBox
