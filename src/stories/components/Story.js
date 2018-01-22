import React from 'react'

import './Story.css'

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
        { props.score }
      </div>
      <button
        className="Story-vote"
        onClick={() => props.onVoteDown()}
      >
        <i className="fa fa-arrow-down"/>
      </button>
    </div>

    <a className="Story-thumbnail" href="/">
      <div className="Story-type-post">
        <i className="fa fa-file-alt fa-2x"/>
      </div>
    </a>
    <div className="Story-info">
      <a className="text-dark" href="/">
        { props.title }
      </a>
    </div>
  </div>
)

Story.defaultProps = {
  onVoteDown: () => {},
  onVoteUp: () => {},
  score: 0,
  title: '#TITLE'
}

export default Story
