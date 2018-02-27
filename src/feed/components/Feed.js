import withSummaries from '../../summaries/components/withSummaries'

const getId = props => props.id
const getUrl = props => props.url

const Feed = withSummaries(getId, getUrl)()

export default Feed
