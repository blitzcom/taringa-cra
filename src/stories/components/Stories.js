import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Alert from '../../common/Alert'
import Story from './Story'
import * as actions from '../actions'
import { storiesSelector } from '../selectors'

export class Stories extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = _.debounce(this.handleScroll.bind(this), 150)
  }

  handleScroll () {
    const threshold = 260

    const scrollTop = (
      document.documentElement &&
      document.documentElement.scrollTop) ||
      document.body.scrollTop

    const scrollHeight = (
      document.documentElement &&
      document.documentElement.scrollHeight) ||
      document.body.scrollHeight

    const clientHeight = document.documentElement.clientHeight ||
      window.innerHeight

    const scrolledToBottom = Math.ceil(
        scrollTop + (clientHeight + threshold)
      ) >= scrollHeight

    if (scrolledToBottom) {
      this.props.fetchStories()
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
    this.props.fetchStories()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    const { status, stories, error } = this.props

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
          status === 'fetching' && (
            <div className="my-4 text-center">
              <i className="fa fa-spin fa-spinner fa-2x"/>
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
