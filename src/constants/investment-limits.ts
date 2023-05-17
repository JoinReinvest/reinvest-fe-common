import { AccountType } from "../types/graphql";

export const MINIMUM_RECURRING_INVESTMENT_AMOUNT = 100;
export const MINIMUM_INVESTMENT_AMOUNT = 500;
export const MAXIMUM_INVESTMENT_AMOUNT = 100_000;

export const MINIMUM_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE = new Map<AccountType, number>([
  [AccountType.Individual, 1000],
  [AccountType.Corporate, 1000],
  [AccountType.Trust, 1000],
  [AccountType.Beneficiary, MINIMUM_INVESTMENT_AMOUNT],
]);
