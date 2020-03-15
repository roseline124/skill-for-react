import React, { useContext } from 'react'
import styled from 'styled-components'

import ColorContext from './ColorContext'
import ColorPallete from './ColorPallete'

const Divider = styled.hr`
  margin: 30px 0;
`

const DESCRIPTION = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
Fuga eveniet minima dolor explicabo amet at distinctio, 
ullam doloribus modi provident nemo ratione quos minus tempora delectus. 
A non dolorum iusto!`

const ColorBox = () => {
  const context = useContext(ColorContext)

  const handleClickPrimaryColor = event => {
    context.action.setPrimaryColor(event.target.textContent)
  }
  const handleClickSecondaryColor = event => {
    context.action.setSecondaryColor(event.target.textContent)
  }

  return (
    <div>
      <ColorPallete
        title="Primary Color: Click Pallete"
        description={DESCRIPTION}
        handleClick={handleClickPrimaryColor}
        currentColor={context.state.textColor.primary}
      />

      <Divider />

      <ColorPallete
        title="Secondary Color: Click Pallete"
        description={DESCRIPTION}
        handleClick={handleClickSecondaryColor}
        currentColor={context.state.textColor.secondary}
      />
    </div>
  )
}

export default ColorBox
