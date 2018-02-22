import React, { Component } from 'react'

const withResource = () => WrappedComponent => {
  class ResourceHOC extends Component {
    componentDidMount() {
      this.props.fetchResource()
    }

    componentWillUnmount() {
      this.props.removeResource()
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  ResourceHOC.defaultProps = {
    fetchResource: () => {},
    removeResource: () => {},
  }

  return ResourceHOC
}

export default withResource
