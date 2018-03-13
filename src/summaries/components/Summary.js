import React from 'react'
import classNames from 'classnames'

import './Summary.css'
import history from '../../history'
import StoryDock from './StoryDock'

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

  render() {
    const { isPlaceholder } = this.props

    const classes = classNames('list-group-item Summary', {
      'list-group-item-action': !isPlaceholder,
      interactive: !isPlaceholder,
    })

    return (
      <div className={classes} onClick={this.handleClick}>
        <StoryDock {...this.props} />
      </div>
    )
  }
}

Summary.defaultProps = {
  isPlaceholder: false,
}

export default Summary
