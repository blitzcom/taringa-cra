import React from 'react'

import SizeButton from './SizeButton'
import { ITEM_BIG, ITEM_MEDIUM, ITEM_SMALL } from '../constants'

const SizeList = () => {
  return (
    <div className="form-inline">
      <div className="btn-group">
        <SizeButton size={ITEM_BIG} icon="ta-items-big" />
        <SizeButton size={ITEM_MEDIUM} icon="ta-items-medium" />
        <SizeButton size={ITEM_SMALL} icon="ta-items-small" />
      </div>
    </div>
  )
}

export default SizeList
