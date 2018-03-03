import { connect } from 'react-redux'

import infiniteScroll from '../../HOC/FilterableInfiniteScroll'
import ChannelList from './ChannelList'
import { fetchListTailTrigger, fetchListTrigger } from '../actions'

const mapStateToProps = state => {
  const page = state.channels
  const channels = state.entities.channels
  const items = page.ids.map(i => channels[i])
  const hasMoreContent = page.ids.length < page.totalCount

  return {
    hasMoreContent: hasMoreContent,
    items: items,
    status: page.status,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => dispatch(fetchListTrigger(ownProps.url)),
    onLoadMore: () => dispatch(fetchListTailTrigger(ownProps.url)),
    onRetry: () => dispatch(fetchListTailTrigger(ownProps.url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  infiniteScroll()(ChannelList)
)
