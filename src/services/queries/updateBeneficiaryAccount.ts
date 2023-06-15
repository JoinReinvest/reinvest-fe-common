import { UpdateBeneficiaryAccountInput } from './../../types/graphql';
import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';
import { BeneficiaryDetailsFragment } from './fragments/beneficiaryDetails';

type Parameters = { accountId: string; input: UpdateBeneficiaryAccountInput };
type Hook = UseApiMutationWithParams<'updateBeneficiaryAccount', Parameters>;

const updateBeneficiaryAccountMutation = gql`
  ${BeneficiaryDetailsFragment}
  mutation updateBeneficiaryAccount($accountId: ID!, $input: UpdateBeneficiaryAccountInput) {
    updateBeneficiaryAccount(accountId: $accountId, input: $input) {
      details {
        ...BeneficiaryDetailsFragment
      }
    }
  }
`;

export const useUpdateBeneficiaryAccount: Hook = getApiClient =>
  useMutation({
    mutationFn: async input => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { updateBeneficiaryAccount } = await api.request<Mutation>(updateBeneficiaryAccountMutation, { ...input });

      return updateBeneficiaryAccount;
    },
  });
