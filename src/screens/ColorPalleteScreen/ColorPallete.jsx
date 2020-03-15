import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'skyblue',
  'blue',
  'purple',
  'white',
  'gray',
  'black'
]

const ColorBoxWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  width: fit-content;
`

const ColorBox = styled.div`
  width: 50px;
  height: 50px;

  color: ${props => props.backgroundColor};
  background-color: ${props => props.backgroundColor};
`

const Text = styled.p`
  color: ${props => props.color};
`

const ColorPallete = ({ currentColor, description, handleClick, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ColorBoxWrapper>
        {colors.map(color => {
          return (
            <ColorBox onClick={handleClick} backgroundColor={color}>
              {color}
            </ColorBox>
          )
        })}
      </ColorBoxWrapper>
      <Text color={currentColor}>{description}</Text>
    </div>
  )
}

export default ColorPallete

ColorPallete.propTypes = {
  currentColor: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
