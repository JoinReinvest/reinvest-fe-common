export type InvestmentTypeKeys = keyof typeof InvestmentTypes;

export enum InvestmentTypes {
  ONE_TIME = 'ONE_TIME',
  RECURRING = 'RECURRING',
}
