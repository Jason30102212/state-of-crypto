import React, { Component } from 'react';
import axios from 'axios';
import isEmpty from '../../validation/is-empty'
import {
  CRYPTO_COMPARE_URL,
  CRYPTO_COMPARE_TEMP,
  CRYPTO_COMPARE_KEY
} from '../../config/api/cryptoCompareConsts';

class Prices extends Component {

  state = {
    prices: []
  }

  componentDidMount = () => {
    console.log("In componentDidMount");
    const url = CRYPTO_COMPARE_URL + CRYPTO_COMPARE_TEMP + CRYPTO_COMPARE_KEY;
    // Add URI to API
    axios.get(url)
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
