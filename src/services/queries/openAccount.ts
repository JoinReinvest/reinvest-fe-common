import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { draftAccountId: string };
type Hook = UseApiMutationWithParams<'openAccount', Parameters>;

const openAccountMutation = gql`
  mutation openAccount($draftAccountId: ID!) {
    openAccount(draftAccountId: $draftAccountId)
  }
`;

export const useOpenAccount: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { openAccount } = await api.request<Mutation>(openAccountMutation, { ...input });

      return openAccount;
    },
  });
