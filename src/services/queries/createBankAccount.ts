import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { accountId: string };
type Hook = UseApiMutationWithParams<'createBankAccount', Parameters>;

const createBankAccountMutation = gql`
  mutation createBankAccount($accountId: String!) {
    createBankAccount(accountId: $accountId) {
      link
    }
  }
`;

export const useCreateBank: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { createBankAccount } = await api.request<Mutation>(createBankAccountMutation, { ...input });

      return createBankAccount;
    },
  });
