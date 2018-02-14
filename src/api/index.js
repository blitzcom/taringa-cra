import APIBase from './APIBase'

class API extends APIBase {
  url(pathname, params = {}) {
    return super.execute(pathname, params)
  }
}

const api = new API()

export default api
