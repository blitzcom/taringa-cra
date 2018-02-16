import React from 'react'
import { Link } from 'react-router-dom'

const StoryTitle = ({ children, className, style, slug, ...props }) => {
  return (
    <p className={className} style={style} title={children}>
      <Link className="text-dark" to={`/story/${slug}`} {...props}>
        {children}
      </Link>
    </p>
  )
}

export default StoryTitle
