import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation, UpdateStakeholderForVerificationInput } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { accountId: string; stakeholderId: string; input: UpdateStakeholderForVerificationInput };
type Hook = UseApiMutationWithParams<'updateStakeholderForVerification', Parameters>;

const updateStakeholderForVerificationMutation = gql`
  mutation updateStakeholderForVerification($accountId: ID!, $stakeholderId: ID!, $input: UpdateStakeholderForVerificationInput!) {
    updateStakeholderForVerification(accountId: $accountId, stakeholderId: $stakeholderId, input: $input)
  }
`;

export const useUpdateStakeholderForVerification: Hook = getApiClient =>
  useMutation({
    mutationFn: async input => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { updateStakeholderForVerification } = await api.request<Mutation>(updateStakeholderForVerificationMutation, { ...input });

      return updateStakeholderForVerification;
    },
  });
