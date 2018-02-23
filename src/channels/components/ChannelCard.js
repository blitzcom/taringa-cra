import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Card from '../../common/Card'
import withResource from '../../HOC/Resource'
import { fetchTrigger } from '../actions'

const ChannelCard = ({ channel, control }) => {
  console.log(channel)
  return (
    <Card
      avatar={channel.thumbnail}
      cover={channel.background}
      status={control.status}
    >
      <div className="card-body">
        <h5 className="card-title">{channel.title}</h5>

        <p className="card-text mt-3 mb-4">{channel.description}</p>

        <button className="btn btn-primary btn-block font-weight-bold mb-3">
          SEGUIR
        </button>

        <p className="text-muted small mb-0">
          Siguiendo este canal podrás ver sus publicaciones en tu página de
          inicio
        </p>
      </div>
    </Card>
  )
}

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
