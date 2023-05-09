import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';
import { VerificationActionFragment } from './fragments/verificationAction';

type Parameters = { accountId: string };
type Hook = UseApiMutationWithParams<'verifyAccount', Parameters>;

const verifyAccountMutation = gql`
  ${VerificationActionFragment}
  mutation verifyAccount($accountId: String) {
    verifyAccount(accountId: $accountId) {
      isAccountVerified
      canUserContinueTheInvestment
      requiredActions{
        ...VerificationActionFragment
      }
    }
  }
`;

export const useVerifyAccount: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { verifyAccount } = await api.request<Mutation>(verifyAccountMutation, { ...input });

      return verifyAccount;
    },
  });
