import React from 'react';
import './NoMatch.css';

const NoMatch = () => {
  return (
    <div className="no-match">
      <div className="container">
        <div className="title">
          <h1>You're lost! </h1>
        </div>
        <div className="content">
          <br/>
          <p>Nothing to do with the TV show...</p>
          <br/>
          <p>
            <code>{window.location.href}</code> <br/>
            Does not exist on thomasbrouillet.com or not yet!
          </p>
        </div>
      </div>
    </div>
  )
}

export default NoMatch
