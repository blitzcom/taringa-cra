import React, { Fragment, PureComponent } from 'react'

const withToggler = Toggler => BaseComponent => {
  return class withTogglerHOC extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        isVisible: false,
      }

      this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    }

    handleToggleVisibility(e) {
      if (e && e.preventDefault) {
        e.preventDefault()
      }

      this.setState({ isVisible: !this.state.isVisible })
    }

    render() {
      const { isVisible } = this.state

      return (
        <Fragment>
          <Toggler
            {...this.props}
            isVisible={isVisible}
            onToggleVisibility={this.handleToggleVisibility}
          />
          {isVisible && <BaseComponent {...this.props} />}
        </Fragment>
      )
    }
  }
}

export default withToggler
