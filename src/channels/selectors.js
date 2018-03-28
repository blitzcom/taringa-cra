import { createSelector } from 'reselect'

const channelState = (state, ownProps) =>
  state.entities.channels[ownProps.id] || {}

export const makeChannelSelector = () => {
  return createSelector(channelState, channel => {
    return channel
  })
}
