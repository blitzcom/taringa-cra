import _ from 'lodash'
import { createSelector } from 'reselect'
import { slugToId } from '../utils/slug'

const storyState = (state, props) => {
  const id = slugToId(props.match.params.slug)
  const story = state.entities.stories[id]
  return story
}

const storyFetchState = (state, props) => {
  const id = slugToId(props.match.params.slug)
  const control = state.control.storiesFetch[id]
  return control ? control : { error: '', status: 'success' }
}

export const storySelector = createSelector(
  storyState,
  storyFetchState,
  (story, control) => _.assign({}, { data: story, control })
)
