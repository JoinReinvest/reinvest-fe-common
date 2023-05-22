import { AccountType } from '../types/graphql';

export const ONE_TIME_INVESTMENT_MIN_AMOUNT = 500;
export const ONE_TIME_CORPORATION_MIN_AMOUNT = 1000;
export const ONE_TIME_INVESTMENT_MAX_AMOUNT = 100000;

export const RECURRING_INVESTMENT_MAX_AMOUNT = 5000;
export const RECURRING_INVESTMENT_MIN_AMOUNT = 100;

export const MINIMUM_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE = new Map<AccountType, number>([
  [AccountType.Individual, ONE_TIME_INVESTMENT_MIN_AMOUNT],
  [AccountType.Corporate, ONE_TIME_CORPORATION_MIN_AMOUNT],
  [AccountType.Trust, ONE_TIME_CORPORATION_MIN_AMOUNT],
  [AccountType.Beneficiary, ONE_TIME_INVESTMENT_MIN_AMOUNT],
]);
