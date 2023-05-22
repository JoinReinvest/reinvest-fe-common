import { AccountType } from '../types/graphql';

export type AmountsOption = { value: string; label: string };
export type InvestmentsAmounts = { [key in AccountType]: { oneTime: AmountsOption[]; recurring: AmountsOption[] } };

const SMALL_AMOUNTS = [
  { value: '100', label: '$100' },
  { value: '500', label: '$500' },
  { value: '1000', label: '$1000' },
  { value: '5000', label: '$5,000' },
];
const MEDIUM_AMOUNTS = [
  { value: '500', label: '$500' },
  { value: '1000', label: '$1,000' },
  { value: '5000', label: '$5,000' },
  { value: '10000', label: '$10k' },
];
const LARGE_AMOUNTS = [
  { value: '1000', label: '$1,000' },
  { value: '5000', label: '$5,000' },
  { value: '10000', label: '$10k' },
  { value: '20000', label: '$20k' },
];

export const INVESTMENT_PRESET_AMOUNTS: InvestmentsAmounts = {
  [AccountType.Individual]: {
    oneTime: MEDIUM_AMOUNTS,
    recurring: MEDIUM_AMOUNTS,
  },
  [AccountType.Beneficiary]: {
    oneTime: SMALL_AMOUNTS,
    recurring: SMALL_AMOUNTS,
  },
  [AccountType.Corporate]: {
    oneTime: MEDIUM_AMOUNTS,
    recurring: LARGE_AMOUNTS,
  },
  [AccountType.Trust]: {
    oneTime: MEDIUM_AMOUNTS,
    recurring: LARGE_AMOUNTS,
  },
};
