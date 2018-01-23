import React from 'react'

import './Story.css'
import Shout from './Shout'

const Story = props => (
  <div className="Story card">
    { props.classic.type === 'shout' && <Shout {...props}/> }
  </div>
)

export default Story
