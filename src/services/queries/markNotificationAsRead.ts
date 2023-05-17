import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation, MutationMarkNotificationAsReadArgs } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Hook = UseApiMutationWithParams<'markNotificationAsRead', MutationMarkNotificationAsReadArgs>;

const markNotificationAsReadMutation = gql`
  mutation markNotificationAsRead($notificationId: String!) {
    markNotificationAsRead(notificationId: $notificationId)
  }
`;

export const useMarkNotificationAsRead: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient();

      if (!api) {
        return false;
      }

      const { markNotificationAsRead } = await api.request<Mutation>(markNotificationAsReadMutation, { ...input });

      return markNotificationAsRead;
    },
  });
