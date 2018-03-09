import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import classNames from 'classnames'

import { ITEM_SMALL } from '../../settings/constants'

const StoryOwner = ({
  channel,
  channelName,
  children,
  created,
  formatter,
  owner,
  size,
  ...props
}) => {
  const handleOnClick = e => e.stopPropagation()

  const ownerURL = `/u/${owner}`
  const channelURL = `/c/${channel}`

  const isSmall = size === ITEM_SMALL

  const responsiveClasses = classNames({
    'd-none': isSmall,
    'd-md-inline': isSmall,
  })

  return (
    <p {...props}>
      <span className={responsiveClasses}>
        {'Por '}
        <Link to={ownerURL} onClick={handleOnClick}>
          {owner}
        </Link>{' '}
      </span>

      {isSmall && (
        <a
          className="btn btn-sm btn-link d-md-none"
          href={ownerURL}
          onClick={handleOnClick}
        >
          <i className="far fa-user small" />
        </a>
      )}

      {channelName && (
        <span className={responsiveClasses}>
          {'en '}
          <Link to={channelURL} onClick={handleOnClick}>
            {channelName}
          </Link>{' '}
        </span>
      )}

      {channelName &&
        isSmall && (
          <a
            className="btn btn-sm btn-link d-md-none"
            href={channelURL}
            onClick={handleOnClick}
          >
            <i className="fa fa-tag small" />
          </a>
        )}

      <TimeAgo date={created} formatter={formatter} />
    </p>
  )
}

export default StoryOwner
