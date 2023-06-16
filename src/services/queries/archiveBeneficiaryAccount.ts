import { UpdateBeneficiaryAccountInput } from './../../types/graphql';
import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { accountId: string; input?: UpdateBeneficiaryAccountInput };
type Hook = UseApiMutationWithParams<'archiveBeneficiaryAccount', Parameters>;

const archiveBeneficiaryAccountMutation = gql`
  mutation archiveBeneficiaryAccount($accountId: ID!, $input: UpdateBeneficiaryAccountInput) {
    archiveBeneficiaryAccount(accountId: $accountId, input: $input)
  }
`;

export const useArchiveBeneficiaryAccount: Hook = getApiClient =>
  useMutation({
    mutationFn: async input => {
      const api = (await getApiClient()) as GraphQLClient;

      const { archiveBeneficiaryAccount } = await api.request<Mutation>(archiveBeneficiaryAccountMutation, { ...input });

      return archiveBeneficiaryAccount;
    },
  });
