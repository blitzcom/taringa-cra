import React from 'react'

import './Story.css'
import { humanizeNum } from '../../Utils'

const StoryShout = props => (
  <div className="StoryShout">
    <a className="StoryShout-thumbnail" href="/">
      <img src={props.summary.images.slice[0].url}/>
    </a>
    <div className="StoryShout-info">
      <a
        className="StoryShout-title text-dark"
        href={`/story/${props.slug}`}
      >
        { props.summary.excerpt }
      </a>
      <p className="StoryShout-meta">
        Posteado por
        <a href={`/user/${props.owner.username}`}>
          {props.owner.username}
        </a>
        hace {props.created}
      </p>
      <div className="StoryShout-actions">
        <button
          className="btn StoryShout-action"
          title="Expandir"
        >
          <i className="fa fa-expand"/>
        </button>

        <button
          className="btn StoryShout-action"
          title="Comentarios"
        >
          <i className="fa fa-comments"/>
          {humanizeNum(props.comments)} comentarios
        </button>

        <button
          className="btn StoryShout-action"
          title="Compartir"
        >
          <i className="fa fa-retweet"/>
          {humanizeNum(props.shares)}
        </button>
      </div>
    </div>
  </div>
)

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
    <StoryShout {...props}/>
  </div>
)

Story.defaultProps = {
  onVoteDown: () => {},
  onVoteUp: () => {},
  score: 0,
  title: '#TITLE'
}

export default Story
