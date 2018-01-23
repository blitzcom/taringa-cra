import React from 'react'

import { humanizeNum } from '../../Utils'

const Score = props => (
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
)

Score.defaultProps = {
  downvotes: 0,
  onVoteDown: () => {},
  onVoteUp: () => {},
  upvotes: 0,
}

export default Score
