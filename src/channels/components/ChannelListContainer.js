import { connect } from 'react-redux'
import { compose } from 'recompose'

import infiniteScroll from '../../HOC/FilterableInfiniteScroll'
import withError from '../../HOC/withError'
import withLoader from '../../HOC/withLoader'
import ChannelList from './ChannelList'
import { fetchListTrigger, clearList } from '../actions'

const mapStateToProps = state => {
  return state.channels
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => {
      dispatch(clearList())
      dispatch(fetchListTrigger(ownProps.url))
    },
    onLoadMore: () => dispatch(fetchListTrigger(ownProps.url)),
    onRetry: () => dispatch(fetchListTrigger(ownProps.url)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  infiniteScroll(),
  withLoader('mb-4', 'fa-2x'),
  withError()
)(ChannelList)
