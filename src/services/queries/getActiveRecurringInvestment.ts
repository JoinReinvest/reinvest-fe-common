import { useQuery } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';
import { Query } from '../../types/graphql';
import { UseApiQueryWithParams } from './interfaces';
import { RecurringInvestmentScheduleFragment } from './fragments/recurringInvestmentSchedule';
import { UsdFragment } from './fragments/usd'

type Hook = UseApiQueryWithParams<'getActiveRecurringInvestment', { accountId: string }>;

export const getActiveRecurringInvestmentQuery = gql`
  ${RecurringInvestmentScheduleFragment}
  ${UsdFragment}
  query getActiveRecurringInvestment($accountId: ID!) {
    getActiveRecurringInvestment(accountId: $accountId) {
      id
      schedule {
        ...RecurringInvestmentScheduleFragment
      }
      nextInvestmentDate
      amount {
        ...UsdFragment
      }
      subscriptionAgreementId
      status
    }
  }
`;

export const useGetActiveRecurringInvestment: Hook = (getApiClient, { accountId, config }) => useQuery<Query["getActiveRecurringInvestment"]>({
  queryKey: ["getActiveRecurringInvestment", accountId],
  queryFn: async () => {
    const api = await getApiClient() as GraphQLClient;

    const { getActiveRecurringInvestment } = await api.request<Query>(getActiveRecurringInvestmentQuery, { accountId });

    return getActiveRecurringInvestment;
  },
  ...config
});
