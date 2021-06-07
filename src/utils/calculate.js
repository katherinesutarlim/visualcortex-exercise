const taxBracket = {
  Australia: {
    '2020-2021': [
      {
        start: 0,
        end: 18200,
        base: 0,
        perDollar: 0
      },
      {
        start: 18201,
        end: 45000,
        base: 0,
        perDollar: 0.19
      },
      {
        start: 45001,
        end: 120000,
        base: 5092,
        perDollar: 0.325
      },
      {
        start: 120001,
        end: 180000,
        base: 29467,
        perDollar: 0.37
      },
      {
        start: 180001,
        base: 51667,
        perDollar: 0.45
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
          amount:
            bracket.base + (bracket.end - bracket.start) * bracket.perDollar
        };
      }
      return {
        ...bracket,
        amount: bracket.base + (amount - bracket.start) * bracket.perDollar
      };
    });
  }
  return taxBracket['Australia']['2020-2021'].map(bracket => {
    return { ...bracket, amount: 0 };
  });
};

export default calculate;
