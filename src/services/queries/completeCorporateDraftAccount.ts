import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { CorporateDraftAccountInput, Mutation } from '../../types/graphql';

import { UseApiMutationWithParams } from './interfaces';
import { AvatarFragment } from './fragments/avatar';
import { CompanyDraftAccountDetailsFragment } from './fragments/companyDraftAccountDetails';

type Parameters = { accountId: string, input: CorporateDraftAccountInput };
type Hook = UseApiMutationWithParams<'completeCorporateDraftAccount', Parameters>

const completeCorporateDraftAccountMutation = gql`
  ${AvatarFragment}
  ${CompanyDraftAccountDetailsFragment}
  mutation completeCorporateDraftAccount($accountId: ID, $input: CorporateDraftAccountInput) {
    completeCorporateDraftAccount(accountId: $accountId, input: $input) {
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
    mutationFn: async ({ accountId, input }) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { completeCorporateDraftAccount } = await api.request<Mutation>(completeCorporateDraftAccountMutation, { accountId, input });

      return completeCorporateDraftAccount;
    },
  });
