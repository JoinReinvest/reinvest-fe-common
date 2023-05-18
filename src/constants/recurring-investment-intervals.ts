import { RecurringInvestmentFrequency } from '../types/graphql';

export const RECURRING_INVESTMENT_INTERVALS_WITHIN_MONTH = [RecurringInvestmentFrequency.Weekly, RecurringInvestmentFrequency.BiWeekly];

export const RECURRING_INVESTMENT_INTERVAL_LABELS = new Map<RecurringInvestmentFrequency, string>([
  [RecurringInvestmentFrequency.Weekly, 'Weekly'],
  [RecurringInvestmentFrequency.BiWeekly, 'Bi-Weekly'],
  [RecurringInvestmentFrequency.Monthly, 'Monthly'],
  [RecurringInvestmentFrequency.Quarterly, 'Quaterly'],
]);

export const RECURRING_INVESTMENT_INTERVALS = [
  {
    title: `${RECURRING_INVESTMENT_INTERVAL_LABELS.get(RecurringInvestmentFrequency.Weekly)}`,
    value: RecurringInvestmentFrequency.Weekly,
  },
  {
    title: `${RECURRING_INVESTMENT_INTERVAL_LABELS.get(RecurringInvestmentFrequency.BiWeekly)}`,
    value: RecurringInvestmentFrequency.BiWeekly,
  },
  {
    title: `${RECURRING_INVESTMENT_INTERVAL_LABELS.get(RecurringInvestmentFrequency.Monthly)}`,
    value: RecurringInvestmentFrequency.Monthly,
  },
  {
    title: `${RECURRING_INVESTMENT_INTERVAL_LABELS.get(RecurringInvestmentFrequency.Quarterly)}`,
    value: RecurringInvestmentFrequency.Quarterly,
  },
];

export const RECURRING_INVESTMENT_INTERVAL_VALUES = [
  RecurringInvestmentFrequency.Weekly,
  RecurringInvestmentFrequency.BiWeekly,
  RecurringInvestmentFrequency.Monthly,
  RecurringInvestmentFrequency.Quarterly,
] as const;
