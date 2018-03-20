import React from 'react'
import { connect } from 'react-redux'

import Tab from './Tab'

import User from '../../users/components/UserMini'

const UsersTab = ({ items, ...rest }) => {
  return (
    <Tab className="card-body row" {...rest}>
      {items.map(id => <User key={id} id={id} />)}
    </Tab>
  )
}

const mapStateToProps = state => {
  return state.search.users
}

export default connect(mapStateToProps)(UsersTab)
