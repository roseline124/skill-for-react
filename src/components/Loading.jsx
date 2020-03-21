import React from 'react'
import PropTypes from 'prop-types'
import ReactLoading from 'react-loading'

const Loading = props => {
  return (
    <div>
      <h3>Loading</h3>
      <ReactLoading {...props} />
    </div>
  )
}

export default Loading

Loading.propTypes = {
  color: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([
    'blank',
    'balls',
    'bars',
    'bubbles',
    'cubes',
    'cylon',
    'spin',
    'spinningBubbles',
    'spokes',
  ]),
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
