import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserCard from './UserCard'
import { userSelector, userControlSelector } from '../selectors'
import { fetchTrigger } from '../actions'

class UserCardContainer extends Component {
  componentDidMount() {
    this.props.fetch()
  }

  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      this.props.fetch()
    }
  }

  render() {
    return <UserCard {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    control: userControlSelector(state, ownProps),
    user: userSelector(state, ownProps),
  }
}

const mapDispatchToProps = (dispatch, { username }) => {
  return {
    fetch: username ? () => dispatch(fetchTrigger(username)) : () => {},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCardContainer)
