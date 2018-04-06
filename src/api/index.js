import APIBase from './APIBase'

import Channel from './Channel'
import Comment from './Comment'
import Search from './Search'
import Story from './Story'
import User from './User'

class API extends APIBase {
  constructor() {
    super()
    this._channel = new Channel()
    this._comment = new Comment()
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

  get comment() {
    return this._comment
  }

  url(pathname, params = {}) {
    return super.execute(pathname, params)
  }
}

const api = new API()

export default api
