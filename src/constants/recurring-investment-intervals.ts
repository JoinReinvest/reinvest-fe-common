export enum RecurringInvestmentInterval {
  WEEKLY = 'weekly',
  BI_WEEKLY = 'bi-weekly',
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
}

export const RECURRING_INVESTMENT_INTERVALS_WITHIN_MONTH = [RecurringInvestmentInterval.WEEKLY, RecurringInvestmentInterval.BI_WEEKLY];

export const RECURRING_INVESTMENT_INTERVAL_LABELS = new Map<RecurringInvestmentInterval, string>([
  [RecurringInvestmentInterval.WEEKLY, 'Weekly'],
  [RecurringInvestmentInterval.BI_WEEKLY, 'Bi-Weekly'],
  [RecurringInvestmentInterval.MONTHLY, 'Monthly'],
  [RecurringInvestmentInterval.QUARTERLY, 'Quaterly'],
]);

export const RECURRING_INVESTMENT_INTERVALS = [
  {
    title: `${RECURRING_INVESTMENT_INTERVAL_LABELS.get(RecurringInvestmentInterval.WEEKLY)}`,
    value: RecurringInvestmentInterval.WEEKLY,
  },
  {
    title: `${RECURRING_INVESTMENT_INTERVAL_LABELS.get(RecurringInvestmentInterval.BI_WEEKLY)}`,
    value: RecurringInvestmentInterval.BI_WEEKLY,
  },
  {
    title: `${RECURRING_INVESTMENT_INTERVAL_LABELS.get(RecurringInvestmentInterval.MONTHLY)}`,
    value: RecurringInvestmentInterval.MONTHLY,
  },
  {
    title: `${RECURRING_INVESTMENT_INTERVAL_LABELS.get(RecurringInvestmentInterval.QUARTERLY)}`,
    value: RecurringInvestmentInterval.QUARTERLY,
  },
];

export const RECURRING_INVESTMENT_INTERVAL_VALUES = [
  RecurringInvestmentInterval.WEEKLY,
  RecurringInvestmentInterval.BI_WEEKLY,
  RecurringInvestmentInterval.MONTHLY,
  RecurringInvestmentInterval.QUARTERLY,
] as const;
