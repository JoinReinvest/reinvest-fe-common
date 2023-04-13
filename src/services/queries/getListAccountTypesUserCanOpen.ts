import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query } from '../../types/graphql';
import { UseApiQuery } from './interfaces';

type Hook = UseApiQuery<'listAccountTypesUserCanOpen'>;

const listAccountTypesUserCanOpenQuery = gql`
  query listAccountTypesUserCanOpen {
    listAccountTypesUserCanOpen
  }
`;

export const useGetListAccountTypesUserCanOpen: Hook = (getApiClient) =>
  useQuery<Query['listAccountTypesUserCanOpen']>({
    queryKey: ['listAccountTypesUserCanOpen'],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { listAccountTypesUserCanOpen } = await api.request<Query>(listAccountTypesUserCanOpenQuery);

      return listAccountTypesUserCanOpen;
    },
  });
