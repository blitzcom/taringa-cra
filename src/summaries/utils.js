import { humanizeNum } from '../Utils'

const getThumbnail = (story = {}) => {
  if (story.summary.images.amount > 0) {
    return story.summary.images.slice[0].url
  } else if (
    story.summary.link !== null &&
    story.summary.link.images.length > 0
  ) {
    return story.summary.link.images[0].url
  } else {
    return null
  }
}

const getTitle = (story = {}) => {
  if ('title' in story && story.title.length > 0) {
    return story.title
  } else {
    return story.summary.excerpt
  }
}

const getIcon = (story = {}) => {
  const [kind] = story.tags

  switch (kind) {
    case 'image':
      return 'fa fa-image'
    case 'link':
      return 'fa fa-link'
    case 'article':
      return 'fa fa-file-alt'
    case 'text':
      return 'fa fa-comment'
    default:
      return 'fa fa-question'
  }
}

const getPreview = (story = {}) => {
  const [kind] = story.tags

  switch (kind) {
    case 'image':
    case 'article':
      if (story.summary.images.amount > 0) {
        return {
          kind: 'image',
          content: story.summary.images.slice[0].url,
        }
      }

      return null
    case 'text':
      return {
        kind: 'text',
        content: story.summary.excerpt,
      }
    case 'link':
      return {
        kind: 'text',
        content: story.summary.link.description,
      }
    default:
      return null
  }
}

export const normalizeStory = story => {
  return {
    comments: story.comments,
    created: story.created,
    icon: getIcon(story),
    id: story.id,
    owner: story.owner.username,
    preview: getPreview(story),
    score: humanizeNum(story.upvotes - story.downvotes),
    shares: story.shares,
    slug: story.slug,
    thumbnail: getThumbnail(story),
    title: getTitle(story),
  }
}
