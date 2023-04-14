import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Mutation, TrustDraftAccountInput } from '../../types/graphql';

import { UseApiMutationWithParams } from './interfaces';
import { AvatarFragment } from './fragments/avatar';
import { CompanyDraftAccountDetailsFragment } from './fragments/companyDraftAccountDetails';

type Parameters = { accountId: string, input: TrustDraftAccountInput };
type Hook = UseApiMutationWithParams<'completeTrustDraftAccount', Parameters>;

const completeTrustDraftAccountMutation = gql`
  ${AvatarFragment}
  ${CompanyDraftAccountDetailsFragment}
  mutation completeTrustDraftAccount($accountId: ID, $input: TrustDraftAccountInput) {
    completeTrustDraftAccount(accountId: $accountId, input: $input) {
      id
      state
      avatar {
        ...AvatarFragment
      }
      isCompleted
      details {
        ...CompanyDraftAccountDetailsFragment
      }
    }
  }
`;

export const useCompleteTrustDraftAccount: Hook = getApiClient =>
  useMutation({
    mutationFn: async ({ accountId, input }) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { completeTrustDraftAccount } = await api.request<Mutation>(completeTrustDraftAccountMutation, { accountId, input });

      return completeTrustDraftAccount;
    },
  });
