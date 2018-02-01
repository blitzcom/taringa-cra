import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import infiniteScroll from '../../HOC/InfiniteScroll'
import Alert from '../../common/Alert'
import Summary from './Summary'
import * as actions from '../actions'
import { summariesSelector } from '../selectors'

export class Summaries extends Component {
  constructor (props) {
    super(props)
    this.state = {
      placeholderCount: props.placeholderCount || 8
    }
  }

  componentDidMount () {
    this.props.invalidate().then(() => this.props.loadMore())
  }

  renderPlaceholder () {
    return _.times(this.state.placeholderCount, i => <Summary key={i} isPlaceholder />)
  }

  render () {
    const { status, summaries } = this.props
    const isFetching = status === 'fetching'

    return (
      <div className="Summaries">
        { summaries.map(i => <Summary key={i.id} {...i} />) }

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
  invalidate: () => Promise.resolve(),
  status: "success",
  summaries: [],
}

const checkForMoreContent = (state) => {
  const control = state.control.summariesFetch
  return control.ids.length < control.totalCount
}

const mapStateToProps = state => ({
  error: state.control.summariesFetch.error,
  hasMoreContent: checkForMoreContent(state),
  status: state.control.summariesFetch.status,
  summaries: summariesSelector(state),
})

const mapDispatchToProps = dispatch => ({
  loadMore: () => dispatch(actions.fetch()),
  invalidate: () => dispatch(actions.invalidate()),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  infiniteScroll()(Summaries)
)
