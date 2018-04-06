import React from 'react'
import { compose } from 'recompose'

import withLoadMore from '../../HOC/withLoadMore'
import Reply from './ReplyContainer'

export const Replies = ({ items }) => {
  return items.map(i => <Reply key={i} id={i} />)
}

Replies.defaultProps = {
  items: [],
}

const getShowLoader = props => props.status === 'fetching'
const getHasMore = props => props.items.length < props.totalCount
const getHasFailure = props => props.status === 'failure'

export default compose(withLoadMore(getShowLoader, getHasMore, getHasFailure))(
  Replies
)
