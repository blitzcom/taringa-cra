import _ from 'lodash'
import React, { Component } from 'react'

const infiniteScroll = (
  getStatus = props => props.control.status,
  getHasMoreContent = props => props.control.hasMoreContent,
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
      if (
        getStatus(this.props) === 'success' &&
        getStatus(prevProps) === 'fetching'
      ) {
        this.addEvents()
      }
    }

    handleScroll() {
      const canLoadMore =
        getStatus(this.props) !== 'fetching' && getHasMoreContent(this.props)

      if (global.Viewport.scrolledToBottom(threshold) && canLoadMore) {
        console.log('removing')
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
    onLoadMore: () => {},
  }

  return InfiniteScroll
}

export default infiniteScroll
