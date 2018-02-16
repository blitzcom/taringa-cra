import _ from 'lodash'
import React from 'react'

import { Summaries } from '../../summaries/components/Summaries'
import { ITEM_SMALL } from '../../settings/constants'

import SearchGroup from './SearchGroup'
import User from './User'

const Search = props => {
  return (
    <div className="row">
      <div className="col-8">
        <h5 className="mb-4">Resultados de búsqueda</h5>

        <SearchGroup title="Posts" className="mb-4">
          <Summaries itemSize={ITEM_SMALL} placeholderCount={3} />
        </SearchGroup>

        <SearchGroup title="Usuarios" wrapper>
          {_.times(10, i => <User key={i} />)}
        </SearchGroup>
      </div>
    </div>
  )
}

export default Search
