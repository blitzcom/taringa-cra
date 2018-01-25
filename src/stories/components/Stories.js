import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Alert from '../../common/Alert'
import Story from './Story'
import * as actions from '../actions'
import { storiesSelector } from '../selectors'

export class Stories extends Component {
  componentDidMount () {
    this.props.fetchStories()
  }

  renderContent () {
    const { error, status, stories } = this.props

    if (status === 'fetching') {
      return (
        <div className="my-0">
          <i className="fa fa-spin fa-spinner fa-2x"/>
        </div>
      )
    } else if (status === 'failure') {
      return (
        <Alert type="danger">
          { error }
        </Alert>
      )
    } else {
      return stories.map(i => <Story key={i.id} {...i} />)
    }
  }

  render () {
    const { status } = this.props

    const storiesClass = classNames('Stories', {
      'text-center': status === 'fetching',
    })

    return (
      <div className={storiesClass}>
        { this.renderContent() }
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
