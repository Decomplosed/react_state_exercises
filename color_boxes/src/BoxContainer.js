import React, { Component } from 'react'
import Box from './Box'

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18
  }
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box />
    ))
  }
}

export default BoxContainer