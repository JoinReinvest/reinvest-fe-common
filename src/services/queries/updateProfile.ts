import { UpdateProfileInput } from './../../types/graphql';
import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { ProfileDetailsFragment } from './fragments/profileDetails';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { input: UpdateProfileInput };
type Hook = UseApiMutationWithParams<'updateProfile', Parameters>;

const updateProfileMutation = gql`
  ${ProfileDetailsFragment}
  mutation updateProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      label
      details {
        ...ProfileDetailsFragment
      }
    }
  }
`;

export const useUpdateProfile: Hook = getApiClient =>
  useMutation({
    mutationFn: async input => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { updateProfile } = await api.request<Mutation>(updateProfileMutation, { ...input });

      return updateProfile;
    },
  });
