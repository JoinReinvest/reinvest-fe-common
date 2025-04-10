import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation, MutationCreateFundsWithdrawalRequestArgs } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';
import { FundsWithdrawalRequestFragment } from './fragments/fundsWithdrawalRequest';

type Hook = UseApiMutationWithParams<'createFundsWithdrawalRequest', MutationCreateFundsWithdrawalRequestArgs>;

const createFundsWithdrawalRequestMutation = gql`
  ${FundsWithdrawalRequestFragment}
  mutation createFundsWithdrawalRequest($accountId: ID!) {
    createFundsWithdrawalRequest(accountId: $accountId) {
      ...FundsWithdrawalRequestFragment
    }
  }
`;

export const useCreateFundsWithdrawalRequest: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { createFundsWithdrawalRequest } = await api.request<Mutation>(createFundsWithdrawalRequestMutation, { ...input });

      return createFundsWithdrawalRequest;
    },
  });
