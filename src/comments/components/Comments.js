import React, { Component } from 'react'

import infiniteScroll from '../../HOC/InfiniteScroll'
import Comment from './Comment'

export class Comments extends Component {
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

    if (this.props.status !== 'fetching') {
      this.props.loadMore()
    }
  }

  render() {
    const { canRender, comments, status, totalCount } = this.props

    if (!canRender) {
      return null
    }

    const canRenderCommentsCount =
      'comments' in this.props && 'totalCount' in this.props
    const canRenderComments = comments && comments.length > 0
    const canRenderSpinner = status === 'fetching'
    const hasError = status === 'failure'
    const hasNoMoreComments =
      comments &&
      comments.length === totalCount &&
      comments.length !== 0 &&
      status === 'success'

    return (
      <div className="Comments mt-4">
        <div className="card">
          {canRenderCommentsCount && (
            <div className="card-body">
              <h6 className="card-title mb-0">{this.renderCommentsLabel()}</h6>
            </div>
          )}

          {canRenderComments && (
            <div className="card-body">
              {comments.map(i => <Comment key={i.id} {...i} />)}
            </div>
          )}

          {canRenderSpinner && (
            <div className="card-body">
              <div className="text-center">
                <i className="fa fa-circle-notch fa-spin" />
              </div>
            </div>
          )}

          {hasError && (
            <div className="text-center">
              <p className="text-danger">
                ¡Ratas! Algo salío mal. Refresca la página o haz clic{' '}
                <a href="/retry" onClick={this.handleRetryLoadMore.bind(this)}>
                  aquí
                </a>{' '}
                para volver a intentar.
              </p>
            </div>
          )}

          {hasNoMoreComments && (
            <div className="text-center">
              <p className="text-secondary">No hay más comentarios</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

Comments.defaultProps = {
  canRender: true,
  comments: [],
  loadMore: () => {},
  status: 'fetching',
}

export default infiniteScroll()(Comments)
