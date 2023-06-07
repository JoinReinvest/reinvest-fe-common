import { UsdInput } from '../types/graphql';

interface MaskCurrencyOptions {
  addDecimalPoints?: boolean;
  addDollarSign?: boolean;
}

export const maskCurrency = (value: number | string, options?: MaskCurrencyOptions) => {
  const addDecimalPoints = options?.addDecimalPoints ?? false;
  const addDollarSign = options?.addDollarSign ?? false;

  const numericValue = typeof value === 'string' ? parseFloat(value) : value;
  const maybeValueWithDecimalPoints = addDecimalPoints ? numericValue.toFixed(2) : numericValue.toString();

  return addDollarSign ? ['$', maybeValueWithDecimalPoints].join('') : maybeValueWithDecimalPoints;
};

/**
 * Parses a numeric value to be used as `UsdInput` from API. Returning
 * an integer representing a float.
 *
 * @example
 * // returns { value: 10000000 }
 * parseToUsdInput(100_000)
*/
export function parseToUsdInput(value: number): UsdInput {
  const calculatedValue = value * 100;
  return { value: calculatedValue };
}
