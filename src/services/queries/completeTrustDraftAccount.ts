import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Mutation } from '../../types/graphql';

import { UseApiMutationWithParams } from './interfaces';
import { AvatarFragment } from './fragments/avatar';
import { CompanyDraftAccountDetailsFragment } from './fragments/companyDraftAccountDetails';

type Parameters = { accountId: string };
type Hook = UseApiMutationWithParams<'completeTrustDraftAccount', Parameters>;

const completeTrustDraftAccountMutation = gql`
  ${AvatarFragment}
  ${CompanyDraftAccountDetailsFragment}
  mutation completeTrustDraftAccount($accountId: ID) {
    completeTrustDraftAccount(accountId: $accountId) {
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
    mutationFn: async ({ accountId }) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { completeTrustDraftAccount } = await api.request<Mutation>(completeTrustDraftAccountMutation, { accountId });

      return completeTrustDraftAccount;
    },
  });
