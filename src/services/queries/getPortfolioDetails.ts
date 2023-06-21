import { PropertiesFragment } from './fragments/properties';
import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query } from '../../types/graphql';
import { UseApiQuery } from './interfaces';

type Hook = UseApiQuery<'getPortfolioDetails'>;

const portfolioDetailsQuery = gql`
  ${PropertiesFragment}

  query getPortfolioDetails {
    getPortfolioDetails {
      id
      name
      properties {
        ...PropertiesFragment
      }
    }
  }
`;

export const useGetPropertyDetails: Hook = getApiClient =>
  useQuery<Query['getPortfolioDetails']>({
    queryKey: ['getPortfolioDetails'],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { getPortfolioDetails } = await api.request<Query>(portfolioDetailsQuery);

      return getPortfolioDetails;
    },
  });
