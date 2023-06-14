import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';
import { BankAccountLinkFragment } from './fragments/bankAccountLink';

type Parameters = { accountId: string};
type Hook = UseApiMutationWithParams<'updateBankAccount', Parameters>;

const updateBankAccountMutation = gql`
  ${BankAccountLinkFragment}
  mutation updateBankAccount($accountId: ID!) {
    updateBankAccount(accountId: $accountId) {
      ...BankAccountLinkFragment
    }
  }
`;

export const useUpdateBankAccount: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { updateBankAccount } = await api.request<Mutation>(updateBankAccountMutation, { ...input });

      return updateBankAccount;
    },
  });
