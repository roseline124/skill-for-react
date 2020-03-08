import React from 'react'
import PropTypes from 'prop-types'

const MyComponent = ({ name, children, favoriteNumber }) => {
	return (
		<div>
			My Component Name: {name} <br />
			Children: {children} <br />
			Favorite Number: {favoriteNumber}
		</div>
	)
}

MyComponent.defaultProps = {
	name: 'default name'
}

MyComponent.propTypes = {
	name: PropTypes.string,
	children: PropTypes.node,
	favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent
