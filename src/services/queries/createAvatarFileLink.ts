import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Mutation } from '../../graphql';
import { UseApiMutation } from './interfaces';


const createAvatarFileLinkMutation = gql`
  mutation createAvatarFileLink {
    createAvatarFileLink {
      url
      id
    }
  }
`;

export const useCreateAvatarFileLink: UseApiMutation<'createAvatarFileLink'> = (getApiClient): UseMutationResult<Mutation['createAvatarFileLink']> =>
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
