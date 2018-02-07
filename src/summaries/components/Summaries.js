import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import infiniteScroll from '../../HOC/InfiniteScroll'
import Alert from '../../common/Alert'
import Summary from './Summary'
import { fetch as fetchSummaries } from '../actions'
import { summariesSelector, summariesStatusSelector } from '../selectors'

export class Summaries extends Component {
  constructor (props) {
    super(props)
    this.state = {
      placeholderCount: props.placeholderCount || 8
    }
  }

  componentDidMount () {
    this.props.loadMore(false)
  }

  renderPlaceholder () {
    let count = 1
    const { summaries } = this.props

    if (summaries.length === 0) {
      count = this.state.placeholderCount
    }

    return _.times(count, i => <Summary key={i} isPlaceholder />)
  }

  render () {
    const { status, summaries, itemSize } = this.props
    const isFetching = status === 'fetching'

    return (
      <div className="Summaries">
        { summaries.map(i => <Summary key={i.id} itemSize={itemSize} {...i} />) }

        {
          status === 'failure' && (
            <div className="my-4 text-center">
              <Alert className="my-3 font-weight-bold" type="danger">
                ¡Ratas! Parece que no estás conectado a internet.
                Intenta refrescar la página o pulsa el siguiente botón.
              </Alert>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={this.props.loadMore}
              >
                Volver a intentar
              </button>
            </div>
          )
        }

        {
          isFetching && this.renderPlaceholder()
        }
      </div>
    )
  }
}

Summaries.defaultProps = {
  loadMore: () => {},
  status: "success",
  summaries: [],
}

const mapStateToProps = (state, props) => ({
  itemSize: state.settings.itemSize,
  summaries: summariesSelector(state, props),
  ...summariesStatusSelector(state, props)
})

const mapDispatchToProps = (dispatch, { id, url }) => ({
  loadMore: (keepLoading) => dispatch(fetchSummaries(id, url, keepLoading)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  infiniteScroll()(Summaries)
)
