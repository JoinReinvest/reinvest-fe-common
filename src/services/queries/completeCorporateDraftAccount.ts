import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Mutation } from '../../types/graphql';

import { UseApiMutationWithParams } from './interfaces';
import { AvatarFragment } from './fragments/avatar';
import { CompanyDraftAccountDetailsFragment } from './fragments/companyDraftAccountDetails';

type Parameters = { accountId: string };
type Hook = UseApiMutationWithParams<'completeCorporateDraftAccount', Parameters>

const completeCorporateDraftAccountMutation = gql`
  ${AvatarFragment}
  ${CompanyDraftAccountDetailsFragment}
  mutation completeCorporateDraftAccount($accountId: ID, $input: CorporateDraftAccountInput) {
    completeCorporateDraftAccount(accountId: $accountId) {
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

export const useCompleteCorporateDraftAccount: Hook = getApiClient =>
  useMutation({
    mutationFn: async ({ accountId }) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { completeCorporateDraftAccount } = await api.request<Mutation>(completeCorporateDraftAccountMutation, { accountId });

      return completeCorporateDraftAccount;
    },
  });
