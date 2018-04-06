import APIBase from './APIBase'

class Comments extends APIBase {
  byId(id, params = {}) {
    return super.execute(`/comment/${id}`, params)
  }
}

export default Comments
