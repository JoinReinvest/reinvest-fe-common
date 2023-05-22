import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation, UpdateCompanyForVerificationInput } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { input: UpdateCompanyForVerificationInput, accountId: string };
type Hook = UseApiMutationWithParams<'updateCompanyForVerification', Parameters>;

const updateCompanyForVerificationMutation = gql`
  mutation updateCompanyForVerification($accountId: String, $input: UpdateCompanyForVerificationInput!) {
    updateCompanyForVerification(accountId: $accountId, input: $input)
  }
`;

export const useUpdateCompanyForVerification: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { updateCompanyForVerification } = await api.request<Mutation>(updateCompanyForVerificationMutation, { ...input });

      return updateCompanyForVerification;
    },
  });
