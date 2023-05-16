import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';
import { Query } from '../../types/graphql';
import { UseApiQueryWithParams } from './interfaces';
import { UsdFragment } from './fragments/usd';
import { RecurringInvestmentScheduleFragment } from './fragments/recurringInvestmentSchedule';

type Hook = UseApiQueryWithParams<'getDraftRecurringInvestment', { accountId: string, config?: UseQueryOptions}>;

export const getDraftRecurringInvestmentQuery = gql`
  ${UsdFragment}
  ${RecurringInvestmentScheduleFragment}
  query getDraftRecurringInvestment($accountId: ID!) {
    getDraftRecurringInvestment(accountId: $accountId) {
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

export const useGetDraftRecurringInvestment: Hook = (getApiClient, { accountId, ...config }) => useQuery<Query["getDraftRecurringInvestment"]>({
  queryKey: ["getDraftRecurringInvestment", accountId],
  queryFn: async () => {
    const api = await getApiClient() as GraphQLClient;

    const { getDraftRecurringInvestment } = await api.request<Query>(getDraftRecurringInvestmentQuery, { accountId });

    return getDraftRecurringInvestment;
  },
  ...config
});
