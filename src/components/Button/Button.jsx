import React from 'react'

const Button = ({ id, value, onClick, className }) => {
  return (
    <button id={id} onClick={() => onClick(value)} className={className}>
      {value}
    </button>
  )
}

export default Button
