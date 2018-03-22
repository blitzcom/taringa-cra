import React, { PureComponent } from 'react'

const Placeholder = () => {
  return (
    <p className="text-center text-secondary">
      <i className="fa fa-circle-notch fa-spin" />
    </p>
  )
}

const Failure = ({ onRetry }) => {
  return (
    <div className="text-center">
      <p className="text-danger">¡Ratas! Algo salío mal.</p>
      <button onClick={onRetry} className="btn btn-sm btn-outline-primary">
        Reintentar
      </button>
    </div>
  )
}

const withResource = (
  PlaceholderComponent = Placeholder,
  FailureComponente = Failure
) => WrappedComponent => {
  class ResourceHOC extends PureComponent {
    static defaultProps = {
      status: 'success',
      fetchResource: () => {},
      removeResource: () => {},
    }

    componentDidMount() {
      this.props.fetchResource()
    }

    componentWillUnmount() {
      this.props.removeResource()
    }

    render() {
      const { status, fetchResource, removeResource, ...rest } = this.props

      if (status === 'fetching') {
        return <PlaceholderComponent />
      }

      if (status === 'failure') {
        return <FailureComponente onRetry={fetchResource} />
      }

      if (status === 'success') {
        return <WrappedComponent {...rest} />
      }
    }
  }

  return ResourceHOC
}

export default withResource
