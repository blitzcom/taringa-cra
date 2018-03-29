import React from 'react'

import './StoryPeek.css'
import Image from '../../common/Image'

const StoryPeek = ({ excerpt, ...rest }) => {
  return (
    <div className="StoryPeek">
      {excerpt && <p>{excerpt}</p>}
      <Image {...rest} />
    </div>
  )
}

export default StoryPeek
