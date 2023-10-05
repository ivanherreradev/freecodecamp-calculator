import React, { useState } from 'react'
import Display from '../Display/Display'
import Button from '../Button/Button'
import { buttons } from '../../utils/constants/buttons'
import styles from './Calculator.module.css'

const Calculator = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  return (
    <main className={styles.calculator}>
      <Display value={input || output || '0'} />
      <section className={styles.buttons}>
        {buttons.map((button) => (
          <Button
            key={button.id}
            id={button.id}
            value={button.value}
            onClick={() => {}}
            className={button.className}
          />
        ))}
      </section>
    </main>
  )
}

export default Calculator
