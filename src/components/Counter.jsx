import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClickPlus = () => {
    const newCount = count + 1
    setCount(newCount)
  }

  const handleClickMinus = () => {
    const newCount = count - 1
    setCount(newCount)
  }

  return (
    <div>
      <h3>useState / Counter</h3>
      current Number is {count}
      <div>
        <button onClick={handleClickPlus}>+1</button>
        <button onClick={handleClickMinus}>-1</button>
      </div>
    </div>
  )
}

export default Counter
