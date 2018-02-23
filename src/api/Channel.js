import APIBase from './APIBase'

class Channel extends APIBase {
  about(id) {
    return super.execute(`/c/${id}/about`)
  }
}

export default Channel
