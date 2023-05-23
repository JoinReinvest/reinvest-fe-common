import { AccountType } from '../types/graphql';

export type AmountsOption = { value: string; label: string };
export type InvestmentsAmounts = { [key in AccountType]: AmountsOption[] };

const BENEFICIARY_AMOUNTS = [
  { value: '100', label: '$100' },
  { value: '500', label: '$500' },
  { value: '1000', label: '$1000' },
  { value: '5000', label: '$5,000' },
];
const INDIVIDUAL_AMOUNTS = [
  { value: '500', label: '$500' },
  { value: '1000', label: '$1,000' },
  { value: '5000', label: '$5,000' },
  { value: '10000', label: '$10k' },
];

const CORPORATE_AND_TRUST_AMOUNTS = [
  { value: '1000', label: '$1,000' },
  { value: '5000', label: '$5,000' },
  { value: '10000', label: '$10k' },
  { value: '20000', label: '$20k' },
];

export const INVESTMENT_PRESET_AMOUNTS: InvestmentsAmounts = {
  [AccountType.Individual]: INDIVIDUAL_AMOUNTS,
  [AccountType.Beneficiary]: BENEFICIARY_AMOUNTS,
  [AccountType.Corporate]: CORPORATE_AND_TRUST_AMOUNTS,
  [AccountType.Trust]: CORPORATE_AND_TRUST_AMOUNTS,
};
