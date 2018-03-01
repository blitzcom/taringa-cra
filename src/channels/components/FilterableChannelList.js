import { connect } from 'react-redux'

import infiniteScroll from '../../HOC/FilterableInfiniteScroll'
import ChannelList from './ChannelList'
import { fetchListTrigger } from '../actions'

const mapStateToProps = state => {
  const page = state.channels
  const channels = state.entities.channels
  const items = page.result.map(i => channels[i])

  return {
    items: items,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => dispatch(fetchListTrigger(ownProps.url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  infiniteScroll()(ChannelList)
)
