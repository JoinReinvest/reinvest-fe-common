import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Mutation } from 'types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { numberOfLinks: number };
type Hook = UseApiMutationWithParams<'createDocumentsFileLinks', Parameters>;

const createDocumentsFileLinksMutation = gql`
  mutation createDocumentsFileLinks($numberOfLinks: numberOfLinks_Int_NotNull_min_1_max_10!) {
    createDocumentsFileLinks(numberOfLinks: $numberOfLinks) {
      id
      url
    }
  }
`;

export const useCreateDocumentsFileLinks: Hook = getApiClient =>
  useMutation({
    mutationFn: async ({ numberOfLinks }) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { createDocumentsFileLinks } = await api.request<Mutation>(createDocumentsFileLinksMutation, { numberOfLinks });

      return createDocumentsFileLinks;
    },
  });
