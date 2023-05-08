import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query } from '../../types/graphql';
import { UseApiQuery } from './interfaces';

type Hook = UseApiQuery<'getDocument'>;

const getDocumentQuery = gql`
  query getDocument(documentId: String!) {
    getDocument(documentId: documentId) {
      id
      url
    }
  }
`;

export const useGetTemplate: Hook = (getApiClient) =>
  useQuery<Query['getDocument']>({
    queryKey: ['getDocument'],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { getDocument } = await api.request<Query>(getDocumentQuery);

      return getDocument;
    },
  });
