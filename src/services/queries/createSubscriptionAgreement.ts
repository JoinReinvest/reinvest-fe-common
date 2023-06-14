import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';
import { AgreementSectionFragment } from './fragments/agreement-section';

type Parameters = { investmentId: string };
type Hook = UseApiMutationWithParams<'createSubscriptionAgreement', Parameters>;

const createSubscriptionAgreementMutation = gql`
  ${AgreementSectionFragment}
  mutation createSubscriptionAgreement($investmentId: ID!) {
    createSubscriptionAgreement(investmentId: $investmentId) {
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

export const useCreateSubscriptionAgreement: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { createSubscriptionAgreement } = await api.request<Mutation>(createSubscriptionAgreementMutation, { ...input });

      return createSubscriptionAgreement;
    },
  });
