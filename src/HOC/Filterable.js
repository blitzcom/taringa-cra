import React, { Component } from 'react'
import { connect } from 'react-redux'

import { set } from '../filters/actions'

const withFilter = mapFilters => WrappedComponent => {
  class Filterable extends Component {
    componentDidMount() {
      if (mapFilters) {
        const filters = mapFilters(this.props)
        this.props.dispatch(set(filters))
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return connect()(Filterable)
}

export default withFilter
