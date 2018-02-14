import APIBase from './APIBase'

class Story extends APIBase {
  byId(id) {
    return super.execute(`/story/${id}`)
  }
}

export default Story
