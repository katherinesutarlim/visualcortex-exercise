export const formatterWithoutFractions = new Intl.NumberFormat('en-AU', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

export const formatterWithFractions = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
