import { useQuery } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';
import { Query } from '../../types/graphql';
import { UseApiQueryWithParams } from './interfaces';
import { AgreementSectionFragment } from './fragments/agreement-section';

type Hook = UseApiQueryWithParams<'getSubscriptionAgreement', { subscriptionAgreementId: string }>;

const getSubscriptionAgreementQuery = gql`
  ${AgreementSectionFragment}
  query getSubscriptionAgreement($subscriptionAgreementId: ID!) {
    getSubscriptionAgreement(subscriptionAgreementId: $subscriptionAgreementId) {
      id
      type
      status
      createdAt
      signedAt
      content {
        ...AgreementSectionFragment
      }
    }
  }
`;

export const useGetSubscriptionAgreement: Hook = (getApiClient, { subscriptionAgreementId, config }) =>
  useQuery<Query['getSubscriptionAgreement']>({
    queryKey: ['getSubscriptionAgreement'],
    queryFn: async () => {
      const api = await getApiClient() as GraphQLClient;

      const { getSubscriptionAgreement } = await api.request<Query>(getSubscriptionAgreementQuery, { subscriptionAgreementId });

      return getSubscriptionAgreement;
    },
    ...config
  });
