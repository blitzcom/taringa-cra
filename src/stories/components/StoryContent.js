import React from 'react'

import './StoryContent.css'
import Action from '../../common/Action'

const StoryContent = ({ comments, content, downvotes, title, upvotes }) => {
  return (
    <div className="card Story-body">
      <div className="card-body">
        {title && <h4 className="card-title ">{title}</h4>}
        {content}
      </div>
      <div className="card-footer bg-light">
        <Action className="mr-4" icon="fa fa-arrow-up">
          {upvotes.humanize()}
        </Action>

        <Action className="mr-4" icon="fa fa-arrow-down">
          {downvotes.humanize()}
        </Action>

        <Action icon="far fa-comment">{comments.humanize()}</Action>
      </div>
    </div>
  )
}

StoryContent.defaultProps = {
  comments: 0,
  content: '#CONTENT',
  downvotes: 0,
  title: '#TITLE',
  upvotes: 0,
}

StoryContent.Loader = () => {
  return (
    <div className="card Story-body">
      <div className="card-body py-5 my-5 text-center">
        <i className="fa fa-spinner fa-spin fa-2x" />
      </div>
    </div>
  )
}

StoryContent.Failure = () => {
  return (
    <div className="card Story-body">
      <div className="card-body text-center text-danger">
        ¡Ratas! Algo salío mal. Intenta recargar la página.
      </div>
    </div>
  )
}

export default StoryContent
