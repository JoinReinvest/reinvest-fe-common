import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation, FulfillBankAccountInput } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { accountId: string, input: FulfillBankAccountInput};
type Hook = UseApiMutationWithParams<'fulfillBankAccount', Parameters>;

const fulfillBankAccountMutation = gql`
  mutation fulfillBankAccount($accountId: String!, $input: FulfillBankAccountInput!) {
    fulfillBankAccount(accountId: $accountId, input: $input)
  }
`;

export const useFulfillBankAccount: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { fulfillBankAccount } = await api.request<Mutation>(fulfillBankAccountMutation, { ...input });

      return fulfillBankAccount;
    },
  });
