import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutation } from './interfaces';

type Hook = UseApiMutation<'updateEmailAddress'>

const updateEmailAddressMutation = gql`
  mutation updateEmailAddress {
    updateEmailAddress
  }
`;

export const useUpdateEmailAddress: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { updateEmailAddress } = await api.request<Mutation>(updateEmailAddressMutation);

      return updateEmailAddress;
    },
  });
