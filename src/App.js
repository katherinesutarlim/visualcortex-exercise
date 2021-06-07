import React, { PureComponent } from 'react';
import Form from './Form';
import Results from './Results';
import calculate from './calculate';
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
    // if (showResult && calculationResult) {

    // }
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
    // return (
    //   <div className="container">
    //     <div id="background" className="left">
    //       <div id="big-circle" />
    //       <div id="small-circle" />
    //     </div>
    //     <div id="left-title" className="half-screen">
    //       <div className="text-container">
    //         <h1>Tax-o-tron</h1>
    //         <h5>The free and simple online tax calculator.</h5>
    //       </div>
    //     </div>
    //     <Form
    //       onSubmit={(country, incomeYear, amount) => {
    //         setTimeout(() => this.setState({
    //           showResult: true,
    //           calculationResult: calculate(country, incomeYear, amount),
    //           inputCountry: country,
    //           inputIncomeYear: incomeYear,
    //           inputAmount: amount
    //         }), 500);
    //       }}
    //     />
    //   </div>
    // );
  }
}
