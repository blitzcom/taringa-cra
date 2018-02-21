import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { Summaries } from './Summaries'
import infiniteScroll from '../../HOC/InfiniteScroll'
import { summariesSelector, summariesStatusSelector } from '../selectors'
import { clearTail, load, loadTail } from '../actions'

const withSummaries = (getId, getUrl, includeUser = false) => (
  WrappedComponent = Summaries
) => {
  const mapStateToProps = (state, props) => {
    const id = getId(props)
    return _.assign(
      {
        itemSize: state.settings.itemSize,
        summaries: summariesSelector(state, id),
      },
      summariesStatusSelector(state, id)
    )
  }

  const mapDispatchToProps = (dispatch, props) => {
    const id = getId(props)
    const url = getUrl(props)

    return {
      clearTail: () => dispatch(clearTail(id)),
      loadFeed: () => dispatch(load(id, url, includeUser)),
      loadMore: () => dispatch(loadTail(id, url)),
    }
  }

  return withRouter(
    connect(mapStateToProps, mapDispatchToProps)(
      infiniteScroll()(WrappedComponent)
    )
  )
}

export default withSummaries
