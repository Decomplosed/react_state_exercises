import React, { Component } from 'react'

class CoinContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currCoin: null,
      nFilips: 0,
      nHeads: 0,
      nTails: 0
    }
  }
}

export default CoinContainer