import React, { Component } from 'react'

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      { sude: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' }
    ]
  }
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