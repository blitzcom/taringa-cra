import APIBase from './APIBase'

import Story from './Story'
import User from './User'

class API extends APIBase {
  constructor() {
    super()
    this._story = new Story()
    this._user = new User()
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
