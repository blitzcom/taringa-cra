import { createFactory } from 'react'

const identity = Component => Component

const branch = (...args) => BaseComponent => {
  const Branch = props => {
    let branchComponent = createFactory(identity(BaseComponent))

    for (let i = 0; i < args.length; i++) {
      let test = args[i][0]

      if (test(props)) {
        let target = args[i][1]
        branchComponent = createFactory(target(BaseComponent))
        break
      }
    }

    return branchComponent(props)
  }

  return Branch
}

export default branch
