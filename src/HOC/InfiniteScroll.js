import _ from 'lodash'
import React, { Component } from 'react'

const defaultCanFetch = ({ control: { hasMoreContent, status } }) => {
  return hasMoreContent && status !== 'fetching'
}

const infiniteScroll = (
  canFetch = defaultCanFetch,
  throttleDelay = 250,
  threshold = 400
) => WrappedComponent => {
  class InfiniteScroll extends Component {
    constructor(props) {
      super(props)
      this.handleScroll = this.handleScroll.bind(this)
      this.handleScrollThrottle = _.throttle(this.handleScroll, throttleDelay)
    }

    componentWillUnmount() {
      this.handleScrollThrottle.cancel()
      this.removeEvents()
    }

    componentDidUpdate(prevProps) {
      if (this.props.control.status === 'success') {
        this.addEvents()
      }
    }

    handleScroll() {
      if (global.Viewport.scrolledToBottom(threshold) && canFetch(this.props)) {
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
    control: { hasMoreContent: true, status: 'success' },
    onLoadMore: () => {},
  }

  return InfiniteScroll
}

export default infiniteScroll
