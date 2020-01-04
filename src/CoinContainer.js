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

  render() {
    return (
      <div className='CoinContainer'>
        <h2>Let's flip a coin!</h2>
      </div>
    )
  }
}

export default CoinContainer