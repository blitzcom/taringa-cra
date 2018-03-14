import React from 'react'

import './Votes.css'
import Action from '../../common/Action'

const Score = ({ upvotes, downvotes }) => {
  return (
    <div className="Votes">
      <Action icon="fa fa-arrow-up" />

      <div className="Votes-Vote">{(upvotes - downvotes).humanize()}</div>

      <Action icon="fa fa-arrow-down" />
    </div>
  )
}

Score.defaultProps = {
  downvotes: 0,
  upvotes: 0,
}

export default Score
