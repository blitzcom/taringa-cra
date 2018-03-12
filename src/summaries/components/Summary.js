import React, { Fragment } from 'react'
import classNames from 'classnames'

import './Summary.css'
import history from '../../history'
import { ITEM_SMALL, ITEM_MEDIUM, ITEM_BIG } from '../../settings/constants'
import StorySmall from './StorySmall'
import StoryMedium from './StoryMedium'
import StoryBig from './StoryBig'
import StoryPreview from './StoryPreview'

const stories = {
  [ITEM_BIG]: StoryBig,
  [ITEM_MEDIUM]: StoryMedium,
  [ITEM_SMALL]: StorySmall,
}

class Summary extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleTogglePreview = this.handleTogglePreview.bind(this)

    this.state = {
      isPreviewOpen: false,
    }
  }

  handleTogglePreview(e) {
    e.preventDefault()
    e.stopPropagation()

    this.setState({ isPreviewOpen: !this.state.isPreviewOpen })
  }

  handleClick(e) {
    const { isPlaceholder, slug } = this.props

    if (isPlaceholder && slug) {
      return
    }

    history.push(`/story/${slug}`)
  }

  renderContent() {
    const { isPreviewOpen } = this.state
    const { isPlaceholder, ...rest } = this.props

    const StoryComponent = stories[rest.size]

    if (isPlaceholder) {
      return <StoryComponent.Placeholder />
    } else {
      return (
        <Fragment>
          <StoryComponent
            {...rest}
            isPreviewOpen={isPreviewOpen}
            onTogglePreview={this.handleTogglePreview}
          />

          {isPreviewOpen && <StoryPreview>{rest.preview}</StoryPreview>}
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

Summary.defaultProps = {
  isPlaceholder: false,
}

export default Summary
