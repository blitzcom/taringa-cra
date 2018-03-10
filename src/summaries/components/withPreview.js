import React, { Component, Fragment } from 'react'

import StoryPreview from './StoryPreview'

const withPreview = () => WrappedComponent => {
  return class PreviewHOC extends Component {
    constructor(props) {
      super(props)

      this.state = {
        isPreviewOpen: false,
      }

      this.handleTogglePreview = this.handleTogglePreview.bind(this)
    }

    handleTogglePreview(e) {
      e.preventDefault()
      e.stopPropagation()

      this.setState({ isPreviewOpen: !this.state.isPreviewOpen })
    }

    render() {
      const { isPreviewOpen } = this.state
      const { preview } = this.props

      if (this.props.isPlaceholder) {
        return <WrappedComponent {...this.props} />
      }

      return (
        <Fragment>
          <WrappedComponent
            {...this.props}
            isPreviewOpen={isPreviewOpen}
            onTogglePreview={this.handleTogglePreview}
          />

          {isPreviewOpen && <StoryPreview>{preview}</StoryPreview>}
        </Fragment>
      )
    }
  }
}

export default withPreview
