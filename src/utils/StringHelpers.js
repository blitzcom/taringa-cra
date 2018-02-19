export const pluralize = (count, singular, plural = null) => {
  let word = ''

  if (count && count === 1) {
    word = singular
  } else {
    word = plural || `${singular}s`
  }

  return `${count} ${word}`
}
