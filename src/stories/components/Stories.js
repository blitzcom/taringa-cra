import React, { Component } from 'react'
import { connect } from 'react-redux'

import Story from './Story'
import * as actions from '../actions'
import { storiesSelector } from '../selectors'

export class Stories extends Component {
  componentDidMount () {
    this.props.fetchStories()
  }

  render () {
    const { stories } = this.props

    return (
      <div className="Stories">
        { stories.map(i => <Story key={i.id} {...i} />) }
      </div>
    )
  }
}

Stories.defaultProps = {
  fetchStories: () => {},
  stories: [],
}

const mapStateToProps = state => ({
  stories: storiesSelector(state)
})

const mapDispatchToProps = dispatch => ({
  fetchStories: () => dispatch(actions.fetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(Stories)
