import withSummaries from '../../summaries/components/withSummaries'

const getId = props => props.id

const getUrl = props => props.url

export default withSummaries(getId, getUrl)()
