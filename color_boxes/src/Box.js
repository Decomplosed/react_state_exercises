import React, { Component } from 'react'
import { choice } from './helpers'
import './Box.css'

class Box extends Component {
  static deafultProps = {
    allColors: [
      'purple',
      'magneta',
      'lilac',
      'pink'
    ]
  }
  constructor(props) {
    super(props)
    this.state = { color: 'purple' }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {

  }

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    )
  }
}

export default Box