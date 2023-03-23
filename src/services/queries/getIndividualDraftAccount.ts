import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query } from '../../types/graphql';

import { UseApiQueryWithParams } from './interfaces';

type Hook = UseApiQueryWithParams<'getIndividualDraftAccount', { accountId: string }>;

const getIndividualDraftAccountQuery = gql`
  query getIndividualDraftAccount($accountId: ID) {
    getIndividualDraftAccount(accountId: $accountId) {
      id
    }
  }
`;

export const useGetIndividualDraftAccount: Hook = (getApiClient, { accountId }) =>
  useQuery<Query['getIndividualDraftAccount']>({
    queryKey: ['getIndividualDraftAccount', accountId],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { getIndividualDraftAccount } = await api.request<Query>(getIndividualDraftAccountQuery, { accountId });

      return getIndividualDraftAccount;
    },
  });
