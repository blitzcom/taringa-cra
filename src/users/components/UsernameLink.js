import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export class UsernameLink extends PureComponent {
  render() {
    const { username, className } = this.props

    return (
      <Link className={className} to={`/u/${username}`}>
        {username}
      </Link>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.entities.users[ownProps.id]
}

export default connect(mapStateToProps)(UsernameLink)
