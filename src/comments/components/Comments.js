import React, { Component } from 'react'
import { connect } from 'react-redux'

import infiniteScroll from '../../HOC/InfiniteScroll'
import Comment from './Comment'
import { fetch as loadMore } from '../actions'
import { commentsSelector, commentsFetchSelector } from '../selectors'

export class Comments extends Component {
  componentWillReceiveProps(nextProps) {
    if (
      this.props.storyStatus === 'fetching' &&
      nextProps.storyStatus === 'success' &&
      nextProps.story
    ) {
      this.props.loadMore(nextProps.story)
    }
  }

  renderCommentsLabel() {
    const { totalCount } = this.props

    if (totalCount === 0) {
      return 'No hay comentarios'
    } else if (totalCount === 1) {
      return '1 comentario'
    } else {
      return `${totalCount} comentarios`
    }
  }

  handleRetryLoadMore(e) {
    e.preventDefault()

    if (this.props.status !== 'fetching' && this.props.story) {
      this.props.loadMore()
    }
  }

  render() {
    const { storyStatus, status, comments, totalCount } = this.props
    const canRenderCommentsCount = comments && totalCount
    const canRenderComments = comments && comments.length > 0
    const canRenderSpinner = status === 'fetching'
    const hasError = status === 'failure'
    const hasNoMoreComments = (
      comments &&
      comments.length === totalCount &&
      comments.length !== 0 &&
      status === 'success'
    )

    if (storyStatus !== 'success') {
      return null
    }

    return (
      <div className="Comments mt-4">
        <div className="card">
          {
            canRenderCommentsCount && (
              <div className="card-body">
                <h6 className="card-title mb-0">
                  {this.renderCommentsLabel()}
                </h6>
              </div>
            )
          }

          {
            canRenderComments && (
              <div className="card-body">
                {comments.map(i => <Comment key={i.id} {...i} />)}
              </div>
            )
          }

          {
            canRenderSpinner && (
              <div className="card-body">
                <div className="text-center">
                  <i className="fa fa-circle-notch fa-spin"/>
                </div>
              </div>
            )
          }

          {
            hasError && (
              <div className="text-center">
                <p className="text-danger">
                  ¡Ratas! Algo salío mal.
                  Refresca la página o haz clic <a href="/retry" onClick={this.handleRetryLoadMore.bind(this)}>
                    aquí
                  </a> para volver a intentar.
                </p>
              </div>
            )
          }

          {
            hasNoMoreComments && (
              <div className="text-center">
                <p className="text-secondary">
                  No hay más comentarios
                </p>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

Comments.defaultProps = {
  comments: [],
  status: 'fetching',
  story: null,
  storyStatus: 'fetching',
  loadMore: () => {},
}

const hasMoreContent = (state, props) => {
  const control = state.control.commentsFetch[props.story]

  if (!control) {
    return true
  }

  return control.ids.length < control.totalCount
}

const mapStateToProps = (state, props) => ({
  comments: commentsSelector(state, props),
  hasMoreContent: hasMoreContent(state, props),
  ...commentsFetchSelector(state, props),
})

const mapDispatchToProps = (dispatch, props) => ({
  loadMore: (id) => dispatch(loadMore(id || props.story))
})

export default connect(mapStateToProps, mapDispatchToProps)(
  infiniteScroll()(Comments)
)
