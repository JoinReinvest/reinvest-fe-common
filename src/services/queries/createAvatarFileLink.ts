import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { };
type Hook = UseApiMutationWithParams<'createAvatarFileLink', Parameters>;

const createAvatarFileLinkMutation = gql`
  mutation createAvatarFileLink {
    createAvatarFileLink {
      url
      id
    }
  }
`;

export const useCreateAvatarFileLink: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { createAvatarFileLink } = await api.request<Mutation>(createAvatarFileLinkMutation);

      return createAvatarFileLink;
    },
  });
