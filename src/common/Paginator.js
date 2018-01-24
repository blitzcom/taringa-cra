import React from 'react'

const Paginator = ({
  currentPage,
  isLastPage,
  onClickNext,
  onClickPrevious,
}) => {
  return (
    <div className="Paginator">
      {currentPage > 1 && (
        <button className="btn btn-primary btn-sm" onClick={onClickNext}>
          Anterior
        </button>
      )}
      &nbsp;
      {!isLastPage && (
        <button className="btn btn-primary btn-sm" onClick={onClickPrevious}>
          Siguiente
        </button>
      )}
    </div>
  )
}

Paginator.defaultProps = {
  currentPage: 0,
  isLastPage: false,
  onClickNext: () => {},
  onClickPrevious: () => {},
}

export default Paginator
