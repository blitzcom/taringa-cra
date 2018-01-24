import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'

import './Score.css'
import { humanizeNum } from '../../Utils'

const Score = props => {
  const classVoteUpButton = classNames('Score-vote', {
    'Score-disabled': props.isVoting,
    'Score-up': props.voted > 0,
  })

  const classVoteDownButton = classNames('Score-vote', {
    'Score-disabled': props.isVoting,
    'Score-down': props.voted < 0,
  })

  const classVotes = classNames('Score-votes', {
    'Score-disabled': props.isVoting,
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
        {(_.isInteger(props.upvotes) && _.isInteger(props.downvotes))
          ? humanizeNum(props.upvotes - props.downvotes)
          : 0}
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
