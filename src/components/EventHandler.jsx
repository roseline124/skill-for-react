import React, { useState } from 'react'

const EventHandler = () => {
	const defaultInputValues = {
		name: '',
		job: '',
		favorites: ''
	}

	const [inputValues, setInputValues] = useState(defaultInputValues)

	const handleChange = event => {
		setInputValues({
			...inputValues,
			[event.target.name]: event.target.value // update
		})
	}

	const handleClick = () => {
		setInputValues(defaultInputValues)
	}

	return (
		<>
			<div style={{ marginBottom: 10 }}>
				<h1>Event Handling</h1>
				<div style={{ display: 'flex' }}>
					<h5>name: </h5>
					<input
						type="text"
						name="name"
						value={inputValues.name}
						onChange={handleChange}
					/>
				</div>
				<div style={{ display: 'flex' }}>
					<h5>job: </h5>
					<input
						type="text"
						name="job"
						value={inputValues.job}
						onChange={handleChange}
					/>
				</div>
				<div style={{ display: 'flex', marginBottom: 10 }}>
					<h5>favorites: </h5>
					<input
						type="text"
						name="favorites"
						value={inputValues.favorites}
						onChange={handleChange}
					/>
				</div>
				<button type="submit" onClick={handleClick}>
					초기화
				</button>
			</div>

			<div>{inputValues.name && `hello, ${inputValues.name}`}</div>
			<div>{inputValues.job && `your job is ${inputValues.job}`}</div>
			<div>
				{inputValues.favorites &&
					`and, your favorite things are ${inputValues.favorites}. I do, too.`}
			</div>
		</>
	)
}

export default EventHandler
