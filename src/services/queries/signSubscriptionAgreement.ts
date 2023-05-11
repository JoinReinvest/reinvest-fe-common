import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { subscriptionAgreementId: string };
type Hook = UseApiMutationWithParams<'signSubscriptionAgreement', Parameters>;

const signSubscriptionAgreementMutation = gql`
  mutation signSubscriptionAgreement($subscriptionAgreementId: ID!) {
    signSubscriptionAgreement(subscriptionAgreementId: $subscriptionAgreementId)
  }
`;

export const useSignSubscriptionAgreement: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { signSubscriptionAgreement } = await api.request<Mutation>(signSubscriptionAgreementMutation, { ...input });

      return signSubscriptionAgreement;
    },
  });
