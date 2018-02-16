import React from 'react'

const Flash = props => {
  return (
    <div className={`alert alert-${props.kind}`}>
      <div className="container">
        <div className="row">
          <div className="col">{props.flash}</div>
        </div>
      </div>
    </div>
  )
}

export default Flash
