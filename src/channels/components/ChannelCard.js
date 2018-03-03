import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import CardDecorator from '../../common/CardDecorator'
import withResource from '../../HOC/Resource'
import { fetchTrigger } from '../actions'

export const ChannelCard = ({ channel, control }) => {
  return (
    <CardDecorator
      avatar={channel.thumbnail}
      cover={channel.background}
      placeholder={control.status === 'fetching'}
    >
      <div className="card-body">
        <h5 className="card-title">{channel.title}</h5>

        {channel.description !== channel.title && (
          <p className="card-text mt-3 mb-4">{channel.description}</p>
        )}

        <button className="btn btn-primary btn-block font-weight-bold mb-3">
          SEGUIR
        </button>

        <p className="text-muted small mb-0">
          Siguiendo este canal podrás ver sus publicaciones en tu página de
          inicio
        </p>
      </div>
    </CardDecorator>
  )
}

ChannelCard.defaultProps = {
  channel: {},
  control: { status: 'fetching' },
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
