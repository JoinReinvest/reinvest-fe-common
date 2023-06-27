import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation, MutationRegisterPushNotificationDeviceArgs } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Hook = UseApiMutationWithParams<'registerPushNotificationDevice', MutationRegisterPushNotificationDeviceArgs>;

const registerPushNotificationDevicesMutation = gql`
  mutation registerPushNotificationDevice($deviceId: String!, $deviceToken: String!, $expirationDate: ISODateTime) {
    registerPushNotificationDevice(deviceId: $deviceId, deviceToken: $deviceToken, expirationDate: $expirationDate)
  }
`;

export const useRegisterPushNotificationDevices: Hook = getApiClient =>
  useMutation({
    mutationFn: async input => {
      const api = await getApiClient();

      if (!api) {
        return false;
      }

      const { registerPushNotificationDevice } = await api.request<Mutation>(registerPushNotificationDevicesMutation, { ...input });

      return registerPushNotificationDevice;
    },
  });
