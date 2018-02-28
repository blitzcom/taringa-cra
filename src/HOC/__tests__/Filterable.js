import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import withFilter from '../Filterable'
import * as actions from '../../filters/actions'

const mockStore = configureStore([])

describe('Filterable HOC', () => {
  it('exists', () => {
    expect(withFilter).toBeDefined()
  })

  it('renders', () => {
    const WrappedComponent = props => <div>{props.children}</div>
    const Component = withFilter()(WrappedComponent)

    const wrapper = mount(
      <Provider store={mockStore()}>
        <Component>foobar</Component>
      </Provider>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('calls set filters', () => {
    const WrappedComponent = props => <div>{props.children}</div>
    const Component = withFilter(() => ({ id: 'foo' }))(WrappedComponent)

    actions.set = jest.fn().mockImplementation(filters => ({
      type: 'MOCK_FILTER',
      filters: filters,
    }))

    const wrapper = mount(
      <Provider store={mockStore()}>
        <Component>foobar</Component>
      </Provider>
    )

    expect(actions.set).toHaveBeenCalledWith({ id: 'foo' })
  })
})
