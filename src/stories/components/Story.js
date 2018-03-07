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
      <div className="col-8">
        <StoryContent storyId={storyId} />
        <Comments storyId={storyId} />
      </div>

      <div className="col-4">
        <UserCard storyId={storyId} />
      </div>
    </div>
  )
}

Story.defaultProps = {
  match: { params: { slug: 'slug_id' } },
}

export default Story
