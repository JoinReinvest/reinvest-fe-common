import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation } from '../../graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { countryCode: string; phoneNumber: string };
type Hook = UseApiMutationWithParams<'setPhoneNumber', Parameters>;

const setPhoneNumberMutation = gql`
  mutation setPhoneNumber($countryCode: String, $phoneNumber: String) {
    setPhoneNumber(countryCode: $countryCode, $phoneNumber: $phoneNumber)
  }
`;

export const useSetPhoneNumber: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { setPhoneNumber } = await api.request<Mutation>(setPhoneNumberMutation, { ...input });

      return setPhoneNumber;
    },
  });
