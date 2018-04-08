import React from 'react'

import './StoryPreview.css'
import Image from '../../common/Image'

const StoryPreview = props => {
  return (
    <div className="StoryPreview">
      <Image {...props} center />
    </div>
  )
}

export default StoryPreview
