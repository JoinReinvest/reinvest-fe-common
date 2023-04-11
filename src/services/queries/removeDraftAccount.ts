import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { draftAccountId: string };
type Hook = UseApiMutationWithParams<'removeDraftAccount', Parameters>;

const removeDraftAccountMutation = gql`
  mutation removeDraftAccount($draftAccountId: String) {
    removeDraftAccount(draftAccountId: $draftAccountId)
  }
`;

export const useRemoveDraftAccount: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { removeDraftAccount } = await api.request<Mutation>(removeDraftAccountMutation, { ...input });

      return removeDraftAccount;
    },
  });
