import React from 'react'

import './Story.css'
import Shout from './Shout'
import { humanizeNum } from '../../Utils'

const Story = props => (
  <div className="card Story">
    <div className="Story-score-display">
      <button
        className="Story-vote"
        onClick={() => props.onVoteUp()}
      >
        <i className="fa fa-arrow-up"/>
      </button>
      <div className="Story-score">
        { humanizeNum(props.upvotes - props.downvotes) }
      </div>
      <button
        className="Story-vote"
        onClick={() => props.onVoteDown()}
      >
        <i className="fa fa-arrow-down"/>
      </button>
    </div>
    { props.classic.type === 'shout' && <Shout {...props}/> }
  </div>
)

Story.defaultProps = {
  onVoteDown: () => {},
  onVoteUp: () => {},
}

export default Story
