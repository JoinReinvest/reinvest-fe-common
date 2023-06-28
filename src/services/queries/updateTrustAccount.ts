import { MutationUpdateTrustAccountArgs } from '../../types/graphql';
import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';
import { TrustAccountDetailsFragment } from './fragments/trustAccountDetails';
import { AvatarFragment } from './fragments/avatar';

type Hook = UseApiMutationWithParams<'updateTrustAccount', MutationUpdateTrustAccountArgs>;

const updateTrustAccountMutation = gql`
  ${TrustAccountDetailsFragment}
  ${AvatarFragment}
  mutation updateTrustAccount($accountId: ID!, $input: UpdateCompanyAccountInput) {
    updateTrustAccount(accountId: $accountId, input: $input) {
      avatar {
        ...AvatarFragment
      }
      details {
        ...TrustAccountDetailsFragment
      }
    }
  }
`;

export const useUpdateTrustAccount: Hook = getApiClient =>
  useMutation({
    mutationFn: async input => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { updateTrustAccount } = await api.request<Mutation>(updateTrustAccountMutation, { ...input });

      return updateTrustAccount;
    },
  });
