import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Mutation, ProfileDetailsInput } from '../../types/graphql';

import { UseApiMutationWithParams } from './interfaces';
import { AccountsFragment } from './fragments/accounts';
import { ProfileDetailsFragment } from './fragments/profileDetails';

type Parameters = { input: ProfileDetailsInput };
type Hook = UseApiMutationWithParams<'completeProfileDetails', Parameters>;

const completeProfileDetailsMutation = gql`
  ${ProfileDetailsFragment}
  ${AccountsFragment}
  mutation completeProfileDetails($input: ProfileDetailsInput) {
    completeProfileDetails(input: $input) {
      externalId
      label
      isCompleted
      details {
        ...ProfileDetailsFragment
      }
      accounts {
        ...AccountsFragment
      }
    }
  }
`;

export const useCompleteProfileDetails: Hook = getApiClient =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { completeProfileDetails } = await api.request<Mutation>(completeProfileDetailsMutation, { ...input });

      return completeProfileDetails;
    },
  });
