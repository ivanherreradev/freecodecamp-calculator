import React from 'react'
import styles from './Button.module.css'

const Button = ({ id, value, onClick, className }) => {
  return (
    <button
      id={id}
      onClick={() => onClick(value)}
      className={`${styles.button} ${className}`}
    >
      {value}
    </button>
  )
}

export default Button
