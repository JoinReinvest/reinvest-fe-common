import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { UseApiQuery } from './interfaces'
import { Query } from 'types/graphql';

import { AvatarFragment } from './fragments/avatar';

type Hook = UseApiQuery<'getAccountsOverview'>;

const getAccountOverviewQuery = gql`
  ${AvatarFragment}
  query getAccountsOverview {
    getAccountsOverview {
      id
      type
      label
      avatar {
        ...AvatarFragment
      }
      positionTotal
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
