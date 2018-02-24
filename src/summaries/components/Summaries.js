import _ from 'lodash'
import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import Summary from './Summary'
import { ITEM_SMALL, ITEM_MEDIUM, ITEM_BIG } from '../../settings/constants'

export class Summaries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      placeholderCount: props.placeholderCount,
    }
  }

  componentDidMount() {
    this.props.loadFeed()
    this.unlisten = this.props.history.listen((location, action) => {
      if (this.props.match.path === location.pathname) {
        scroll.scrollToTop({ duration: 500 })
      } else {
        if (location.state && location.state.clear && action === 'PUSH') {
          this.props.clearTail(this.props.id)
        }
        window.scrollTo(0, 0)
      }
    })
  }

  componentWillUnmount() {
    this.unlisten()
  }

  getPlaceholderCount(size) {
    switch (size) {
      case ITEM_SMALL:
        return 19
      case ITEM_MEDIUM:
        return 9
      case ITEM_BIG:
      default:
        return 3
    }
  }

  renderPlaceholder() {
    let count = 1
    const { summaries, itemSize } = this.props

    if (summaries.length === 0) {
      count = this.state.placeholderCount || this.getPlaceholderCount(itemSize)
    }

    return _.times(count, i => (
      <Summary key={i} size={itemSize} isPlaceholder />
    ))
  }

  render() {
    const { history, itemSize, status, summaries } = this.props
    const isFetching = status === 'fetching'

    return (
      <div className="Summaries">
        {(status !== 'failure' || summaries.length > 0) && (
          <div className="card">
            <ul className="list-group list-group-flush">
              {summaries.map(i => (
                <Summary key={i.id} history={history} size={itemSize} {...i} />
              ))}
              {isFetching && this.renderPlaceholder()}
            </ul>
          </div>
        )}

        {status === 'failure' && (
          <div className="my-4 text-center">
            <div className="my-3 text-danger">
              ¡Ratas! Parece que no estás conectado a internet. Refresca la
              página o pulsa el siguiente botón.
            </div>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={this.props.loadMore}
            >
              Volver a intentar
            </button>
          </div>
        )}
      </div>
    )
  }
}

Summaries.defaultProps = {
  loadFeed: () => {},
  loadMore: () => {},
  status: 'fetching',
  summaries: [],
  history: {
    listen: () => () => {},
  },
}

export default Summaries
