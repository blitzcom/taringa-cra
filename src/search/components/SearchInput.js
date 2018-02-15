import _ from 'lodash'
import React, { Component } from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom'

import './SearchInput.css'

export class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.redirect = this.redirect.bind(this)
    this.emitChangeDebounced = _.debounce(this.emitChange, 250)
  }

  componentWillUnmount() {
    this.emitChangeDebounced.cancel()
  }

  handleChange(e) {
    const value = e.target.value
    this.setState({ value }, () => {
      this.emitChangeDebounced(value)
    })
  }

  handleClear() {
    this.setState({ value: '' }, () => {
      this.props.onClear()
    })
  }

  redirect() {
    const { pathname } = this.props.location

    if (pathname !== '/search') {
      this.props.history.push('/search')
    }
  }

  emitChange(value) {
    this.redirect()
    this.props.onChange(value)
  }

  render() {
    const { isSearching } = this.props
    const { value } = this.state

    const hasContent = value.length > 0

    const iconClass = classNames('fa', {
      'fa-search': !isSearching,
      'fa-circle-notch': isSearching,
      'fa-spin': isSearching,
    })

    return (
      <div className="SearchInput input-group">
        <div className="input-group-prepend">
          <button className="btn" type="button">
            <i className={iconClass} />
          </button>
        </div>
        <input
          className="form-control"
          onChange={this.handleChange}
          placeholder="Buscar canal, post o usuario"
          type="text"
          value={value}
        />
        {
          hasContent && (
            <div className="input-group-append">
              <button
                className="btn"
                type="button"
                onClick={this.handleClear}
              >
                <i className="fa fa-times" />
              </button>
            </div>
          )
        }
      </div>
    )
  }
}

SearchInput.defaultProps = {
  isSearching: false,
  onChange: () => {},
  onClear: () => {},
}

export default withRouter(SearchInput)
