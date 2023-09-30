import React from 'react'

const Input = (props) => {
  return (
    <input value={props.value} 
    onChange={(event => props.setValue(event.target.value))} 
    type={props.type}  placeholder={props.placeholder} 
    className="w-full p-2 outline-none border-[#000] ff mt-2 "  />
  )
}

export default Input