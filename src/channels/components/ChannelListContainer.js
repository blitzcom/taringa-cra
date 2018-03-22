import { connect } from 'react-redux'

import infiniteScroll from '../../HOC/FilterableInfiniteScroll'
import ChannelList from './ChannelList'
import { fetchListTrigger } from '../actions'
import { PUSH } from '../../constants'

const mapStateToProps = state => {
  return state.channels
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => dispatch(fetchListTrigger(ownProps.url)),
    onLoadMore: () => dispatch(fetchListTrigger(ownProps.url, PUSH)),
    onRetry: () => dispatch(fetchListTrigger(ownProps.url, PUSH)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  infiniteScroll()(ChannelList)
)
