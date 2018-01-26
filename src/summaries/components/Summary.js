import React from 'react'

import './Summary.css'
import Shout from './Shout'
import Post from './Post'

const Summary = props => (
  <div className="Summary card">
    { props.classic.type === 'shout' && <Shout {...props}/> }
    { props.classic.type === 'post' && <Post {...props}/> }
  </div>
)

export default Summary
