import { connect } from 'react-redux'

import TabButton from './TabButton'

const mapStateToProps = (state, ownProps) => {
  return state.searching[ownProps.id] || {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TabButton)
