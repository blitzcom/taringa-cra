import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Story.css'

import * as actions from '../actions'
import { slugToId }  from '../../utils/slug'
import { storySelector } from '../selectors'

class Story extends Component {
  componentDidMount () {
    const { match, fetchStory } = this.props
    const id = slugToId(match.params.slug)
    fetchStory(id)
  }

  render () {
    if (!this.props.story) {
      return null
    }

    const { data, control } = this.props.story

    return (
      <div className="row">
        <div className="col-9">
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Story)
