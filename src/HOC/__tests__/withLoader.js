import React from 'react'

import withLoader from '../withLoader'

const BaseComponent = () => {
  return <div>BaseComponent</div>
}

describe('withLoader', () => {
  it('exists', () => {
    expect(withLoader).toBeDefined()
  })

  it('renders default', () => {
    const Component = withLoader()(BaseComponent)
    const wrapper = shallow(<Component />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders loader when is fetching', () => {
    const Component = withLoader()(BaseComponent)
    const wrapper = shallow(<Component status="fetching" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders loader when has success and has more content', () => {
    const Component = withLoader()(BaseComponent)
    const wrapper = shallow(
      <Component status="success" totalCount={10} items={[1, 2, 3, 4, 5]} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('does not render loader when has success and no more content', () => {
    const Component = withLoader()(BaseComponent)
    const wrapper = shallow(
      <Component status="success" totalCount={5} items={[1, 2, 3, 4, 5]} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('does not render loader when has failure and more content', () => {
    const Component = withLoader()(BaseComponent)
    const wrapper = shallow(
      <Component status="failure" totalCount={10} items={[1, 2, 3, 4, 5]} />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
