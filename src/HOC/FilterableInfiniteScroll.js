import _ from 'lodash'
import React, { Component } from 'react'

import { scrolledToBottom } from '../utils/Scroll'

const infiniteScroll = (
  throttleDelay = 250,
  threshold = 400
) => WrappedComponent => {
  class FilterableInfiniteScroll extends Component {
    constructor(props) {
      super(props)
      this.handleScroll = this.handleScroll.bind(this)
      this.handleScrollThrottle = _.throttle(this.handleScroll, throttleDelay)
    }

    componentDidMount() {
      this.addEvents()
      this.props.onLoad()
    }

    componentWillUnmount() {
      this.handleScrollThrottle.cancel()
      this.removeEvents()
    }

    componentDidUpdate(prevProps) {
      if (this.props.filter !== prevProps.filter) {
        this.props.onLoad()
      }

      if (this.props.status === 'success') {
        this.addEvents()
      }
    }

    handleScroll() {
      const { hasMoreContent, status } = this.props

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

  FilterableInfiniteScroll.defaultProps = {
    hasMoreContent: true,
    onLoad: () => {},
    onLoadMore: () => {},
    status: 'success',
  }

  return FilterableInfiniteScroll
}

export default infiniteScroll
