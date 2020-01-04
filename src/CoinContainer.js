import React, { Component } from 'react'
import { choice } from './helpers'

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      { side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' }
    ]
  }
  constructor(props) {
    super(props)
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.flipCoin()
  }

  render() {
    return (
      <div className='CoinContainer'>
        <h2>Let's flip a coin!</h2>
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>Out of {this.state.nFilips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
      </div>
    )
  }
}

export default CoinContainer