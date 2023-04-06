import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query } from '../../types/graphql';
import { UseApiQuery } from './interfaces';

type Hook = UseApiQuery<'phoneCompleted'>;

const phoneCompletedQuery = gql`
  query phoneCompleted {
    phoneCompleted
  }
`;

export const useGetPhoneCompleted: Hook = (getApiClient) =>
  useQuery<Query['phoneCompleted']>({
    queryKey: ['phoneCompleted'],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { phoneCompleted } = await api.request<Query>(phoneCompletedQuery);

      return phoneCompleted;
    },
    enabled: false,
  });
