import _ from 'lodash'

export function scale(width, height) {
  if (this.indexOf('kn3') === -1) {
    return this
  }

  return this.replace(/(\w+?)(\.\w+?)$/g, `${width}x${height || width}_$1$2`)
}

export function slugToId() {
  const matches = this.match(/_(\w+)$/)

  if (matches && matches.length > 0) {
    return matches[1]
  }

  return ''
}

_.assign(String.prototype, {
  scale,
  slugToId,
})
