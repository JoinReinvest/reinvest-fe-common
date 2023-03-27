import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Maybe, Query, TrustDraftAccount } from '../../graphql';
import { UseApiQueryWithParams } from './interfaces';

type Parameters = { accountId: string };
type Hook = UseApiQueryWithParams<'getTrustDraftAccount', Parameters>;

const getTrustDraftAccountQuery = gql`
  query getTrustDraftAccount($accountId: ID) {
    getTrustDraftAccount(accountId: $accountId) {
      id
    }
  }
`;

export const useGetTrustDraftAccount: Hook = (getApiClient, { accountId }) =>
  useQuery<Maybe<TrustDraftAccount> | undefined>({
    queryKey: ['getTrustDraftAccount', accountId],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { getTrustDraftAccount } = await api.request<Query>(getTrustDraftAccountQuery, { accountId });

      return getTrustDraftAccount;
    },
  });
