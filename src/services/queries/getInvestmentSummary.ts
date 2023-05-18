import { useQuery } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';
import { Query } from '../../types/graphql';
import { UseApiQueryWithParams } from './interfaces';
import { UsdFragment } from './fragments/usd';

type Hook = UseApiQueryWithParams<'getInvestmentSummary', { investmentId: string }>;

const getInvestmentSummaryQuery = gql`
  ${UsdFragment}
  query getInvestmentSummary($investmentId: ID!) {
    getInvestmentSummary(investmentId: $investmentId) {
      id
      tradeId
      createdAt
      amount {
        ...UsdFragment
      }
      status
      investmentFees {
        ...UsdFragment
      }
      subscriptionAgreementId
    }
  }
`;

export const useGetInvestmentSummary: Hook = (getApiClient, { investmentId, config }) =>
  useQuery<Query['getInvestmentSummary']>({
    queryKey: ['getInvestmentSummary'],
    queryFn: async () => {
      const api = await getApiClient() as GraphQLClient;

      const { getInvestmentSummary } = await api.request<Query>(getInvestmentSummaryQuery, { investmentId });

      return getInvestmentSummary;
    },
    ...config
  });
