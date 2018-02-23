import APIBase from './APIBase'

import Story from './Story'
import User from './User'
import Search from './Search'
import Channel from './Channel'

class API extends APIBase {
  constructor() {
    super()
    this._channel = new Channel()
    this._search = new Search()
    this._story = new Story()
    this._user = new User()
  }

  get channel() {
    return this._channel
  }

  get search() {
    return this._search
  }

  get story() {
    return this._story
  }

  get user() {
    return this._user
  }

  url(pathname, params = {}) {
    return super.execute(pathname, params)
  }
}

const api = new API()

export default api
