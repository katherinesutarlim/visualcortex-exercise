import React, { PureComponent } from 'react';
import formatter from '../utils/formatter';
import '../common/fonts.css';
import './form.css';

export default class Form extends PureComponent {
  constructor(props) {
    super(props);
    const { initialCountry, initialIncomeYear, initialAmount } = this.props;
    this.state = {
      country: initialCountry || 'Australia',
      incomeYear: initialIncomeYear || '2020-2021',
      amount: initialAmount || null,
      incompleteForm: false
    };
  }

  onCountryChange = event => {
    this.setState({ country: event.target.value });
  };

  onIncomeYearChange = event => {
    this.setState({ incomeYear: event.target.value });
  };

  onAmountChange = event => {
    this.setState({
      amount: parseInt(event.target.value.replace(/,/g, ''), 10)
    });
  };

  render() {
    const { country, incomeYear, amount, incompleteForm } = this.state;
    const { result, onSubmit, onReturn } = this.props;
    return (
      <div
        className="half-screen"
        id="form"
        className={result ? 'left' : 'right'}
      >
        <h2>{result ? 'Your tax results' : 'Calculate your tax'}</h2>
        {!result && (
          <div className="warning-box">
            <img
              src="https://raw.githubusercontent.com/katherinesutarlim/visualcortex-exercise/master/public/icons/mdi_information-outline.png"
              className="icon"
            />
            <p>Fields marked with * are mandatory</p>
          </div>
        )}
        {incompleteForm && (
          <p className="incomplete-message">
            One or more fields have not been filled. Please complete all the
            mandatory fields.
          </p>
        )}
        <form
          onSubmit={event => {
            event.preventDefault();
            if (!(country && incomeYear && amount)) {
              this.setState({ incompleteForm: true });
            } else {
              this.setState({ incompleteForm: false }, () =>
                onSubmit(country, incomeYear, amount)
              );
            }
          }}
        >
          <div className="row">
            <label>Select your country of residence *</label>
            <select
              value={this.state.value}
              onChange={this.onCountryChange}
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
              onChange={this.onIncomeYearChange}
              disabled={result}
            >
              <option value="2020-2021">2020-2021</option>
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
