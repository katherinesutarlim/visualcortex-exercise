const taxBracket = {
  Australia: {
    '2020-2021': [
      {
        start: 0,
        end: 18200,
        rate: 0
      },
      {
        start: 18201,
        end: 45000,
        rate: 0.19
      },
      {
        start: 45001,
        end: 120000,
        rate: 0.325
      },
      {
        start: 120001,
        end: 180000,
        rate: 0.37
      },
      {
        start: 180001,
        rate: 0.45
      }
    ]
  }
};

const calculate = (country, incomeYear, amount) => {
  if (taxBracket[country] && taxBracket[country][incomeYear]) {
    return taxBracket[country][incomeYear].map(bracket => {
      if (amount < bracket.start) {
        return { ...bracket, amount: 0 };
      }
      if (bracket.end && amount > bracket.end) {
        return {
          ...bracket,
          amount: (bracket.end - bracket.start + 1) * bracket.rate
        };
      }
      return {
        ...bracket,
        amount: (amount - bracket.start + 1) * bracket.rate
      };
    });
  }
  return taxBracket['Australia']['2020-2021'].map(bracket => {
    return { ...bracket, amount: 0 };
  });
};

export default calculate;
