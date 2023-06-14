import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { DocumentFileLinkInput, Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';
import { FundsWithdrawalRequestFragment } from './fragments/fundsWithdrawalRequest';

type Parameters = { accountId: string, signedWithdrawalAgreementId: DocumentFileLinkInput };
type Hook = UseApiMutationWithParams<'requestFundsWithdrawal', Parameters>;

const requestFundsWithdrawalMutation = gql`
  ${FundsWithdrawalRequestFragment}
  mutation requestFundsWithdrawal($accountId: ID!) {
    requestFundsWithdrawal(accountId: $accountId) {
      ...FundsWithdrawalRequestFragment
    }
  }
`;

export const useRequestFundsWithdrawal: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { requestFundsWithdrawal } = await api.request<Mutation>(requestFundsWithdrawalMutation, { ...input });

      return requestFundsWithdrawal;
    },
  });
