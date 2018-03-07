import { createBrowserHistory } from 'history'
import { animateScroll } from 'react-scroll'

const history = createBrowserHistory()

let prevLocation = {}

history.listen(location => {
  const pathnameHasChanged = prevLocation.pathname !== location.pathname

  if (pathnameHasChanged) {
    window.scrollTo(0, 0)
  } else {
    animateScroll.scrollToTop({ duration: 200 })
  }

  prevLocation = location
})

export default history
