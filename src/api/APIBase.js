import axios from 'axios'

class APIBase {
  execute(url, params = {}, method = 'get', data = {}) {
    return axios({
      data,
      method,
      params,
      url,
    }).then(response => response.data)
  }
}

export default APIBase
