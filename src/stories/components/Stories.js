import React, { Component } from 'react'
import { connect } from 'react-redux'

import Alert from '../../common/Alert'
import Story from './Story'
import * as actions from '../actions'
import { storiesSelector } from '../selectors'

export class Stories extends Component {
  componentDidMount () {
    this.props.fetchStories()
  }

  render () {
    const { fetchStories, status, stories, error } = this.props

    return (
      <div className="Stories">
        {
          status === 'failure' && (
            <Alert type="danger">
              { error }
            </Alert>
          )
        }

        { stories.map(i => <Story key={i.id} {...i} />) }

        {
          status === 'fetching' ? (
            <div className="my-4 text-center">
              <i className="fa fa-spin fa-spinner fa-2x"/>
            </div>
          ) : (
            <div className="Stories-load-more text-center my-4">
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={fetchStories}
              >
                Load more
              </button>
            </div>
          )
        }
      </div>
    )
  }
}

Stories.defaultProps = {
  fetchStories: () => {},
  status: "success",
  stories: [],
}

const mapStateToProps = state => ({
  error: state.control.storiesFetch.error,
  status: state.control.storiesFetch.status,
  stories: storiesSelector(state),
})

const mapDispatchToProps = dispatch => ({
  fetchStories: () => dispatch(actions.fetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(Stories)
