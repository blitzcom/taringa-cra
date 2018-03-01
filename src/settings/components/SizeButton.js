import { connect } from 'react-redux'

import { ITEM_MEDIUM } from '../constants'
import { changeItemSize } from '../actions'
import Button from './Button'

const mapStateToProps = (state, props) => {
  return {
    active: state.settings.itemSize,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onChangeSize: () => dispatch(changeItemSize(props.size || ITEM_MEDIUM)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
