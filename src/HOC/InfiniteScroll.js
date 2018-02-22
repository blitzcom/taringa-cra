import _ from 'lodash'
import React, { Component } from 'react'

const infiniteScroll = (
  debounceDelay = 150,
  scrollThreshold = 400
) => WrappedComponent => {
  class InfiniteScroll extends Component {
    constructor(props) {
      super(props)
      this.hasScrollEventAttached = false
      this.handleScroll = this.handleScroll.bind(this)
      this.handleScrollThrottle = _.throttle(this.handleScroll, 250)
    }

    handleScroll() {
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop

      const windowHeight =
        document.documentElement.clientHeight || window.innerHeight

      const documentHeight = document.body.clientHeight

      const scrolledToBottom =
        documentHeight - scrollTop - windowHeight < scrollThreshold

      if (
        scrolledToBottom &&
        this.props.hasMoreContent &&
        this.props.status !== 'fetching'
      ) {
        this.props.loadMore()
      }
    }

    componentDidMount() {
      this.addEvents()
      this.handleScrollThrottle.cancel()
    }

    addEvents() {
      if (this.hasScrollEventAttached) {
        return
      }

      this.hasScrollEventAttached = true
      window.addEventListener('scroll', this.handleScrollThrottle)
    }

    removeEvents() {
      if (this.hasScrollEventAttached) {
        window.removeEventListener('scroll', this.handleScrollThrottle)
        this.hasScrollEventAttached = false
      }
    }

    componentWillUnmount() {
      this.removeEvents()
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.status === 'fetching' && nextProps.status === 'failure') {
        this.removeEvents()
      }

      if (nextProps.status === 'success') {
        this.addEvents()
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  InfiniteScroll.defaultProps = {
    loadMore: () => {},
  }

  return InfiniteScroll
}

export default infiniteScroll
