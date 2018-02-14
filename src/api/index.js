import APIBase from './APIBase'

import Story from './Story'

class API extends APIBase {
  constructor() {
    super()
    this._story = new Story()
  }

  get story() {
    return this._story
  }

  url(pathname, params = {}) {
    return super.execute(pathname, params)
  }
}

const api = new API()

export default api
