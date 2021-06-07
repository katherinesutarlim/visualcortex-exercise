import React, { PureComponent } from 'react';
// import infoOutlinedIcon from './mdi_information-outline.png';
// import Icon from '@material-ui/core/Icon';
import formatter from './formatter';
import './style.css';
import './form.css';

export default class Form extends PureComponent {
  constructor(props) {
    super(props);
    const { initialCountry, initialIncomeYear, initialAmount } = this.props;
    this.state = {
      country: initialCountry || 'Australia',
      incomeYear: initialIncomeYear || '2020-2021',
      amount: initialAmount || null,
      invisible: false
    };
  }

  onAmountChange = event => {
    this.setState({
      amount: parseInt(event.target.value.replace(/,/g, ''), 10)
    });
  };

  render() {
    const { country, incomeYear, amount, invisible } = this.state;
    const { result, onSubmit, onReturn } = this.props;
    return (
      <div
        className="half-screen"
        id="form"
        className={result ? 'left' : 'right'}
      >
        <h2>Calculate your tax</h2>
        <div className="warning-box">
          {/* <img src={infoOutlinedIcon} /> */}
          {/* <Icon>star</Icon> */}
          <p>Fields marked with * are mandatory</p>
        </div>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.setState({ invisible: true }, () =>
              onSubmit(country, incomeYear, amount)
            );
          }}
        >
          <div className="row">
            <label>Select your country of residence *</label>
            <select
              value={this.state.value}
              onChange={this.handleChange}
              disabled={result}
            >
              <option value="Australia">Australia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
          <div className="row">
            <label>Select an income year *</label>
            <select
              value={this.state.value}
              onChange={this.handleChange}
              disabled={result}
            >
              <option value="2021-2020">2021-2020</option>
              <option value="2019-2020">2019-2020</option>
              <option value="2018-2019">2018-2019</option>
              <option value="2017-2018">2017-2018</option>
            </select>
          </div>
          <div className="row">
            <label>Enter your total taxable income for the income year *</label>
            <div className={`amount-input${result ? ' disabled' : ''}`}>
              <div className="prefix">$</div>
              <input
                type="text"
                value={amount ? formatter.format(amount) : ''}
                onChange={this.onAmountChange}
                placeholder="Amount"
                disabled={result}
              />
              <div className="prefix">.00</div>
            </div>
          </div>
          {result ? (
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                onReturn();
              }}
            >
              Go back to previous screen
            </a>
          ) : (
            <input type="submit" value="Calculate" />
          )}
        </form>
      </div>
    );
  }
}
