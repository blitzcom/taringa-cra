import _ from 'lodash'

export const slugToId = slug => {
  if (!slug || !_.isString(slug)) {
    return null
  }

  const matches = slug.match(/_(\w+)$/)

  if (matches && matches.length > 0) {
    return matches[1]
  }

  return null
}
