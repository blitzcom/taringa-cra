import React from 'react'
import classNames from 'classnames'

const StoryThumbnail = ({
  className,
  icon,
  size,
  slug,
  style,
  thumbnail,
  ...rest
}) => {
  const wrapperClass = classNames(
    'align-items-center border d-flex justify-content-center',
    className
  )

  const defaultSize = size || 80

  const wrapperStyle = {
    borderColor: '#6c757d',
    borderRadius: 3,
    color: '#6c757d',
    height: defaultSize,
    minHeight: defaultSize,
    minWidth: defaultSize,
    width: defaultSize,
    ...style,
  }

  const imgStyle = {
    borderRadius: 3,
    height: defaultSize - 2,
    objectFit: 'cover',
    width: defaultSize - 2,
  }

  return (
    <div {...rest} className={wrapperClass} style={wrapperStyle}>
      {!thumbnail ? (
        <i className={icon} />
      ) : (
        <img style={imgStyle} src={thumbnail} alt="Thumbnail" />
      )}
    </div>
  )
}

StoryThumbnail.defaultProps = {
  icon: 'fa fa-unknown',
  thumbnail: null,
}

export default StoryThumbnail
