import { Component } from 'react'
import { connect } from 'react-redux'

import { set } from '../actions'

export class Filterable extends Component {
  componentDidMount() {
    this.props.onDidMount()
  }

  render() {
    return null
  }
}

Filterable.defaultProps = {
  onDidMount: () => {},
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const filters = ownProps.filters || {}
  return {
    onDidMount: () => dispatch(set(filters)),
  }
}

export default connect(null, mapDispatchToProps)(Filterable)
