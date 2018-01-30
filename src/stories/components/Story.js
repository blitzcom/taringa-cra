import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Story.css'

import Card from '../../users/components/Card'
import Comments from '../../comments/components/Comments'
import { fetch as fetchComments } from '../../comments/actions'
import * as actions from '../actions'
import { slugToId }  from '../../utils/slug'
import { storySelector } from '../selectors'

class Story extends Component {
  componentDidMount () {
    const { match, fetchStory, fetchComments } = this.props
    const id = slugToId(match.params.slug)
    fetchStory(id)
    fetchComments(id)
  }

  render () {
    if (!this.props.story) {
      return null
    }

    const { data, control } = this.props.story

    return (
      <div className="row">
        <div className="col-8">
          {
            control.status === 'fetching' && (
              <div className="my-4 text-center">
                <i className="fa fa-spinner fa-spin fa-2x"/>
              </div>
            )
          }

          {
            control.status === 'success' && (
              <div className="card Story-body">
                <div className="card-body">
                  {data.content}
                </div>
              </div>
            )
          }

          {
            control.status === 'success' && (
              <Comments story={data.id} />
            )
          }
        </div>

        <div className="col-4">
          <Card {...data.owner} status={control.status}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  story: storySelector(state, props),
})

const mapDispatchToProps = dispatch => ({
  fetchStory: id => dispatch(actions.fetch(id)),
  fetchComments: id => dispatch(fetchComments(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Story)
