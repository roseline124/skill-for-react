import React from 'react'

const NotifyScreen = () => {
  const handleClick = () => {
    import('./notify').then(result => result.default())
  }

  return (
    <div>
      <h1>Notify NotifyScreen</h1>
      <p>For splitting code</p>
      <button onClick={handleClick}>Notify</button>
    </div>
  )
}

export default NotifyScreen
