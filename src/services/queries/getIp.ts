import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query } from '../../types/graphql';

import { UseApiQueryWithParams } from './interfaces';

type Parameters = { config?: UseQueryOptions };
type Hook = UseApiQueryWithParams<'ip', Parameters>;

const getIpQuery = gql`
  query ip {
    ip
  }
`;

export const useGetIp: Hook = (getApiClient, { ...config }) =>
  useQuery({
    queryKey: ["ip"],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { ip } = await api.request<Query>(getIpQuery);

      return ip;
    },
    ...config
  });

