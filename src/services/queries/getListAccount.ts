import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query } from '../../types/graphql';
import { UseApiQuery } from './interfaces';

type Hook = UseApiQuery<'listAccountDrafts'>;

const accountDraftsQuery = gql`
  query listAccountDrafts {
    listAccountDrafts {
      id
      type
    }
  }
`;

export const useGetListAccount: Hook = (getApiClient) =>
  useQuery<Query['listAccountDrafts']>({
    queryKey: ['getAccountDrafts'],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { listAccountDrafts } = await api.request<Query>(accountDraftsQuery);

      return listAccountDrafts;
    },
  });
