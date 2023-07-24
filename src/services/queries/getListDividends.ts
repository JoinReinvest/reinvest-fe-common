import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query, QueryListDividendsArgs } from '../../types/graphql';

import { UseApiQueryWithParams } from './interfaces';

type Parameters = QueryListDividendsArgs & { config?: UseQueryOptions };
type Hook = UseApiQueryWithParams<'encrypt', Parameters>;

const getListDividends = gql`
  query listDividends($accountId: ID!) {
    listDividends(accountId: $accountId) {
      dividendsList {
        id
        date
        amount {
          value
          formatted
        }
        status
      }
    }
  }
`;

export const useGetListDividends: Hook = (getApiClient, { accountId, ...config }) =>
  useQuery({
    queryKey: ['listDividends', accountId],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { listDividends } = await api.request<Query>(getListDividends, { accountId });

      return listDividends;
    },
    ...config,
  });
