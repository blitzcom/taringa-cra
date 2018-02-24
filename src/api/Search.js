import _ from 'lodash'

import APIBase from './APIBase'

class Search extends APIBase {
  story(q, cancelToken, params = {}) {
    return super.execute(
      '/search/story',
      _.assign({}, params, { q }),
      cancelToken
    )
  }

  user(q, cancelToken, params = {}) {
    return super.execute(
      '/search/user',
      _.assign({}, params, { q }),
      cancelToken
    )
  }

  channel(q, cancelToken, params = {}) {
    return super.execute(
      '/search/channel',
      _.assign({}, params, { q }),
      cancelToken
    )
  }
}

export default Search
