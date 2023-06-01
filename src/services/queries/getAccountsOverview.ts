import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { UseApiQuery } from './interfaces'
import { Query } from '../../types/graphql';

import { AccountsFragment } from './fragments/accounts';

type Hook = UseApiQuery<'getAccountsOverview'>;

const getAccountOverviewQuery = gql`
  ${AccountsFragment}

  query getAccountsOverview {
    getAccountsOverview {
      ...AccountsFragment
    }
  }
`;

export const useGetAccountsOverview: Hook = (getApiClient) =>
  useQuery<Query['getAccountsOverview']>({
    queryKey: ['getAccountOverview'],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { getAccountsOverview } = await api.request<Query>(getAccountOverviewQuery);

      return getAccountsOverview;
    },
  });
