import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';
import { BankAccountLinkFragment } from './fragments/bankAccountLink';

type Parameters = { accountId: string };
type Hook = UseApiMutationWithParams<'createBankAccount', Parameters>;

const createBankAccountMutation = gql`
  ${BankAccountLinkFragment}
  mutation createBankAccount($accountId: ID!) {
    createBankAccount(accountId: $accountId) {
      ...BankAccountLinkFragment
    }
  }
`;

export const useCreateBankAccount: Hook = (getApiClient) =>
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
