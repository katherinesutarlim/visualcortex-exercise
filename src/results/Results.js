import React, { PureComponent } from 'react';
import formatter from '../utils/formatter';
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
      ? data.reduce((total, item) => {
          console.log(total);
          console.log(item);
          return parseInt(total, 10) + (item.amount || 0);
        }, 0)
      : 0;
    const { visible } = this.state;
    return (
      <div id="right-result" className={visible ? 'visible' : undefined}>
        <div className="text-container">
          <h4>Your estimated taxable income is:</h4>
          <h1>${formatter.format(totalAmount)}.00</h1>
          <h4>Breakdown</h4>
          {data.map((item, index) => (
            <div className="breakdown-section" key={index}>
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
    );
  }
}
