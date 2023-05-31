import { AccountType } from '../types/graphql';

export const ONE_TIME_INVESTMENT_MIN_AMOUNT = 500;
export const ONE_TIME_INVESTMENT_MAX_AMOUNT = 100000;

export const RECURRING_INVESTMENT_MAX_AMOUNT = 20000;
export const RECURRING_INVESTMENT_MIN_AMOUNT = 100;

export const MINIMUM_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE = new Map<AccountType, number>([
  [AccountType.Individual, 500],
  [AccountType.Corporate, 1000],
  [AccountType.Trust, 1000],
  [AccountType.Beneficiary, 100],
]);

export const MINIMUM_RECURRING_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE = new Map<AccountType, number>([
  [AccountType.Individual, 500],
  [AccountType.Corporate, 1000],
  [AccountType.Trust, 1000],
  [AccountType.Beneficiary, 100],
]);

export const MAXIMUM_RECURRING_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE = new Map<AccountType, number>([
  [AccountType.Individual, 10000],
  [AccountType.Corporate, 20000],
  [AccountType.Trust, 20000],
  [AccountType.Beneficiary, 5000],
]);
