import React from 'react'
import { connect } from 'react-redux'

import { Summaries } from '../../summaries/components/Summaries'
import { ITEM_SMALL } from '../../settings/constants'

import SearchGroup from './SearchGroup'
import User from './User'
import { storiesSelector, usersSelector } from '../selectors'

export const Search = props => {
  const { users, stories, search } = props

  const searchTitle = () => {
    const { status } = search
    if (status === 'failure') {
      return 'No se ha podido buscar'
    } else if (status === 'fetching') {
      return 'Buscando...'
    } else if (
      status === 'success' &&
      (users.items &&
        users.items.length > 0 &&
        stories.items &&
        stories.items.length > 0)
    ) {
      return 'Resultados de búsqueda'
    } else {
      return 'Buscar'
    }
  }

  const hideStoriesGroup =
    'items' in stories === false || stories.items.length <= 0
  const hideUserGroup = 'items' in users === false || users.items.length <= 0

  return (
    <div className="row">
      <div className="col-8">
        <h5 className="mb-4">{searchTitle()}</h5>

        <SearchGroup title="Posts" className="mb-4" hide={hideStoriesGroup}>
          {stories.items && (
            <Summaries
              itemSize={ITEM_SMALL}
              placeholderCount={3}
              status="success"
              summaries={stories.items}
            />
          )}
        </SearchGroup>

        <SearchGroup title="Usuarios" hide={hideUserGroup}>
          <div className="row">
            {users.items && users.items.map(i => <User key={i.id} {...i} />)}
          </div>
        </SearchGroup>
      </div>
    </div>
  )
}

Search.defaultProps = {
  search: { q: '', status: 'success' },
  stories: { items: [] },
  users: { items: [] },
}

const mapStateToProps = state => ({
  search: state.control.searchFetch,
  stories: storiesSelector(state),
  users: usersSelector(state),
})

export default connect(mapStateToProps)(Search)
