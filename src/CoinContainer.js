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

  handleClick(e) {
    this.flipCoin()
  }

  render() {
    return (
      <div className='CoinContainer'>
        <h2>Let's flip a coin!</h2>
        <button onCLick={this.handleClick}>Flip Me!</button>
        <p>Out of {this.state.nFilips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
      </div>
    )
  }
}

export default CoinContainer