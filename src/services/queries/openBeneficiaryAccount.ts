import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { CreateBeneficiaryInput, Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';
import { AvatarFragment } from './fragments/avatar';
import { BeneficiaryDetailsFragment } from './fragments/beneficiaryDetails';

type Parameters = { individualAccountId: string, input: CreateBeneficiaryInput };
type Hook = UseApiMutationWithParams<'openBeneficiaryAccount', Parameters>;

const openBeneficiaryAccountMutation = gql`
  ${AvatarFragment}
  ${BeneficiaryDetailsFragment}
  mutation openBeneficiaryAccount($individualAccountId: ID!, $input: CreateBeneficiaryInput!) {
    openBeneficiaryAccount(individualAccountId: $individualAccountId, input: $input) {
      id
      label
      avatar {
        ...AvatarFragment
      }
      details {
        ...BeneficiaryDetailsFragment
      }
    }
  }
`;

export const useOpenBeneficiaryAccount: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { openBeneficiaryAccount } = await api.request<Mutation>(openBeneficiaryAccountMutation, { ...input });

      return openBeneficiaryAccount;
    },
  });
