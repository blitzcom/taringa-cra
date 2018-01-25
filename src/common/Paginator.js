import React from 'react'

const Paginator = ({
  currentPage,
  isLastPage,
  isLoading,
  onClickNext,
  onClickPrevious,
}) => {
  if (isLoading) {
    return null
  }

  return (
    <div className="Paginator">
      {currentPage > 1 && (
        <button
          className="btn btn-primary btn-sm Paginator-previous"
          onClick={onClickPrevious}
        >
          Anterior
        </button>
      )}
      &nbsp;
      {!isLastPage && (
        <button
          className="btn btn-primary btn-sm Paginator-next"
          onClick={onClickNext}
        >
          Siguiente
        </button>
      )}
    </div>
  )
}

Paginator.defaultProps = {
  currentPage: 1,
  isLastPage: false,
  onClickNext: () => {},
  onClickPrevious: () => {},
}

export default Paginator
