import React from 'react'

const NoMatch = () => {
  return (
    <div>
      <h1>You're lost! </h1>
      <p>Nothing to do with the TV show</p>
      <p>
        <code>{window.location.href}</code> <br/>
        N'existe pas sur thomasbrouillet.com ou pas encore...
      </p>
    </div>
  )
}

export default NoMatch
