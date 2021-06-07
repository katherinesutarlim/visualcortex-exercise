import React, { Component } from 'react';
import Form from './Form';
import calculate from './calculate';
import formatter from './formatter';
import './style.css';

export default class App extends Component {
  state = {
    showResult: true,
    calculationResult: null,
    inputCountry: 'Australia',
    inputIncomeYear: '2020-2021',
    inputAmount: null
  };
  render() {
    const {
      showResult,
      calculationResult,
      inputCountry,
      inputIncomeYear,
      inputAmount
    } = this.state;
    if (showResult && calculationResult) {
      const totalAmount = calculationResult.reduce(
        (total, item) => parseInt(total, 10) + (item.amount || 0),
        0
      );
      return (
        <div className="container">
          <div id="background" className="right">
            <div id="big-circle" />
            <div id="small-circle" />
          </div>
          <Form
            result
            onReturn={() => this.setState({ showResult: false })}
            initialCountry={inputCountry}
            initialIncomeYear={inputIncomeYear}
            initialAmount={inputAmount}
          />
          <div id="right-result" className="half-screen">
            <div className="text-container">
              <h4>Your estimated taxable income is:</h4>
              <h1>${formatter.format(totalAmount)}.00</h1>
              <h4>Breakdown</h4>
              {calculationResult.map(item => (
                <div className="breakdown-section">
                  <div className="bracket-info">
                    <h5>Tax Bracket</h5>
                    <span>
                      {item.end
                        ? `${formatter.format(item.start)} - ${formatter.format(
                            item.end
                          )}`
                        : `${formatter.format(item.start - 1)}+`}
                    </span>
                  </div>
                  <h3>${formatter.format(item.amount)}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div id="background" className="left">
          <div id="big-circle" />
          <div id="small-circle" />
        </div>
        <div id="left-title" className="half-screen">
          <div className="text-container">
            <h1>Tax-o-tron</h1>
            <h5>The free and simple online tax calculator.</h5>
          </div>
        </div>
        <Form
          onSubmit={(country, incomeYear, amount) => {
            this.setState({
              showResult: true,
              calculationResult: calculate(country, incomeYear, amount),
              inputCountry: country,
              inputIncomeYear: incomeYear,
              inputAmount: amount
            });
          }}
        />
      </div>
    );
  }
}
