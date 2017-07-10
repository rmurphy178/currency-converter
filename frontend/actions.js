const initialState = {baseCurrency: "Please select", rates: {}};

const selectCurrency = (baseCurrency, rates) => {
  return {
    type: "SWITCH_CURRENCY",
    baseCurrency: baseCurrency,
    rates: rates
  };
};

export default selectCurrency;
