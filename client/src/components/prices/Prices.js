import React, { Component } from 'react';
import axios from 'axios';
import isEmpty from '../../validation/is-empty'

class Prices extends Component {

  state = {
    prices: []
  }

  componentDidMount = () => {
    console.log("In componentDidMount");
    // Add URI to API
    axios.get(``)
      .then(res => {
        console.log(res);
        this.setState({prices: res.data})
      }).catch(err => console.log(err));
  }

  generatePrices = (data) => {
    console.log("In generatePrices");
    return Object.entries(data).map(([key, value]) => {
        console.log(key);
        console.log(value.BTC);
        return(
          <li key={key}>
            {key} : {value.BTC.toString()} BTC
          </li>
        )
      })

  }

  render() {
    console.log(this.state);
    return(
      <div>
        <h1>Prices</h1>
          {!isEmpty(this.state.prices) ?
          <ul>
            {this.generatePrices(this.state.prices)}
          </ul>
          :
          <div>
          </div>
        }
      </div>
    )
  }
}

export default Prices;
