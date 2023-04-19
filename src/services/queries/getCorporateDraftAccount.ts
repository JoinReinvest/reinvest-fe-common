import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query } from '../../types/graphql';

import { UseApiQueryWithParams } from './interfaces';

type Parameters = { accountId: string, config: UseQueryOptions };
type Hook = UseApiQueryWithParams<'getCorporateDraftAccount', Parameters>;

const getCorporateDraftAccountQuery = gql`
  query getCorporateDraftAccount($accountId: ID) {
    getCorporateDraftAccount(accountId: $accountId) {
      id
    }
  }
`;

export const useGetCorporateDraftAccount: Hook = (getApiClient, { accountId, ...config }) =>
  useQuery<Query['getCorporateDraftAccount']>({
    queryKey: ['getCorporateDraftAccount', accountId],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { getCorporateDraftAccount } = await api.request<Query>(getCorporateDraftAccountQuery, { accountId });

      return getCorporateDraftAccount;
    },
    ...config
  });
