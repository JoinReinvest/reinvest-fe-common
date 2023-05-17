interface Options {
  addDecimalPoints?: boolean;
}

export const maskCurrency = (value: number | string, options?: Options) => {
  const addDecimalPoints = !!options?.addDecimalPoints;
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;

  const maybeValueWithDecimalPoints = addDecimalPoints ? numericValue.toFixed(2) : numericValue.toString();

  return `${maybeValueWithDecimalPoints}`
};

