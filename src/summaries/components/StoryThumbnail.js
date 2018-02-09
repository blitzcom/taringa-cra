import React from 'react'
import { Link } from 'react-router-dom'

const StoryThumbnail = ({ className, icon, size, slug, style, thumbnail }) => {
  const wrapperClass = [
    'align-items-center',
    'border',
    'd-flex',
    'justify-content-center',
    className,
  ].join(' ')

  const defaultSize = size || 80

  const wrapperStyle = {
    borderRadius: 3,
    height: defaultSize,
    minHeight: defaultSize,
    minWidth: defaultSize,
    width: defaultSize,
    color: '#6c757d',
    borderColor: '#6c757d',
    ...style,
  }

  const imgStyle = {
    borderRadius: 3,
    height: defaultSize - 2,
    objectFit: 'cover',
    width: defaultSize - 2,
  }

  return (
    <Link to={`/story/${slug}`} className="no-decoration">
      <div
        className={wrapperClass}
        style={wrapperStyle}
      >
        {
          !thumbnail
          ? <i className={icon} />
          : <img style={imgStyle} src={thumbnail} alt="Thumbnail" />
        }
      </div>
    </Link>
  )
}

StoryThumbnail.defaultProps = {
  thumbnail: null
}

export default StoryThumbnail
