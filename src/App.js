import React from 'react'
import MyComponent from './components/MyComponent'

function App() {
	return (
		<MyComponent name="First Function Component" favoriteNumber={4}>
			<p style={{ color: 'red' }}>children</p>
		</MyComponent>
	)
}

export default App
