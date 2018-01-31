import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Story.css'

import Card from '../../users/components/Card'
import StoryContent from './StoryContent'
import Comments from '../../comments/components/Comments'
import * as actions from '../actions'
import { slugToId }  from '../../utils/slug'
import { storySelector, storyStateSelector } from '../selectors'

export class Story extends Component {
  componentDidMount () {
    const { match, fetchStory } = this.props
    const id = slugToId(match.params.slug)
    fetchStory(id)
  }

  render () {
    const { status, story } = this.props
    const owner = story ? story.owner : null
    const storyId = story ? story.id : null

    return (
      <div className="row">
        <div className="col-8">
          <StoryContent {...story} status={status} />
          <Comments story={storyId} storyStatus={status} />
        </div>

        <div className="col-4">
          <Card {...owner} status={status}/>
        </div>
      </div>
    )
  }
}

Story.defaultProps = {
  match: {
    params: {
      slug: ''
    }
  },
  error: '',
  fetchStory: () => {},
  status: 'fetching',
  story: null,
}

const mapStateToProps = (state, props) => ({
  story: storySelector(state, props),
  ...storyStateSelector(state, props),
})

const mapDispatchToProps = dispatch => ({
  fetchStory: id => dispatch(actions.fetch(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Story)
