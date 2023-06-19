import { MutationUpdateCorporateAccountArgs } from './../../types/graphql';
import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';
import { CorporateAccountDetailsFragment } from './fragments/corporateAccountDetails';

type Hook = UseApiMutationWithParams<'updateCorporateAccount', MutationUpdateCorporateAccountArgs>;

const updateCorporateAccountMutation = gql`
  ${CorporateAccountDetailsFragment}
  mutation updateCorporateAccount($accountId: ID!, $input: UpdateCompanyAccountInput) {
    updateCorporateAccount(accountId: $accountId, input: $input) {
      details {
        ...CorporateAccountDetailsFragment
      }
    }
  }
`;

export const useUpdateCorporateAccount: Hook = getApiClient =>
  useMutation({
    mutationFn: async input => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { updateCorporateAccount } = await api.request<Mutation>(updateCorporateAccountMutation, { ...input });

      return updateCorporateAccount;
    },
  });
