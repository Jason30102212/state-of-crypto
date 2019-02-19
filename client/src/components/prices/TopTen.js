import React, { Component } from 'react';
import axios from 'axios';
import SelectListGroup from '../common/SelectListGroup';
import Spinner from '../common/Spinner';
import isEmpty from '../../validation/is-empty';
import {
  CRYPTO_COMPARE_URL,
  CRYPTO_TOP_TEN,
  CRYPTO_KEY_EXTENSION,
  CRYPTO_COMPARE_KEY,
  CRYPTO_COMPARE_BASE_URL
} from '../../config/api/cryptoCompareConsts';

class TopTen extends Component {

  state = {
    data: [],
    currentSymbol: 'USD'
  }

  componentDidMount = () => {
    const url = CRYPTO_COMPARE_URL
    + CRYPTO_TOP_TEN
    + this.state.currentSymbol
    + CRYPTO_KEY_EXTENSION
    + CRYPTO_COMPARE_KEY;

    axios.get(url)
      .then(res => {
        this.setState({data: res.data})
      }).catch(err => console.log(err));
  }

  setCurrentSymbolState = (e) => {
    e.preventDefault();
  }

  formatListOptions = (options) => {
    let listOptions = [{"label":"USD"}];
    options.Data.map(option => {
      listOptions.push({"label" : option.CoinInfo.Name})
    })
    return listOptions;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, this.getData);
  }

  getData = () => {
    const url = CRYPTO_COMPARE_URL
    + CRYPTO_TOP_TEN
    + this.state.currentSymbol
    + CRYPTO_KEY_EXTENSION
    + CRYPTO_COMPARE_KEY;

    console.log("In onChange: ");
    console.log("url: " + url);
    console.log("currentSymbol: " + this.state.currentSymbol);

    axios.get(url)
      .then(res => {
        this.setState({data: res.data})
      }).catch(err => console.log(err));
  }

  generatePrices = (data) => {
    return Object.entries(data.Data).map(([key, value]) => {
      return (
        <div className="row p-2" key={key}>
          <div className="col-md-2">
          </div>
          <div className="col-md-1">
            <img className="mini-icon" src={CRYPTO_COMPARE_BASE_URL+value.CoinInfo.ImageUrl} />
          </div>
          <div className="col-md-2">
            <li className="styless text-align-left">
              {parseInt(key) + 1}. {value.CoinInfo.FullName}
            </li>
          </div>
          <div className="col-md-2">
            <li className="styless text-align-left">
              ({value.CoinInfo.Name})
            </li>
          </div>
          <div className="col-md-2">
            <li className="styless text-align-left">
              {Object.entries(value.DISPLAY)[0][1].PRICE}
            </li>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      )
    })
  }

  render () {
    console.log("IN RENDER: ");
    console.log("this.state.currentSymbol: ");
    console.log(this.state.currentSymbol);
    console.log("this.state.data: ");
    console.log(this.state.data);
    return (
      <div>
        <h1>Top 10 Cryptos</h1>
        <div className="container">
          {!isEmpty(this.state.data) ?
            <div>
              <p>Data received</p>
                <SelectListGroup
                  placeholder = "Select a Currency"
                  name="currentSymbol"
                  value={this.state.currentSymbol}
                  onChange={this.onChange}
                  options={this.formatListOptions(this.state.data)} />
              {this.generatePrices(this.state.data)}
            </div>
            :
            <div>
              <Spinner />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default TopTen;
