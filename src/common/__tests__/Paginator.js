import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Paginator from '../Paginator'

describe('Paginator', () => {
  it('renders default', () => {
    const tree = renderer.create(<Paginator currentPage={2} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders as first page', () => {
    const tree = renderer.create(<Paginator currentPage={1} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders as last page', () => {
    const tree = renderer
      .create(<Paginator currentPage={2} isLastPage />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders as one page', () => {
    const tree = renderer
      .create(<Paginator currentPage={1} isLastPage />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders as loading', () => {
    const tree = renderer.create(<Paginator isLoading />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('handles onClickPrevious', () => {
    const mock = jest.fn()
    const paginator = shallow(
      <Paginator currentPage={2} onClickPrevious={mock} />
    )

    paginator.find('button.Paginator-previous').simulate('click')

    expect(mock).toBeCalled()
  })

  it('handles onClickNext', () => {
    const mock = jest.fn()
    const paginator = shallow(<Paginator currentPage={2} onClickNext={mock} />)

    paginator.find('button.Paginator-next').simulate('click')

    expect(mock).toBeCalled()
  })
})
