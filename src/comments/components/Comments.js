import React, { Fragment } from 'react'

import './Comments.css'
import Comment from './CommentContainer'

const Comments = ({ items, onRetry, status, totalCount }) => {
  const count = items.length
  const isFetching = status === 'fetching'
  const hasFailure = status === 'failure'
  const hasSuccess = status === 'success'
  const hasComments = count > 0
  const isEmpty = !hasComments
  const canFetch = count < totalCount

  return (
    <div className="card mt-4">
      {hasComments && (
        <div className="card-header bg-transparent">
          <h6 className="card-title mb-0">
            {totalCount.pluralize('comentario')}
          </h6>
        </div>
      )}

      <div className="card-body">
        <div className="Comments">
          {hasComments && items.map(i => <Comment key={i} id={i} />)}

          <p className="text-secondary text-center mb-0">
            {isEmpty && hasSuccess && 'No hay comentarios'}

            {isFetching && <i className="fa fa-circle-notch fa-spin" />}

            {!canFetch &&
              !isEmpty &&
              !isFetching &&
              !hasFailure &&
              'No hay más comentarios'}
          </p>

          {hasFailure && (
            <Fragment>
              <p className="text-danger">
                ¡Ratas! Algo salío mal. Refresca la página o haz clic sobre el
                siguiente botón.
              </p>
              <p className="my-0">
                <button
                  onClick={onRetry}
                  className="btn btn-outline-secondary btn-sm"
                >
                  Volver a intentar
                </button>
              </p>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

Comments.defaultProps = {
  items: [],
  onRetry: () => {},
  status: 'success',
  totalCount: 0,
}

export default Comments
