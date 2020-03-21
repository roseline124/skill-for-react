import React, { useState, Suspense } from 'react'
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

const NotifyScreen = React.lazy(() => import('screens/NotifyScreen'))

function App() {
  const [loading, setLoading] = useState(true)

  const handleLoading = () => {
    setLoading(false)
  }

  return (
    <Container className="App">
      <Logo src={logo} className="App-logo" alt="logo" />
      <p>F12 -> Network -> Slow 3G</p>
      <button onClick={handleLoading}>Load Hello Button</button>

      <Suspense
        fallback={
          <Loading color="#61DAFB" type="bubbles" className="Loading" />
        }
      >
        {!loading && <NotifyScreen />}
      </Suspense>
    </Container>
  )
}

export default App
