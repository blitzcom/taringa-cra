import React, { Fragment, PureComponent } from 'react'

import Reply from './ReplyContainer'

class Replies extends PureComponent {
  constructor(props) {
    super(props)

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)

    this.state = {
      isVisible: false,
    }
  }

  handleToggleVisibility() {
    this.setState({ isVisible: !this.state.isVisible })
  }

  renderToggler() {
    const { isVisible } = this.state
    const { items, totalCount } = this.props

    if (items.length > 0) {
      return (
        <button
          className="btn btn-link text-dark Commentable-replies-toggler mb-2"
          onClick={this.handleToggleVisibility}
        >
          {isVisible ? (
            <span>
              {`Ocultar ${totalCount.pluralize('respuesta', null, true)} `}
              <i className="fa fa-chevron-up" />
            </span>
          ) : (
            <span>
              {`Ver ${totalCount.pluralize(
                'respuesta',
                null,
                totalCount === 1
              )} `}
              <i className="fa fa-chevron-down" />
            </span>
          )}
        </button>
      )
    }

    return null
  }

  render() {
    const { isVisible } = this.state
    const { items } = this.props

    return (
      <Fragment>
        {this.renderToggler()}
        {isVisible && items.map(i => <Reply key={i} id={i} />)}
      </Fragment>
    )
  }
}

Replies.defaultProps = {
  items: [],
  totalCount: 0,
}

export default Replies
