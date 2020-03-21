import React, { useState, Suspense } from 'react'
import loadable from '@loadable/component'
import styled from 'styled-components'

import logo from './logo.svg'
import './App.css'

import Loading from 'components/Loading'
import 'Loading.css'

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
`

const Logo = styled.img`
  width: 300px;
  height: 300px;
  display: block;
  margin: 0 auto;
`

const NotifyScreen = loadable(() => import('screens/NotifyScreen'), {
  fallback: <Loading color="#61DAFB" type="bubbles" className="Loading" />,
})

function App() {
  const [loading, setLoading] = useState(true)

  const handleLoading = () => {
    setLoading(false)
  }

  const handleMouseOver = () => {
    NotifyScreen.preload()
  }

  return (
    <Container className="App">
      <Logo src={logo} className="App-logo" alt="logo" />
      <p>F12 -> Network -> Slow 3G</p>
      <button onClick={handleLoading} onMouseOver={handleMouseOver}>
        Load Hello Button
      </button>

      {!loading && <NotifyScreen />}
    </Container>
  )
}

export default App
