import React from 'react'

import './Summary.css'
import Shout from './Shout'
import Post from './Post'

const Summary = props => {
  if ('isPlaceholder' in props) {
    return (
      <div className="Summary Summary-ph card">
        <div className="Summary-animated-background">
          <div className="Summary-score-gap ph" />
          <div className="Summary-thumbnail-gap ph" />
          <div className="Summary-title-gap ph" />
          <div className="Summary-title-extra ph" />
          <div className="Summary-subtitle-gap ph" />
          <div className="Summary-subtitle-extra ph" />
        </div>
      </div>
    )
  }

  return (
    <div className="Summary card">
      { props.classic.type === 'shout' && <Shout {...props}/> }
      { props.classic.type === 'post' && <Post {...props}/> }
    </div>
  )
}

export default Summary
