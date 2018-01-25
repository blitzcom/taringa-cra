import React from 'react'

import './Story.css'
import Shout from './Shout'
import Post from './Post'

const Story = props => (
  <div className="Story card">
    { props.classic.type === 'shout' && <Shout {...props}/> }
    { props.classic.type === 'post' && <Post {...props}/> }
  </div>
)

export default Story
