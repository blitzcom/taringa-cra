import { connect } from 'react-redux'
import { compose } from 'recompose'

import infiniteScroll from '../../HOC/InfiniteScroll'
import withLoader from '../../HOC/withLoader'
import withError from '../../HOC/withError'
import Comments from './Comments'
import { load, clear } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return (
    state.control.commentsFetch[ownProps.storyId] || {
      error: '',
      items: [],
      status: 'fetching',
      totalCount: 0,
    }
  )
}

const mapDispatchToProps = (dispatch, { storyId }) => {
  return {
    onLoad: () => {
      dispatch(clear(storyId))
      dispatch(load(storyId))
    },
    onLoadMore: () => dispatch(load(storyId)),
    onRetry: () => dispatch(load(storyId)),
  }
}

const getStatus = props => props.status
const getHasMoreContent = props => props.count >= 20
const getShowLoader = props =>
  props.status === 'fetching' || getHasMoreContent(props)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  infiniteScroll(getStatus, getHasMoreContent),
  withLoader(getShowLoader),
  withError()
)(Comments)
