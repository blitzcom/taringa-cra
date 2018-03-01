import React from 'react'
import classNames from 'classnames'

import { ITEM_MEDIUM } from '../constants'

const Button = ({ active, className, icon, size, onChangeSize, ...rest }) => {
  const classes = classNames(className, 'btn px-1 py-0 btn-light', {
    active: active === size,
  })

  return (
    <button {...rest} className={classes} onClick={onChangeSize}>
      <i className={icon} />
    </button>
  )
}

Button.defaultProps = {
  active: ITEM_MEDIUM,
  icon: 'ta-items-medium',
  size: ITEM_MEDIUM,
  onChangeSize: () => {},
}

export default Button
