import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { UseApiQueryWithParams } from './interfaces'
import { Query, QueryGetIndividualAccountArgs } from 'types/graphql';

import { AvatarFragment } from './fragments/avatar';

type Hook = UseApiQueryWithParams<'getAccountsOverview', QueryGetIndividualAccountArgs>;

const getAccountOverviewQuery = gql`
  ${AvatarFragment}
  query getAccountsOverview {
    getAccountsOverview {
      id
      type
      avatar {
        ...AvatarFragment
      }
      positionTotal
    }
  }
`;

export const useGetAccountOverview: Hook = (getApiClient) =>
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
