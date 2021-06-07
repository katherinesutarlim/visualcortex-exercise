const formatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  // currency: 'AUD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

export default formatter;
