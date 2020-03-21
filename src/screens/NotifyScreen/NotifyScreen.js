import React, { Suspense, useState } from 'react'

const NotifyScreen = () => {
  const handleClick = () => {
    import('./notify').then(result => result.default())
  }

  return (
    <div>
      <h1>NotifyScreen</h1>
      <button onClick={handleClick}>Hello?</button>
    </div>
  )
}

export default NotifyScreen
