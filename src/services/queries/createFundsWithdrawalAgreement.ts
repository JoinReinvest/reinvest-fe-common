import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';
import { AgreementSectionFragment } from './fragments/agreement-section';

type Parameters = { accountId: string };
type Hook = UseApiMutationWithParams<'createFundsWithdrawalAgreement', Parameters>;

const createFundsWithdrawalAgreementMutation = gql`
  ${AgreementSectionFragment}
  mutation createFundsWithdrawalAgreement($accountId: ID!) {
    createFundsWithdrawalAgreement(accountId: $accountId) {
      id
      status
      createdAt
      signedAt
      content {
        ...AgreementSectionFragment
      }
    }
  }
`;

export const useCreateFundsWithdrawalAgreement: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { createFundsWithdrawalAgreement } = await api.request<Mutation>(createFundsWithdrawalAgreementMutation, { ...input });

      return createFundsWithdrawalAgreement;
    },
  });
