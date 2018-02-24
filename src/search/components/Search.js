import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Summaries } from '../../summaries/components/Summaries'
import { ITEM_SMALL } from '../../settings/constants'

import SearchGroup from './SearchGroup'
import User from './User'
import Channel from './Channel'
import { channelsSelector, storiesSelector, usersSelector } from '../selectors'
import { searchClear } from '../actions'

export class Search extends Component {
  componentWillUnmount() {
    this.props.clear()
  }

  render() {
    const { channels, users, stories, search: { status } } = this.props

    const hasItems =
      (users.items && users.items.length > 0) ||
      (stories.items && stories.items.length > 0)

    const searchTitle = () => {
      if (status === 'fetching') {
        return 'Buscando...'
      } else if (status === 'success' && hasItems) {
        return 'Resultados de búsqueda'
      } else {
        return 'Buscar'
      }
    }

    const searchMeta = () => {
      if (!hasItems) {
        return ''
      }

      const meta = []

      if (stories.totalCount) {
        meta.push(
          `${stories.totalCount} ${stories.totalCount === 1 ? 'post' : 'posts'}`
        )
      }

      if (users.totalCount) {
        meta.push(
          `${users.totalCount} ${
            users.totalCount === 1 ? 'usuario' : 'usuarios'
          }`
        )
      }

      if (channels.totalCount) {
        meta.push(
          `${channels.totalCount} ${
            channels.totalCount === 1 ? 'canal' : 'canales'
          }`
        )
      }

      return <small className="text-muted">({meta.join(', ')})</small>
    }

    const hasFailure =
      users.status === 'failure' && stories.status === 'failure'

    return (
      <div className="row">
        <div className="col-8">
          <h5 className="mb-4">
            {searchTitle()} {searchMeta()}
          </h5>

          {hasFailure && (
            <p className="text-danger">
              ¡Ratas! Algo salío mal, vuelve a intentar.
            </p>
          )}

          <SearchGroup
            className="mb-4"
            matches={stories.totalCount}
            title="Posts"
          >
            {stories.items && (
              <Summaries
                itemSize={ITEM_SMALL}
                placeholderCount={3}
                status="success"
                summaries={stories.items}
              />
            )}
          </SearchGroup>

          <SearchGroup matches={users.totalCount} title="Usuarios">
            <div className="row">
              {users.items && users.items.map(i => <User key={i.id} {...i} />)}
            </div>
          </SearchGroup>

          <SearchGroup matches={channels.totalCount} title="Canales">
            <div className="row">
              {channels.items &&
                channels.items.map(i => <Channel key={i.id} {...i} />)}
            </div>
          </SearchGroup>
        </div>
      </div>
    )
  }
}

Search.defaultProps = {
  channels: { items: [], status: 'success' },
  search: { q: '', status: 'success' },
  stories: { items: [], status: 'success' },
  users: { items: [], status: 'success' },
}

const mapStateToProps = state => ({
  channels: channelsSelector(state),
  search: state.control.searchFetch,
  stories: storiesSelector(state),
  users: usersSelector(state),
})

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(searchClear()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
