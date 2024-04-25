import React from 'react'

const Button = (props) => {
  return (
    <>
    <button onClick={props.onClick} value={props.value}>{props.value}</button>
    </>
  )
}

export default Button