import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className={`btn btn-${props.color}${props.display} `} onClick={props.myFunction}>{props.btnText}</button>
    </div>
  )
}

export default Button
