import React, { PureComponent } from 'react';
import {
  formatterWithFractions,
  formatterWithoutFractions
} from '../utils/formatters';
import '../common/fonts.css';
import './results.css';

export default class Results extends PureComponent {
  state = {
    visible: false
  };

  componentDidMount() {
    this.setState({ visible: true });
  }

  render() {
    const { data } = this.props;
    const totalAmount = data
      ? data.reduce((total, item) => parseFloat(total) + (item.amount || 0), 0)
      : 0;
    console.log(totalAmount);
    const { visible } = this.state;
    return (
      <div id="right-result" className={visible ? 'visible' : undefined}>
        <div className="text-container">
          <h4>Your estimated taxable income is:</h4>
          <h1>${formatterWithFractions.format(totalAmount)}</h1>
          <h4>Breakdown</h4>
          {data.map((item, index) => (
            <div className="breakdown-section" key={index}>
              <div className="bracket-info">
                <h5>Tax Bracket</h5>
                <span>
                  {item.end
                    ? `${formatterWithoutFractions.format(
                        item.start
                      )} - ${formatterWithoutFractions.format(item.end)}`
                    : `${formatterWithoutFractions.format(item.start - 1)}+`}
                </span>
              </div>
              <h3>${formatterWithoutFractions.format(item.amount)}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
