import React, { useRef } from 'react'
import InputBox from './components/InputBox'
import Counter from './components/Counter'
import Calculator from './components/Calculator'

const Divider = () => <hr style={{ margin: '30px 0' }} />

function App() {
  const inputBox = useRef(null)
  const handleClick = () => inputBox.current.focus()

  return (
    <div>
      <h1>Hooks</h1>

      <Counter />
      <Divider />

      <Calculator />
      <Divider />

      <InputBox innerRef={inputBox} />
      <button onClick={handleClick}>focus</button>
    </div>
  )
}

export default App
