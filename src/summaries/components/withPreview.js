import React, { Component } from 'react'

import StoryPreview from './StoryPreview'

const defaultGetContent = props =>
  props.preview ? props.preview.content : null

const withPreview = (getContent = defaultGetContent) => WrappedComponent => {
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

      return (
        <div>
          <WrappedComponent
            {...this.props}
            isPreviewOpen={isPreviewOpen}
            onTogglePreview={this.handleTogglePreview}
          />

          <StoryPreview
            content={getContent(this.props)}
            isOpen={isPreviewOpen}
          />
        </div>
      )
    }
  }
}

export default withPreview
