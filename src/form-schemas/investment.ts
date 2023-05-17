import { z } from 'zod';

import { MAXIMUM_INVESTMENT_AMOUNT, MINIMUM_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE, MINIMUM_INVESTMENT_AMOUNT, MINIMUM_RECURRING_INVESTMENT_AMOUNT } from '../constants/investment-limits';
import { AccountType } from '../types/graphql';
import { maskCurrency } from '../utilities/currency';

interface Params {
  accountType?: AccountType;
}

export function generateInvestmentSchema({ accountType = AccountType.Individual }: Params) {
  const minimum = MINIMUM_INVESTMENT_AMOUNT_BY_ACCOUNT_TYPE.get(accountType) || MINIMUM_INVESTMENT_AMOUNT

  const minimumMessasage = InvestmentMessages.getMinimumMessage(minimum);
  const maximumMessage = InvestmentMessages.getMaximumMessage(MAXIMUM_INVESTMENT_AMOUNT);

  return z.object({
    amount: z.number().min(minimum, minimumMessasage).max(MAXIMUM_INVESTMENT_AMOUNT, maximumMessage),
  });
};

class InvestmentMessages {
  static getMinimumMessage = (amount: number) => {
    const maskedAmount = maskCurrency(amount, { addDecimalPoints: true });

    return `Minimum investment amount is ${maskedAmount}`;
  };

  static getMaximumMessage = (amount: number) => {
    const maskedAmount = maskCurrency(amount, { addDecimalPoints: true });

    return `Maximum investment amount is ${maskedAmount}`;
  }
}

export const recurringInvestmentSchema = z.object({
  amount: z.number().min(MINIMUM_RECURRING_INVESTMENT_AMOUNT, InvestmentMessages.getMinimumMessage(MINIMUM_RECURRING_INVESTMENT_AMOUNT)).max(MAXIMUM_INVESTMENT_AMOUNT, InvestmentMessages.getMaximumMessage(MAXIMUM_INVESTMENT_AMOUNT))
});
