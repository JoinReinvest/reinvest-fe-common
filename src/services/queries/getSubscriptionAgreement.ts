import { useQuery } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';
import { Query } from '../../types/graphql';
import { UseApiQueryWithParams } from './interfaces';
import { SubscriptionAgreementSectionFragment } from './fragments/subscriptionAgreementSection';

type Hook = UseApiQueryWithParams<'getSubscriptionAgreement', { subscriptionAgreementId: string }>;

const getSubscriptionAgreementQuery = gql`
  ${SubscriptionAgreementSectionFragment}
  query getSubscriptionAgreement($subscriptionAgreementId: ID!) {
    getSubscriptionAgreement(subscriptionAgreementId: $subscriptionAgreementId) {
      id
      type
      status
      createdAt
      signedAt
      content {
        ...SubscriptionAgreementSectionFragment
      }
    }
  }
`;

export const useGetInvestmentSummary: Hook = (getApiClient, { subscriptionAgreementId, config }) =>
  useQuery<Query['getSubscriptionAgreement']>({
    queryKey: ['getSubscriptionAgreement'],
    queryFn: async () => {
      const api = await getApiClient() as GraphQLClient;

      const { getSubscriptionAgreement } = await api.request<Query>(getSubscriptionAgreementQuery, { subscriptionAgreementId });

      return getSubscriptionAgreement;
    },
    ...config
  });
