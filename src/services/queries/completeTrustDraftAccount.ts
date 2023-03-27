import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Mutation } from '../../graphql';

import { UseApiMutationWithParams } from './interfaces';

type Parameters = { accountId: string };
type Hook = UseApiMutationWithParams<'completeTrustDraftAccount', Parameters>;

const completeTrustDraftAccountMutation = gql`
  mutation completeTrustDraftAccount($accountId: ID) {
    completeTrustDraftAccount(accountId: $accountId) {
      id
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
