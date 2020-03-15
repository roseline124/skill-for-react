import React, { createContext, useState } from 'react'

const ColorContext = createContext({
  state: {
    textColor: {
      primary: '',
      secondary: ''
    }
  },
  action: {
    setPrimaryColor: () => {},
    setSecondaryColor: () => {}
  }
})

export const ColorProvider = ({ children }) => {
  const [primary, setPrimary] = useState('black')
  const [secondary, setSecondary] = useState('gray')

  const value = {
    state: { textColor: { primary, secondary } },
    action: {
      setPrimaryColor: setPrimary,
      setSecondaryColor: setSecondary
    }
  }

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
}

export default ColorContext
