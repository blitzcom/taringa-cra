import { connect } from 'react-redux'

import Attachment from './Attachment'

const mapStateToProps = (state, ownProps) => {
  return state.entities.commentAttachment[ownProps.id]
}

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Attachment)
