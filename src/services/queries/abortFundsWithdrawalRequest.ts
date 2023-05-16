import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { accountId: string };
type Hook = UseApiMutationWithParams<'abortFundsWithdrawalRequest', Parameters>;

const abortFundsWithdrawalRequestMutation = gql`
  mutation abortFundsWithdrawalRequest($accountId: String!) {
    abortFundsWithdrawalRequest(accountId: $accountId)
  }
`;

export const useAbortFundsWithdrawalRequest: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { abortFundsWithdrawalRequest } = await api.request<Mutation>(abortFundsWithdrawalRequestMutation, { ...input });

      return abortFundsWithdrawalRequest;
    },
  });
