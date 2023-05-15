import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';
import { SubscriptionAgreementFragment } from './fragments/subscriptionAgreement';

type Parameters = { accountId: string };
type Hook = UseApiMutationWithParams<'createRecurringSubscriptionAgreement', Parameters>;

const createRecurringSubscriptionAgreementMutation = gql`
  ${SubscriptionAgreementFragment}
  mutation createRecurringSubscriptionAgreement($accountId: ID!) {
    createRecurringSubscriptionAgreement(accountId: $accountId) {
      ...SubscriptionAgreementFragment
    }
  }
`;

export const useCreateRecurringSubscriptionAgreement: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { createRecurringSubscriptionAgreement } = await api.request<Mutation>(createRecurringSubscriptionAgreementMutation, { ...input });

      return createRecurringSubscriptionAgreement;
    },
  });
