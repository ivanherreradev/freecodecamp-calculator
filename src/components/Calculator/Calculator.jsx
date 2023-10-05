import React, { useState } from 'react'
import Display from '../Display/Display'
import Button from '../Button/Button'
import { buttons } from '../../utils/constants/buttons'
import styles from './Calculator.module.css'

const Calculator = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value === 'AC') {
      // Clear input and output
      setInput('')
      setOutput('')
    } else {
      // Add the clicked value to the input
      setInput((prevInput) => prevInput + value)
    }
  }

  return (
    <main className={styles.calculator}>
      <Display value={input || output || '0'} />
      <section className={styles.buttons}>
        {buttons.map((button) => (
          <Button
            key={button.id}
            id={button.id}
            value={button.value}
            onClick={handleButtonClick}
            className={button.className}
          />
        ))}
      </section>
    </main>
  )
}

export default Calculator
