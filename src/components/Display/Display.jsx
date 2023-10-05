import React from 'react'
import styles from './Display.module.css'

const Display = ({ value }) => {
  return (
    <header id="display" className={styles.display}>
      {value}
    </header>
  )
}

export default Display
