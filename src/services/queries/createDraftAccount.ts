import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { DraftAccountType, Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { type: DraftAccountType };
type Hook = UseApiMutationWithParams<'createDraftAccount', Parameters>;

const createDraftAccountMutatuion = gql`
  mutation createDraftAccount($type: DraftAccountType) {
    createDraftAccount(type: $type) {
      id
      type
    }
  }
`;

export const useCreateDraftAccount: Hook = getApiClient =>
  useMutation({
    mutationFn: async ({ type }) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { createDraftAccount } = await api.request<Mutation>(createDraftAccountMutatuion, { type });

      return createDraftAccount;
    },
  });
