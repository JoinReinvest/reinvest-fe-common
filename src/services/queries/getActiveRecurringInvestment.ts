import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';
import { Query } from '../../types/graphql';
import { UseApiQueryWithParams } from './interfaces';
import { RecurringInvestmentScheduleFragment } from './fragments/recurringInvestmentSchedule';

type Hook = UseApiQueryWithParams<'getActiveRecurringInvestment', { accountId: string, config?: UseQueryOptions}>;

export const getActiveRecurringInvestmentQuery = gql`
  ${RecurringInvestmentScheduleFragment}
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

export const useGetActiveRecurringInvestment: Hook = (getApiClient, { accountId, ...config }) => useQuery<Query["getActiveRecurringInvestment"]>({
  queryKey: ["getActiveRecurringInvestment", accountId],
  queryFn: async () => {
    const api = await getApiClient() as GraphQLClient;

    const { getActiveRecurringInvestment } = await api.request<Query>(getActiveRecurringInvestmentQuery, { accountId });

    return getActiveRecurringInvestment;
  },
  ...config
});
