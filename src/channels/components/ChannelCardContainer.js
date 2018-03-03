import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import CardDecorator from '../../common/CardDecorator'
import withResource from '../../HOC/Resource'
import ChannelCard from './ChannelCard'

const getId = props => props.match.params.channel

const mapStateToProps = (state, props) => {
  const id = getId(props)
  return {
    channel: state.entities.channels[id] || {},
    control: state.control.channelsFetch[id] || { status: 'fetching' },
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchResource: () => dispatch(fetchTrigger(getId(props))),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(withResource()(ChannelCard))
)
