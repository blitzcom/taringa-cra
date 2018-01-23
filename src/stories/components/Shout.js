import React from 'react'
import TimeAgo from 'react-timeago'

import './Shout.css'
import { humanizeNum, esFormatter } from '../../Utils'

const Shout = props => (
  <div className="Shout">
    <a className="Shout-thumbnail" href="/">
      <img src={props.summary.images.slice[0].url}/>
    </a>
    <div className="Shout-info">
      <a
        className="Shout-title text-dark"
        href={`/story/${props.slug}`}
      >
        { props.summary.excerpt }
      </a>
      <p className="Shout-meta">
        Posteado por
        <a href={`/user/${props.owner.username}`}>
          {props.owner.username}
        </a>
        <TimeAgo
          date={props.created}
          formatter={esFormatter}
        />
      </p>
      <div className="Shout-actions">
        <button
          className="btn btn-action"
          title="Expandir"
        >
          <i className="fa fa-expand"/>
        </button>

        <button
          className="btn btn-action"
          title="Comentarios"
        >
          <i className="fa fa-comments"/>
          {humanizeNum(props.comments)} comentarios
        </button>

        <button
          className="btn btn-action"
          title="Compartir"
        >
          <i className="fa fa-retweet"/>
          {humanizeNum(props.shares)}
        </button>
      </div>
    </div>
  </div>
)

export default Shout
