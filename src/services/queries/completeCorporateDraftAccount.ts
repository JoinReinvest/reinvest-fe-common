import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Mutation } from '../../types/graphql';

import { UseApiMutationWithParams } from './interfaces';

type Parameters = { accountId: string };
type Hook = UseApiMutationWithParams<'completeCorporateDraftAccount', Parameters>

const completeCorporateDraftAccountMutation = gql`
  mutation completeCorporateDraftAccount($accountId: ID) {
    completeCorporateDraftAccount(accountId: $accountId) {
      id
    }
  }
`;

export const useCompleteCorporateDraftAccount: Hook = (getApiClient, { accountId }) => (
  useMutation({
    mutationFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { completeCorporateDraftAccount } = await api.request<Mutation>(completeCorporateDraftAccountMutation, { accountId });

      return completeCorporateDraftAccount;
    },
  })
)
