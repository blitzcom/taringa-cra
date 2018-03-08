import React from 'react'

import { pluralize } from '../../utils/StringHelpers'
import Comment from './Comment'

const Comments = ({ comments, onRetry, control: { status, totalCount } }) => {
  const count = comments.length
  const isFetching = status === 'fetching'
  const hasFailure = status === 'failure'
  const hasSuccess = status === 'success'
  const hasComments = count > 0
  const isEmpty = !hasComments
  const canFetch = count < totalCount

  return (
    <div className="Comments mt-4">
      <div className="card bg-light">
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

        {hasFailure && (
          <div className="card-body text-center">
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
          </div>
        )}
      </div>
    </div>
  )
}

Comments.defaultProps = {
  comments: [],
  control: { status: 'fetching', totalCount: 0 },
  onRetry: () => {},
}

export default Comments
