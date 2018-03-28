import { connect } from 'react-redux'
import { compose } from 'recompose'

import infiniteScroll from '../../HOC/FilterableInfiniteScroll'
import withLoader from '../../HOC/withLoader'
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  infiniteScroll(),
  withLoader()
)(ChannelList)
