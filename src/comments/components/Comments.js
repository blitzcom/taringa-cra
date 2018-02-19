import React, { Component } from 'react'

import { pluralize } from '../../utils/StringHelpers'
import Comment from './Comment'

export class Comments extends Component {
  constructor(props) {
    super(props)
    this.handleLoadMore = this.handleLoadMore.bind(this)
  }

  handleLoadMore(e) {
    if (this.props.status !== 'fetching') {
      this.props.loadMore()
    }
  }

  render() {
    const { comments, status, totalCount } = this.props
    const count = comments.length
    const isFetching = status === 'fetching'
    const hasFailure = status === 'failure'
    const hasSuccess = status === 'success'
    const hasComments = count > 0
    const isEmpty = !hasComments
    const canFetch = count < totalCount

    return (
      <div className="Comments mt-4">
        <div className="card">
          {hasComments && (
            <div className="card-body">
              <h6 className="card-title mb-0">
                {pluralize(totalCount, 'comentario')}
              </h6>
            </div>
          )}

          {hasComments && (
            <div className="card-body">
              {comments.map(i => <Comment key={i.id} {...i} />)}
            </div>
          )}

          {isEmpty &&
            hasSuccess && (
              <div className="card-body">
                <p className="text-secondary text-center mb-0">
                  No hay comentarios
                </p>
              </div>
            )}

          {isFetching && (
            <div className="card-body text-center">
              <i className="fa fa-circle-notch fa-spin" />
            </div>
          )}

          {!canFetch &&
            !isEmpty &&
            !isFetching &&
            !hasFailure && (
              <div className="card-body text-center">
                <p className="text-secondary mb-0">No hay más comentarios</p>
              </div>
            )}

          {canFetch &&
            !isFetching &&
            !hasFailure && (
              <div className="card-body text-center">
                <button
                  onClick={this.handleLoadMore}
                  className="btn btn-sm btn-outline-secondary"
                >
                  Ver más comentarios
                </button>
              </div>
            )}

          {hasFailure && (
            <div className="card-body text-center">
              <p className="text-danger">
                ¡Ratas! Algo salío mal. Refresca la página o haz clic sobre el
                siguiente botón.
              </p>
              <p className="my-0">
                <button
                  onClick={this.handleLoadMore}
                  className="btn btn-outline-secondary btn-sm"
                >
                  Volver a intentar
                </button>
              </p>
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

export default Comments
