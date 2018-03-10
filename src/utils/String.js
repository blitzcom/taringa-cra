import _ from 'lodash'

export function scale(width, height) {
  if (!this.isKN3()) {
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

export function thumbnail(width, height, size = 78) {
  let nextSize = ''

  if (width < height) {
    nextSize = `${size}x${height}`
  } else if (height < width) {
    nextSize = `${width}x${size}`
  } else {
    nextSize = `${size}x${size}`
  }

  if (!this.isKN3()) {
    return this
  }

  return this.replace(/(\w+?)(\.\w+?)$/g, `${nextSize}_$1$2`)
}

export function isKN3() {
  return this.indexOf('kn3') > -1
}

_.assign(String.prototype, {
  isKN3,
  scale,
  slugToId,
  thumbnail,
})
