import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';
import { SubscriptionAgreementSectionFragment } from './fragments/subscriptionAgreementSection';

type Parameters = { investmentId: string };
type Hook = UseApiMutationWithParams<'createSubscriptionAgreement', Parameters>;

const createSubscriptionAgreementMutation = gql`
  ${SubscriptionAgreementSectionFragment}
  mutation createSubscriptionAgreement($investmentId: ID!) {
    createSubscriptionAgreement(investmentId: $investmentId) {
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

export const useCreateSubscriptionAgreement: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { createSubscriptionAgreement } = await api.request<Mutation>(createSubscriptionAgreementMutation, { ...input });

      return createSubscriptionAgreement;
    },
  });
