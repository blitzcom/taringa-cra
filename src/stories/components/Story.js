import React from 'react'

import './Story.css'

import UserCard from './StoryUserCardContainer'
import StoryContent from './StoryContentContainer'
import Comments from '../../comments/components/CommentsContainer'

const Story = ({ match }) => {
  const storyId = match.params.slug.slugToId()

  return (
    <div className="row">
      <div className="col-12 col-lg-8 mb-4 mb-lg-0 order-2 order-lg-1">
        <StoryContent storyId={storyId} />
        <Comments storyId={storyId} />
      </div>

      <div className="col-12 col-lg-4 mb-4 mb-lg-0 order-1 order-lg-2">
        <UserCard storyId={storyId} />
      </div>
    </div>
  )
}

Story.defaultProps = {
  match: { params: { slug: 'slug_id' } },
}

export default Story
