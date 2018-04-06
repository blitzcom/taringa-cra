import { connect } from 'react-redux'
import { compose } from 'recompose'

import infiniteScroll from '../../HOC/InfiniteScroll'
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

const getStatus = props => props.status
const getHasMoreContent = props => props.count !== 0
const getWillReload = (props, prevProps) => props.filter !== prevProps.filter
const getShowLoader = ({ status, ...rest }) =>
  status === 'fetching' || (status === 'success' && getHasMoreContent(rest))

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  infiniteScroll(getStatus, getHasMoreContent, getWillReload),
  withLoader(getShowLoader, 'mb-4', 'fa-2x'),
  withError()
)(ChannelList)
