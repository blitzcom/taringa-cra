import React from 'react'
import { connect } from 'react-redux'

import infiniteScroll from '../../HOC/InfiniteScroll'
import Comment from './Comment'
import { fetch as loadMore } from '../actions'
import { commentsSelector } from '../selectors'

const Comments = props => {
  if (!props.status) {
    return null
  }

  return (
    <div className="Comments mt-4">
      <div className="card">
        <div className="card-body">
          {props.comments.map(i => <Comment key={i.id} {...i} />)}

          {
            props.status === 'fetching' && (
              <div className="mt-4 text-center">
                <i className="fa fa-circle-notch fa-spin"/>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

const hasMoreContent = (state, props) => {
  const control = state.control.commentsFetch[props.story]
  return control.ids.length < control.totalCount
}

const mapStateToProps = (state, props) => ({
  comments: commentsSelector(state, props),
  error: state.control.commentsFetch[props.story].error,
  hasMoreContent: hasMoreContent(state, props),
  status: state.control.commentsFetch[props.story].status,
})

const mapDispatchToProps = (dispatch, props) => ({
  loadMore: () => dispatch(loadMore(props.story))
})

export default connect(mapStateToProps, mapDispatchToProps)(
  infiniteScroll()(Comments)
)
