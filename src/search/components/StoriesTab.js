import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import classNames from 'classnames'
import { forceCheck } from 'react-lazyload'

import Summary from '../../summaries/components/SummaryContainer'
import { searchTrigger } from '../actions'
import withSearch from './withSearch'
import { ITEM_BIG, ITEM_MEDIUM, ITEM_SMALL } from '../../settings/constants'

export const StoriesTab = ({ items, size }) => {
  const classes = classNames('list-group list-group-flush', {
    'item-big': size === ITEM_BIG,
    'item-medium': size === ITEM_MEDIUM,
    'item-small': size === ITEM_SMALL,
  })

  return (
    <div className={classes}>
      {items.map(id => <Summary key={id} id={id} />)}
    </div>
  )
}

StoriesTab.defaultProps = {
  items: [],
}

const enhance = compose(
  connect(
    state =>
      _.assign({ size: state.settings.itemSize }, state.searching.stories),
    dispatch => ({
      onLoad: () => dispatch(searchTrigger('stories')),
    })
  ),
  withSearch(),
  lifecycle({
    componentDidUpdate(prevProps) {
      if (this.props.size !== prevProps.size) {
        forceCheck()
      }
    },
  })
)

export default enhance(StoriesTab)
