import React, { PureComponent } from 'react';
import infoOutlinedIcon from '../assets/icons/information-outline.png';
import './style.css';
import './form.css';

export default class Form extends PureComponent {
  state = {
    country: 'Australia',
    incomeYear: '2020-2021',
    amount: null
  };

  render() {
    const { country, incomeYear, amount } = this.state;
    return (
      <div class="half-screen" id="form">
        <h2>Calculate your tax</h2>
        <div class="warning-box">
          <img src={'/icons/mdi_information-outline.png'} />
          <p>Fields marked with * are mandatory</p>
        </div>
        <form
          onSubmit={() => {
            console.log('press');
          }}
        >
          <div class="row">
            <label>Select your country of residence *</label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Australia">Australia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
          <div class="row">
            <label>Select an income year *</label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="2021-2020">2021-2020</option>
              <option value="2019-2020">2019-2020</option>
              <option value="2018-2019">2018-2019</option>
              <option value="2017-2018">2017-2018</option>
            </select>
          </div>
          <div class="row">
            <label>Enter your total taxable income for the income year *</label>
            <div class="amount-input">
              <div class="prefix">$</div>
              <input
                type="text"
                value={amount || ''}
                onChange={event => {
                  this.setState({ amount: parseFloat(event.target.value) });
                  console.log('change', event.target.value);
                }}
                placeholder="Amount"
              />
              <div class="prefix">.00</div>
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
