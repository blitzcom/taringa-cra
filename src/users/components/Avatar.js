import React, { PureComponent } from 'react'
import LazyLoad from 'react-lazyload'
import { connect } from 'react-redux'

export class Avatar extends PureComponent {
  static defaultProps = {
    avatar: '#AVATAR',
    firstname: '#FIRSTNAME',
    lastname: '#LASTNAME',
  }

  render() {
    const { firstname, lastname, avatar } = this.props
    const fullname = `${firstname} ${lastname}`

    return (
      <LazyLoad offset={100} height={40} debounce once>
        <img
          alt={fullname}
          className="rounded Commentable-avatar"
          src={avatar}
          title={fullname}
        />
      </LazyLoad>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.entities.users[ownProps.id]
}

export default connect(mapStateToProps)(Avatar)
