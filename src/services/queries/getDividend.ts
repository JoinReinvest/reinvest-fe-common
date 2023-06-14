import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query, QueryGetDividendArgs } from '../../types/graphql';

import { UseApiQueryWithParams } from './interfaces';
import { DividendFragment } from './fragments/dividend';

type Parameters = QueryGetDividendArgs & { config?: UseQueryOptions };
type Hook = UseApiQueryWithParams<'getDividend', Parameters>;

const getDividendQuery = gql`
  ${DividendFragment}

  query getDividend($dividendId: ID!) {
    getDividend(dividendId: $dividendId) {
      ...DividendFragment
    }
  }
`;

export const useGetDividend: Hook = (getApiClient, { dividendId, ...config }) =>
  useQuery({
    queryKey: ["getDividend", dividendId],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { getDividend } = await api.request<Query>(getDividendQuery, { dividendId });

      return getDividend;
    },
    ...config
  });

