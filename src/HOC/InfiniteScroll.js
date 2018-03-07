import _ from 'lodash'
import React, { Component } from 'react'

import { scrolledToBottom } from '../utils/Scroll'

const infiniteScroll = (
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
      const { control: { hasMoreContent, status } } = this.props

      if (
        scrolledToBottom(threshold) &&
        hasMoreContent &&
        status !== 'fetching'
      ) {
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
