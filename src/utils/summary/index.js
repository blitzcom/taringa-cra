import Summary from './Summary'

import Article from './Article'
import Image from './Image'
import Text from './Text'

class Normalizer {
  constructor() {
    this.strategies = {
      article: Article,
      image: Image,
      text: Text,
    }
  }

  normalize(summary) {
    const [kind] = summary.tags
    const strategy = this.strategies[kind]
    let instance = null

    if (strategy) {
      instance = new strategy()
    } else {
      instance = new Summary()
    }

    return instance.exec(summary)
  }
}

const normalizer = new Normalizer()

export default normalizer
