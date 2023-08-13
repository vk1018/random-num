import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generate = () => {
    const randomNumber = () => Math.ceil(Math.random() * 99)
    this.setState({count: randomNumber()})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" type="button" onClick={this.generate}>
            Generate
          </button>
          <p className="counter">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
