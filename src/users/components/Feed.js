import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Card from './Card'
import { Summaries } from '../../summaries/components/Summaries'
import {
  summariesSelector,
  summariesStatusSelector,
} from '../../summaries/selectors'
import { userSelector } from '../selectors'
import infiniteScroll from '../../HOC/InfiniteScroll'
import { load, loadTail, clearTail } from '../../summaries/actions'

const mapStateToProps = (state, props) => {
  const username = props.match.params.username
  const status = summariesStatusSelector(state, username)

  return {
    itemSize: state.settings.itemSize,
    summaries: summariesSelector(state, username),
    ...status
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const username = props.match.params.username
  const url = `/user/${username}/feed`

  return {
    clearTail: () => dispatch(clearTail(username)),
    loadFeed: () => dispatch(load(username, url, true)),
    loadMore: () => dispatch(loadTail(username, url)),
  }
}

const UserFeed = withRouter(connect(mapStateToProps, mapDispatchToProps)(
  infiniteScroll()(Summaries)
))

const Feed = props => {
  return (
    <div className="row">
      <div className="col-8">
        <UserFeed />
      </div>
      <div className="col-4">
        <Card {...props.user} />
      </div>
    </div>
  )
}

export default connect((state, props) => {
  return {
    user: userSelector(state, props),
  }
})(Feed)
