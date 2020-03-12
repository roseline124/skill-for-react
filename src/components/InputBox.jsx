import React from 'react'
import PropTypes from 'prop-types'

const InputBox = ({ innerRef }) => {
	return (
		<div>
			<h3>useRef</h3>
			<input ref={innerRef} type="text" />
		</div>
	)
}

InputBox.propTypes = {
	innerRef: PropTypes.any
}

export default InputBox
