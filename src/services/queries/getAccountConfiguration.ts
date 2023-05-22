import { useQuery } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';
import { Query } from '../../types/graphql';
import { UseApiQueryWithParams } from './interfaces';
import { AutomaticDividendReinvestmentAgreementFragment } from './fragments/automaticDividendReinvestmentAgreement';

type Hook = UseApiQueryWithParams<'getAccountConfiguration', { accountId: string }>;

const getAccountConfigurationQuery = gql`
  ${AutomaticDividendReinvestmentAgreementFragment}
  query getAccountConfiguration($accountId: ID!) {
    getAccountConfiguration(accountId: $accountId) {
      automaticDividendReinvestmentAgreement {
        ...AutomaticDividendReinvestmentAgreementFragment
      }
    }
  }
`;

export const useGetAccountConfiguration: Hook = (getApiClient, { accountId, config }) =>
  useQuery<Query['getAccountConfiguration']>({
    queryKey: ['getAccountConfiguration', accountId],
    queryFn: async () => {
      const api = await getApiClient() as GraphQLClient;

      const { getAccountConfiguration } = await api.request<Query>(getAccountConfigurationQuery, { accountId });

      return getAccountConfiguration;
    },
    ...config
  });
