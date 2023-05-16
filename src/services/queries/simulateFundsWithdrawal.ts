import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';
import { Query } from "../../types/graphql";
import { UseApiQueryWithParams } from './interfaces';
import { FundsWithdrawalSimulationFragment } from './fragments/fundsWithdrawalSimulation';

type Parameters = { accountId: string, config?: UseQueryOptions }
type Hook = UseApiQueryWithParams<'simulateFundsWithdrawal', Parameters>;

export const simulateFundsWithdrawalQuery = gql`
  ${FundsWithdrawalSimulationFragment}

  query simulateFundsWithdrawal($accountId: String!) {
    simulateFundsWithdrawal(accountId: $accountId) {
      ...FundsWithdrawalSimulationFragment
    }
  }
`;

export const useSimulateFundsWithdrawal: Hook = (getApiClient, { accountId, ...config }) => useQuery<Query["simulateFundsWithdrawal"]>({
  queryKey: ["simulateFundsWithdrawal", accountId],
  queryFn: async () => {
    const api = await getApiClient() as GraphQLClient;

    const { simulateFundsWithdrawal } = await api.request<Query>(simulateFundsWithdrawalQuery, { accountId });

    return simulateFundsWithdrawal;
  },
  ...config
});
