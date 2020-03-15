import React from 'react'

import { ColorProvider } from './ColorContext'
import ColorBox from './ColorBox'

const ColorPalleteScreen = () => {
  return (
    <ColorProvider>
      <h1>Color Pallete</h1>
      <ColorBox />
    </ColorProvider>
  )
}

export default ColorPalleteScreen
