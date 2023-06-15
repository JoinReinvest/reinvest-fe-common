import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { accountId: string };
type Hook = UseApiMutationWithParams<'signFundsWithdrawalAgreement', Parameters>;

const signFundsWithdrawalAgreementMutation = gql`
  mutation signFundsWithdrawalAgreement($accountId: ID!) {
    signFundsWithdrawalAgreement(accountId: $accountId) {
      id
      createdAt
      signedAt
    }
  }
`;

export const useSignFundsWithdrawalAgreement: Hook = getApiClient =>
  useMutation({
    mutationFn: async input => {
      const api = (await getApiClient()) as GraphQLClient;

      const { signFundsWithdrawalAgreement } = await api.request<Mutation>(signFundsWithdrawalAgreementMutation, { ...input });

      return signFundsWithdrawalAgreement;
    },
  });
