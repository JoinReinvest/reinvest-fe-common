import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation, UpdateProfileForVerificationInput } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { input: UpdateProfileForVerificationInput };
type Hook = UseApiMutationWithParams<'updateProfileForVerification', Parameters>;

const updateProfileForVerificationMutation = gql`
  mutation updateProfileForVerification($input: UpdateProfileForVerificationInput!) {
    updateProfileForVerification(input: $input)
  }
`;

export const useUpdateProfileForVerification: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { updateProfileForVerification } = await api.request<Mutation>(updateProfileForVerificationMutation, { ...input });

      return updateProfileForVerification;
    },
  });
