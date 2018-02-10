import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import Flash from './Flash'

const Flashing = props => {
  return (
    <div className="mb-4">
      {props.items.map(i => <Flash key={i.id} {...i} />)}
    </div>
  )
}

const mapStateToProps = state => ({
  items: _.values(state.flash)
})

export default connect(mapStateToProps)(Flashing)
