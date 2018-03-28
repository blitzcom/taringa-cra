import React, { Fragment } from 'react'

const withError = () => BaseComponent => ({ onRetry, ...rest }) => {
  return (
    <Fragment>
      <BaseComponent {...rest} />

      {rest.status === 'failure' && (
        <div className="my-4 text-center">
          <p className="mb-2 text-danger">
            ¡Ratas! Algo salío mal. Intenta recargar la página o has clic en el
            siguiente botón
          </p>
          <button onClick={onRetry} className="btn btn-sm btn-primary">
            Reintentar
          </button>
        </div>
      )}
    </Fragment>
  )
}

export default withError
