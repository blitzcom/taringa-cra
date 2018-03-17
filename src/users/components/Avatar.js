import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class Avatar extends PureComponent {
  render() {
    const { firstname, lastname, avatar } = this.props
    const fullname = `${firstname} ${lastname}`

    return (
      <img
        alt={fullname}
        className="rounded Commentable-avatar"
        src={avatar}
        title={fullname}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.entities.users[ownProps.id]
}

export default connect(mapStateToProps)(Avatar)
