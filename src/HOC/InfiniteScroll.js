import _ from 'lodash'
import React, { Component } from 'react'

const infiniteScroll = (
  getStatus = () => 'success',
  getHasMoreContent = () => false,
  getWillReload = () => false,
  throttleDelay = 250,
  threshold = 400
) => WrappedComponent => {
  class InfiniteScroll extends Component {
    constructor(props) {
      super(props)
      this.handleScroll = this.handleScroll.bind(this)
      this.handleScrollThrottle = _.throttle(this.handleScroll, throttleDelay)
    }

    componentDidMount() {
      this.props.onLoad()
    }

    componentWillUnmount() {
      this.handleScrollThrottle.cancel()
      this.removeEvents()
    }

    componentDidUpdate(prevProps, prevState) {
      const willReload = getWillReload(
        this.props,
        prevProps,
        this.state,
        prevState
      )

      if (willReload) {
        this.props.onLoad()
      }

      if (
        getStatus(prevProps) === 'fetching' &&
        getStatus(this.props) === 'success'
      ) {
        this.addEvents()
      }
    }

    handleScroll() {
      const canLoadMore =
        getStatus(this.props) !== 'fetching' && getHasMoreContent(this.props)

      if (global.Viewport.scrolledToBottom(threshold) && canLoadMore) {
        this.removeEvents()
        this.props.onLoadMore()
      }
    }

    addEvents() {
      window.addEventListener('scroll', this.handleScrollThrottle)
    }

    removeEvents() {
      window.removeEventListener('scroll', this.handleScrollThrottle)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  InfiniteScroll.defaultProps = {
    onLoad: () => {},
  }

  return InfiniteScroll
}

export default infiniteScroll
