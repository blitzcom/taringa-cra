import React from 'react'

import Tab from './Tab'
import User from '../../users/components/UserMini'

const UsersTab = () => {
  return (
    <Tab className="card-body row" id="users">
      {items => items.map(id => <User key={id} id={id} />)}
    </Tab>
  )
}

export default UsersTab
