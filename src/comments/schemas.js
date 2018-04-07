import _ from 'lodash'
import { schema, normalize } from 'normalizr'

const customTags = [
  text =>
    text.replace(/<hashtag tag="(.+?)" \/>/g, '<a href="/hashtags/$1">#$1</a>'),
  text => text.replace(/<mention user="(.+?)" \/>/g, '<a href="/u/$1">@$1</a>'),
]

const getYouTubeId = url => {
  return url.match(/watch\?v=(.+?)$/)[1]
}

const processAttachment = entity => {
  const { type, resourceType, url } = entity

  if (
    type === 'link' &&
    resourceType === 'video.other' &&
    url.indexOf('youtube') !== -1
  ) {
    const videoId = getYouTubeId(entity.url)
    return _.assign({}, { type, resourceType, videoId })
  }

  return _.assign({}, entity)
}

const processStrategy = entity => {
  const body = _.reduce(
    customTags,
    (text, tag) => (tag ? tag(text) : text),
    entity.body
  )

  return _.assign(_.omit(entity, ['classic', 'state']), { body })
}

const attachment = new schema.Entity(
  'commentAttachment',
  {},
  {
    idAttribute: (entity, parent) => parent.id,
    processStrategy: entity => processAttachment(entity),
  }
)

const user = new schema.Entity('users')

export const replies = new schema.Entity(
  'replies',
  {
    attachment: attachment,
    owner: user,
  },
  {
    processStrategy,
  }
)

export const replyRoot = new schema.Entity(
  'replyRoots',
  {
    items: [replies],
  },
  {
    idAttribute: (entity, parent) => parent.id,
    processStrategy: entity => _.assign({}, entity, { status: 'success' }),
  }
)

export const comment = new schema.Entity(
  'comments',
  {
    attachment: attachment,
    owner: user,
    replies: replyRoot,
  },
  {
    processStrategy,
  }
)

export const commentRoot = new schema.Entity('commentRoot', {
  items: [comment],
})

export const normalizeComments = (comments, parentId) => {
  const prenormalize = _.assign(comments, { id: parentId })
  return normalize(prenormalize, commentRoot)
}
