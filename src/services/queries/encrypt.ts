import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query } from '../../types/graphql';

import { UseApiQueryWithParams } from './interfaces';

type Parameters = { config?: UseQueryOptions };
type Hook = UseApiQueryWithParams<'encrypt', Parameters>;

const encryptQuery = gql`
  query encrypt {
    encrypt
  }
`;

export const useEncrypt: Hook = (getApiClient, { ...config }) =>
  useQuery({
    queryKey: ["encrypt"],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { encrypt } = await api.request<Query>(encryptQuery);

      return encrypt;
    },
    ...config
  });

