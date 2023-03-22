import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query } from 'types/graphql';
import { UseApiQuery } from './interfaces';

type Hook = UseApiQuery<'getTemplate'>;

const getTemplateQuery = gql`
  query getTemplate() {
    getTemplate {
      templateName
      content
      fields
    }
  }
`;

export const useGetTemplate: Hook = (getApiClient) =>
  useQuery<Query['getTemplate']>({
    queryKey: ['getTemplate'],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { getTemplate } = await api.request<Query>(getTemplateQuery);

      return getTemplate;
    },
  });
