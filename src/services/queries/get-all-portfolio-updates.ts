import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { UseApiQuery } from './interfaces';
import { Query } from '../../types/graphql';
import { PortfolioUpdateFragment } from './fragments/portfolio-update';

type Hook = UseApiQuery<'getAllPortfolioUpdates'>;

const getAllPortfolioUpdatesQuery = gql`
  ${PortfolioUpdateFragment}

  query getPortfolioUpdates {
    getAllPortfolioUpdates {
   		...PortfolioUpdateFragment
    }
  }
`;

export const useGetAllPortfolioUpdatesQuery: Hook = (getApiClient) =>
  useQuery<Query['getAllPortfolioUpdates']>({
    queryKey: ['getAllPortfolioUpdates'],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      };

      const { getAllPortfolioUpdates } = await api.request<Query>(getAllPortfolioUpdatesQuery);

      return getAllPortfolioUpdates;
    }
  });
