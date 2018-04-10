import _ from 'lodash'
import { connect } from 'react-redux'
import { compose, lifecycle, renderComponent, shouldUpdate } from 'recompose'

import StoryContent from './StoryContent'
import { fetchWithComments } from '../actions'
import { storySelector, storyStateSelector } from '../selectors'
import branch from '../../HOC/branch'

const mapStateToProps = (state, { storyId }) => {
  return _.assign(
    {},
    storySelector(state, storyId),
    storyStateSelector(state, storyId)
  )
}

const mapDispatchToProps = (dispatch, { storyId }) => {
  return {
    fetch: () => dispatch(fetchWithComments(storyId)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetch()
    },
  }),
  branch(
    [
      ({ status }) => status === 'fetching',
      renderComponent(StoryContent.Loader),
    ],
    [
      ({ status }) => status === 'failure',
      renderComponent(StoryContent.Failure),
    ]
  ),
  shouldUpdate(() => false)
)(StoryContent)
