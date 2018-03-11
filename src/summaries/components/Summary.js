import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import classNames from 'classnames'

import './Summary.css'
import history from '../../history'
import { ITEM_SMALL, ITEM_MEDIUM, ITEM_BIG } from '../../settings/constants'
import StorySmall from './StorySmall'
import StoryMedium from './StoryMedium'
import StoryBig from './StoryBig'
import StoryPreview from './StoryPreview'
import normalizer from '../../utils/summary'

const stories = {
  [ITEM_BIG]: StoryBig,
  [ITEM_MEDIUM]: StoryMedium,
  [ITEM_SMALL]: StorySmall,
}

class Summary extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleTogglePreview = this.handleTogglePreview.bind(this)

    this.state = {
      isPreviewOpen: false,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !_.isEqual(this.props, nextProps) ||
      this.state.isPreviewOpen !== nextState.isPreviewOpen
    )
  }

  handleTogglePreview(e) {
    e.preventDefault()
    e.stopPropagation()

    this.setState({ isPreviewOpen: !this.state.isPreviewOpen })
  }

  handleClick(e) {
    const { isPlaceholder, summary } = this.props

    if (isPlaceholder && summary) {
      return
    }

    history.push(`/story/${summary.slug}`)
  }

  renderContent() {
    const { isPreviewOpen } = this.state
    const { summary: denormalized, isPlaceholder, ...rest } = this.props

    const StoryComponent = stories[rest.size]

    if (isPlaceholder) {
      return <StoryComponent.Placeholder />
    } else {
      const summary = normalizer.normalize(denormalized)

      return (
        <Fragment>
          <StoryComponent
            {...rest}
            {...summary}
            isPreviewOpen={isPreviewOpen}
            onTogglePreview={this.handleTogglePreview}
          />

          {isPreviewOpen && <StoryPreview>{summary.preview}</StoryPreview>}
        </Fragment>
      )
    }
  }

  render() {
    const { isPlaceholder } = this.props

    const classes = classNames('list-group-item p-2', {
      'list-group-item-action': !isPlaceholder,
      Summary: !isPlaceholder,
    })

    return (
      <div className={classes} onClick={this.handleClick}>
        {this.renderContent()}
      </div>
    )
  }
}

export default Summary
