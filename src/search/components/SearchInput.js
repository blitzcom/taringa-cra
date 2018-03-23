import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import './SearchInput.css'
import { searchTrigger, searchClear } from '../actions'

export class SearchInput extends Component {
  static contextTypes = Link.contextTypes

  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }

    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.redirect = this.redirect.bind(this)
  }

  handleChange(e) {
    const value = e.target.value
    this.setState({ value })
  }

  handleKeyUp(e) {
    const { value } = this.state

    switch (e.which) {
      case 27:
        return this.handleClear()
      case 13:
        return this.emitChange(value)
      default:
        return
    }
  }

  handleClear() {
    if (!this.state.value) {
      return
    }

    this.setState({ value: '' }, () => {
      this.props.onClear()
      this.input && this.input.focus()
    })
  }

  redirect() {
    const { location, push } = this.context.router.history
    const searchURL = '/search'

    if (location.pathname !== searchURL) {
      push(searchURL)
    }
  }

  emitChange(value) {
    this.redirect()
    this.props.onChange(value)
  }

  handleClick() {
    const { value } = this.state
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
      <div className="SearchInput input-group w-100">
        <div className="input-group-prepend">
          <button className="btn" type="button" onClick={this.handleClick}>
            <i className={iconClass} />
          </button>
        </div>
        <input
          className="form-control"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          placeholder="Buscar canal, post o usuario"
          ref={i => (this.input = i)}
          type="text"
          value={value}
        />
        {hasContent && (
          <div className="input-group-append">
            <button className="btn" type="button" onClick={this.handleClear}>
              <i className="fa fa-times" />
            </button>
          </div>
        )}
      </div>
    )
  }
}

SearchInput.defaultProps = {
  isSearching: false,
  onChange: () => {},
  onClear: () => {},
}

const mapStateToProps = state => {
  return {
    isSearching: state.control.searchFetch.status === 'fetching',
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: value =>
      value.length > 0
        ? dispatch(searchTrigger(value))
        : dispatch(searchClear()),
    onClear: () => dispatch(searchClear()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
