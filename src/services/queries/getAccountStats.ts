import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Query, QueryGetAccountStatsArgs } from '../../types/graphql';
import { UseApiQueryWithParams } from './interfaces';
import { AccountStatsFragment } from './fragments/account-stats';

type Parameters = QueryGetAccountStatsArgs & { config?: UseQueryOptions }
type Hook = UseApiQueryWithParams<'getAccountStats', Parameters>;

export const getAccountStatsQuery = gql`
  ${AccountStatsFragment}

  query getAccountStats($accountId: ID!) {
    getAccountStats(accountId: $accountId) {
      ...AccountStatsFragment
    }
  }
`;

export const useGetAccountStats: Hook = (getApiClient, { accountId, ...config }) => useQuery({
  queryKey: ["getAccountStats", accountId],
  queryFn: async () => {
    const api = await getApiClient();

    if (!api) {
      return null;
    }

    const { getAccountStats } = await api.request<Query>(getAccountStatsQuery, { accountId });

    return getAccountStats;
  },
  enabled: !!accountId,
  ...config
});
