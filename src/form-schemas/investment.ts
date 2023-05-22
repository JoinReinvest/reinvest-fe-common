import { ONE_TIME_CORPORATION_MIN_AMOUNT } from './../constants/investment-limits';
import { z } from 'zod';

import {
  MINIMUM_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE,
  ONE_TIME_INVESTMENT_MAX_AMOUNT,
  RECURRING_INVESTMENT_MAX_AMOUNT,
  RECURRING_INVESTMENT_MIN_AMOUNT,
} from '../constants/investment-limits';
import { AccountType } from '../types/graphql';
import { maskCurrency } from '../utilities/currency';

interface Params {
  accountType?: AccountType;
}

export function generateInvestmentSchema({ accountType = AccountType.Individual }: Params) {
  const minimum = MINIMUM_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE.get(accountType) || ONE_TIME_CORPORATION_MIN_AMOUNT;

  const minimumMessasage = InvestmentMessages.getMinimumMessage(minimum);
  const maximumMessage = InvestmentMessages.getMaximumMessage(ONE_TIME_INVESTMENT_MAX_AMOUNT);

  return z.object({
    amount: z.number().min(minimum, minimumMessasage).max(ONE_TIME_INVESTMENT_MAX_AMOUNT, maximumMessage),
  });
}

class InvestmentMessages {
  static getMinimumMessage = (amount: number) => {
    const maskedAmount = maskCurrency(amount, { addDecimalPoints: true });

    return `Minimum investment amount is ${maskedAmount}`;
  };

  static getMaximumMessage = (amount: number) => {
    const maskedAmount = maskCurrency(amount, { addDecimalPoints: true });

    return `Maximum investment amount is ${maskedAmount}`;
  };
}

export const recurringInvestmentSchema = z.object({
  amount: z
    .number()
    .min(RECURRING_INVESTMENT_MIN_AMOUNT, InvestmentMessages.getMinimumMessage(RECURRING_INVESTMENT_MIN_AMOUNT))
    .max(RECURRING_INVESTMENT_MAX_AMOUNT, InvestmentMessages.getMaximumMessage(RECURRING_INVESTMENT_MAX_AMOUNT)),
});
