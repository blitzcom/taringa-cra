import { createSelector } from 'reselect'

const channelState = (state, ownProps) =>
  state.entities.channels[ownProps.channel]

export const makeChannelSelector = () => {
  return createSelector(channelState, channel => channel)
}
