import _ from 'lodash'

export function pluralize(singular, plural = null, onlyWord = false) {
  let word = ''

  if (this && this === 1) {
    word = singular
  } else {
    word = plural || `${singular}s`
  }

  if (onlyWord) {
    return word
  }

  return `${this} ${word}`
}

export function humanize(decimals = 1) {
  let original = this

  let number = Math.abs(this)
  decimals = Math.pow(10, decimals)

  const abbreviations = ['k', 'm', 'b', 't']

  for (let i = abbreviations.length - 1; i >= 0; i--) {
    const size = Math.pow(10, (i + 1) * 3)

    if (size <= number) {
      number = Math.round(number * decimals / size) / decimals

      if (number === 1000 && i < abbreviations.length - 1) {
        number = 1
        i++
      }

      number += abbreviations[i]

      break
    }
  }

  if (original < 0) {
    return `-${number.toString()}`
  }

  return number.toString()
}

_.assign(Number.prototype, {
  humanize,
  pluralize,
})
