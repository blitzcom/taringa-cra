import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import User from '../../users/components/UserMini'
import { searchTrigger } from '../actions'
import withSearch from './withSearch'

const UsersTab = ({ items }) => {
  return (
    <div className="card-body row">
      {items.map(id => <User key={id} id={id} />)}
    </div>
  )
}

const enhance = compose(
  connect(
    state => state.searching.users || {},
    dispatch => ({
      onLoad: () => dispatch(searchTrigger('users')),
    })
  ),
  withSearch()
)

export default enhance(UsersTab)
