import withSummaries from '../../summaries/components/withSummaries'

const getId = props => props.match.params.channel
const getUrl = props => `/c/${getId(props)}/feed`

export default withSummaries(getId, getUrl)()
