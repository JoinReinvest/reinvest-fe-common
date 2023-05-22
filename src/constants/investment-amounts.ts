import { AccountType } from 'types/graphql';

const small = [
  { value: '100', label: '$100' },
  { value: '500', label: '$500' },
  { value: '1000', label: '$1000' },
  { value: '5000', label: '$5,000' },
];
const medium = [
  { value: '500', label: '$500' },
  { value: '1000', label: '$1,000' },
  { value: '5000', label: '$5,000' },
  { value: '10000', label: '$10k' },
];
const large = [
  { value: '1000', label: '$1,000' },
  { value: '5000', label: '$5,000' },
  { value: '10000', label: '$10k' },
  { value: '20000', label: '$20k' },
];

export const INVESTMENT_PRESET_AMOUNTS = {
  [AccountType.Individual]: {
    oneTime: medium,
    recurring: medium,
  },
  [AccountType.Beneficiary]: {
    oneTime: small,
    recurring: small,
  },
  [AccountType.Corporate]: {
    oneTime: medium,
    recurring: large,
  },
  [AccountType.Trust]: {
    oneTime: medium,
    recurring: large,
  },
};
