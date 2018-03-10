export const scrolledToBottom = (scrollThreshold = 400) => {
  const scrollTop =
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop

  const windowHeight =
    document.documentElement.clientHeight || window.innerHeight

  const documentHeight = document.body.clientHeight

  return documentHeight - scrollTop - windowHeight < scrollThreshold
}

global.Viewport = {
  scrolledToBottom,
}
