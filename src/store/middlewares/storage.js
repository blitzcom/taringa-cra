const StorageMiddleware = store => next => action => {
  if ('storage' in action && localStorage) {
    const { key, value } = action.storage
    localStorage.setItem(action[key], action[value])
  }

  return next(action)
}

export default StorageMiddleware
