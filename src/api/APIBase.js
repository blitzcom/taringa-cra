import axios from 'axios'

class APIBase {
  execute(url, params = {}, cancelToken = null, method = 'get', data = {}) {
    return axios({
      cancelToken,
      data,
      method,
      params,
      url,
    }).then(response => response.data)
  }
}

export default APIBase
