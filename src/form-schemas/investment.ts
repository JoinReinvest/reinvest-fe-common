import {
  MAXIMUM_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE,
  MAXIMUM_RECURRING_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE, MINIMUM_RECURRING_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE,
  ONE_TIME_INVESTMENT_MIN_AMOUNT,
} from '../constants/investment-limits';
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
  const minimum = MINIMUM_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE.get(accountType) || ONE_TIME_INVESTMENT_MIN_AMOUNT;
  const maximum = MAXIMUM_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE.get(accountType) || ONE_TIME_INVESTMENT_MAX_AMOUNT;

  const minimumMessage = InvestmentMessages.getMinimumMessage(minimum);
  const maximumMessage = InvestmentMessages.getMaximumMessage(maximum);

  return z.object({
    amount: z.number().min(minimum, minimumMessage).max(ONE_TIME_INVESTMENT_MAX_AMOUNT, maximumMessage).optional(),
  });
}

export function generateRecurringInvestmentSchema({ accountType = AccountType.Individual }: Params) {
  const maximum = MAXIMUM_RECURRING_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE.get(accountType) || RECURRING_INVESTMENT_MAX_AMOUNT;
  const minimum = MINIMUM_RECURRING_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE.get(accountType) || RECURRING_INVESTMENT_MIN_AMOUNT;

  const minimumMessage = InvestmentMessages.getMinimumMessage(minimum);
  const maximumMessage = InvestmentMessages.getMaximumMessage(maximum);

  return z.object({
    amount: z.number().min(minimum, minimumMessage).max(maximum, maximumMessage).optional(),
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
