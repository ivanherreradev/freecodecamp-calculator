import React, { useState } from 'react'
import Display from '../Display/Display'
import styles from './Calculator.module.css'

const Calculator = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  return (
    <main className={styles.calculator}>
      <Display value={input || output || '0'}/>
    </main>
  )
}

export default Calculator
