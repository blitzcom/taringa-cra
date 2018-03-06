export const pluralize = (count, singular, plural = null, onlyWord = false) => {
  let word = ''

  if (count && count === 1) {
    word = singular
  } else {
    word = plural || `${singular}s`
  }

  if (onlyWord) {
    return word
  }

  return `${count} ${word}`
}
