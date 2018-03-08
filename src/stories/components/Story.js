import React from 'react'

import './Story.css'

import UserCard from '../../users/components/UserCardContainer'
import StoryContent from './StoryContentContainer'
import Comments from '../../comments/components/CommentsContainer'
import { slugToId } from '../../utils/slug'

const Story = ({ match }) => {
  const storyId = slugToId(match.params.slug)

  return (
    <div className="row">
      <div className="col-12 col-lg-8 order-1 mb-4 mb-lg-0">
        <StoryContent storyId={storyId} />
      </div>

      <div className="col-12 col-lg-8 order-3">
        <Comments storyId={storyId} />
      </div>

      <div className="col-12 col-lg-4 order-2">
        <UserCard storyId={storyId} />
      </div>
    </div>
  )
}

Story.defaultProps = {
  match: { params: { slug: 'slug_id' } },
}

export default Story
