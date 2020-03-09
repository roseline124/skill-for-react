import React, { useRef } from 'react'
import InputBox from './components/InputBox'

function App() {
	const inputBox = useRef(null)
	const handleClick = () => inputBox.current.focus()

	return (
		<div>
			<InputBox innerRef={inputBox} />

			<button onClick={handleClick}>focus</button>
		</div>
	)
}

export default App
