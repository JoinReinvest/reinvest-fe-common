import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation } from 'types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { countryCode: string; phoneNumber: string, authCode: string };
type Hook = UseApiMutationWithParams<'verifyPhoneNumber', Parameters>;

const verifyPhoneNumberMutation = gql`
  mutation verifyPhoneNumber($countryCode: String, phoneNumber: String, authCode: String) {
    verifyPhoneNumber(countryCode: $countryCode, phoneNumber: $phoneNumber, authCode: $authCode)
  }
`;

export const useVerifyPhoneNumber: Hook = (getApiClient, { countryCode, phoneNumber, authCode }) =>
  useMutation({
    mutationFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { verifyPhoneNumber } = await api.request<Mutation>(verifyPhoneNumberMutation, { countryCode, phoneNumber, authCode });

      return verifyPhoneNumber;
    },
  });
