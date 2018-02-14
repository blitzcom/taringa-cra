import APIBase from './APIBase'

class Story extends APIBase {
  byId(id) {
    return super.execute(`/story/${id}`)
  }

  comments(id, after = '') {
    return super.execute(`/story/${id}/comments`, { after })
  }
}

export default Story
