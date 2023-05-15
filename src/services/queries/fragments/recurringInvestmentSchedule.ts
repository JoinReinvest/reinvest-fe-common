import { gql } from 'graphql-request';

export const RecurringInvestmentScheduleFragment = gql`
  fragment RecurringInvestmentScheduleFragment on RecurringInvestmentSchedule {
    startDate
    frequency
  }
`;
