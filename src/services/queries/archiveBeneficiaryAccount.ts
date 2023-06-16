import { UsdFragment } from './fragments/usd';
import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { accountId: string };
type Hook = UseApiMutationWithParams<'archiveBeneficiaryAccount', Parameters>;

const archiveBeneficiaryAccountMutation = gql`
  ${UsdFragment}
  mutation archiveBeneficiaryAccount($accountId: ID!) {
    archiveBeneficiaryAccount(accountId: $accountId) {
      archived
      parentAccountUpdatedValue {
        ...UsdFragment
      }
    }
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
