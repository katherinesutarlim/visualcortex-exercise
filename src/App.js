import React, { PureComponent } from 'react';
import Form from './form/Form';
import Results from './results/Results';
import calculate from './utils/calculate';
import './common/fonts.css';
import './style.css';

export default class App extends PureComponent {
  state = {
    showResult: true,
    calculationResult: null,
    inputCountry: 'Australia',
    inputIncomeYear: '2020-2021',
    inputAmount: null
  };

  onFormSubmit = (country, incomeYear, amount) =>
    this.setState({
      showResult: true,
      calculationResult: calculate(country, incomeYear, amount),
      inputCountry: country,
      inputIncomeYear: incomeYear,
      inputAmount: amount
    });

  render() {
    const {
      showResult,
      calculationResult,
      inputCountry,
      inputIncomeYear,
      inputAmount
    } = this.state;
    const resultAvailable = showResult && calculationResult;
    return (
      <div className="container">
        <div id="background" className={resultAvailable ? 'right' : 'left'}>
          <div id="big-circle" />
          <div id="small-circle" />
        </div>
        {resultAvailable ? null : (
          <div id="left-title">
            <div className="text-container">
              <h1>Tax-o-tron</h1>
              <h5>The free and simple online tax calculator.</h5>
            </div>
          </div>
        )}
        <Form
          result={resultAvailable}
          onSubmit={this.onFormSubmit}
          onReturn={() => this.setState({ showResult: false })}
          initialCountry={inputCountry}
          initialIncomeYear={inputIncomeYear}
          initialAmount={inputAmount}
        />
        {resultAvailable ? <Results data={calculationResult} /> : null}
      </div>
    );
  }
}
