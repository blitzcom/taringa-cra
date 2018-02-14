import APIBase from './APIBase'

class Story extends APIBase {
  byId(id) {
    return super.execute(`/story/${id}`)
  }

  comments(id, params = {}) {
    return super.execute(`/story/${id}/comments`, params)
  }
}

export default Story
