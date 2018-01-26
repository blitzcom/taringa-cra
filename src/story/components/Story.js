import React, { Component } from 'react'

class Story extends Component {
  componentDidMount () {
    console.log(this.props)
  }

  render () {
    return (
      <div className="row">
        <div className="col-9">
          Story content
        </div>
      </div>
    )
  }
}

export default Story
