import React from 'react'
import styles from './Button.module.css'

const Button = ({ id, value, onClick, variant, style }) => {
  return (
    <button
      id={id}
      onClick={() => onClick(value)}
      className={`${styles.button} ${variant}`}
      style={style}
    >
      {value}
    </button>
  )
}
export default Button
