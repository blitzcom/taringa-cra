import _ from 'lodash'
import React, { Component } from 'react'

const infiniteScroll = (
  debounceDelay = 150,
  scrollThreshold = 260
) => (WrappedComponent) => {
  class InfiniteScroll extends Component {
    constructor(props) {
      super(props)
      this.hasScrollEventAttached = false
      this.handleScroll = _.debounce(this.handleScroll.bind(this),
        debounceDelay
      )
    }

    handleScroll () {
      const scrollTop = (
        document.documentElement &&
        document.documentElement.scrollTop) ||
        document.body.scrollTop

      const scrollHeight = (
        document.documentElement &&
        document.documentElement.scrollHeight) ||
        document.body.scrollHeight

      const clientHeight = document.documentElement.clientHeight ||
        window.innerHeight

      const scrolledToBottom = Math.ceil(
          scrollTop + (clientHeight + scrollThreshold)
        ) >= scrollHeight

      if (scrolledToBottom) {
        this.props.loadMore()
      }
    }

    componentDidMount () {
      this.hasScrollEventAttached = true
      window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount () {
      window.removeEventListener('scroll', this.handleScroll)
      this.hasScrollEventAttached = false
    }

    componentWillReceiveProps (nextProps) {
      if (
        this.hasScrollEventAttached &&
        this.props.status === 'fetching' &&
        nextProps.status === 'failure'
      ) {
        window.removeEventListener('scroll', this.handleScroll)
        this.hasScrollEventAttached = false
      }

      if (!this.hasScrollEventAttached && nextProps.status === 'success') {
        this.hasScrollEventAttached = true
        window.addEventListener('scroll', this.handleScroll)
      }
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }

  InfiniteScroll.defaultProps = {
    loadMore: () => {}
  }

  return InfiniteScroll
}

export default infiniteScroll
