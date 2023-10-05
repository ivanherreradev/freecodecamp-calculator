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
    } else if (value === 'DEL') {
      // Delete the last character from the input
      setInput((prevInput) => prevInput.slice(0, -1))
    } else if (value === '=') {
      try {
        // Use a regular expression to filter the input and remove consecutive characters
        const filtered = input.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join('')
        // Evaluate the filtered expression
        const result = eval(filtered)
        // Update the input and output with the result
        setInput(result.toString())
        setOutput(result.toString())
      } catch (error) {
        // Handle errors by clearing input and displaying 'Error'
        setInput('')
        setOutput('Error')
      }
    } else if (value === '.') {
      // Split the expression by operators
      const expressionParts = input.split(/[-+/*]/g)
      // Get the last number
      const lastNumber = expressionParts[expressionParts.length - 1]
      // Check if the last number already contains a decimal point
      if (!lastNumber.includes('.')) {
        // Add a decimal point to the input
        setInput((prevInput) => prevInput + value)
      }
    } else if (value === '0') {
      // Prevent numbers starting with multiple zeros, except for '0.'
      if (input !== '0' && !input.startsWith('0.')) {
        // Add '0' to the input
        setInput((prevInput) => prevInput + value)
      } else if (input === '') {
        // If input is empty, set it to '0'
        setInput('0')
      }
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
            variant={button.className}
            onClick={handleButtonClick}
            style={{
              gridColumn: button.id === 'zero' || button.id === 'clear' ? 'span 2' : '',
              color: button.className === 'operator' ? '#793fdf' : ''
            }}
          />
        ))}
      </section>
    </main>
  )
}

export default Calculator
