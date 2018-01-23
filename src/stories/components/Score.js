import React from 'react'
import classNames from 'classnames'

import './Score.css'
import { humanizeNum } from '../../Utils'

const Score = props => {
  const classVoteUpButton = classNames('Score-vote', {
    'Score-up': props.voted > 0,
  })

  const classVoteDownButton = classNames('Score-vote', {
    'Score-down': props.voted < 0,
  })

  const classVotes = classNames('Score-votes', {
    'Score-down': props.voted < 0,
    'Score-up': props.voted > 0,
  })

  return (
    <div className="Score-display">
      <button
        className={classVoteUpButton}
        disabled={props.isVoting}
        onClick={() => props.onVoteUp()}
      >
        <i className="fa fa-arrow-up"/>
      </button>

      <div className={classVotes}>
        { humanizeNum(props.upvotes - props.downvotes) }
      </div>

      <button
        className={classVoteDownButton}
        disabled={props.isVoting}
        onClick={() => props.onVoteDown()}
      >
        <i className="fa fa-arrow-down"/>
      </button>
    </div>
  )
}

Score.defaultProps = {
  downvotes: 0,
  isVoting: false,
  onVoteDown: () => {},
  onVoteUp: () => {},
  upvotes: 0,
  voted: 0,
}

export default Score
