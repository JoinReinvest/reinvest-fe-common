import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query } from '../../types/graphql';
import { UseApiQueryWithParams } from './interfaces';
import { AvatarFragment } from './fragments/avatar';
import { TrustAccountDetailsFragment } from './fragments/trustAccountDetails';

type Hook = UseApiQueryWithParams<'getTrustAccount', { accountId: string }>;

export const getTrustAccountQuery = gql`
  ${AvatarFragment}
  ${TrustAccountDetailsFragment}
  query getTrustAccount($accountId: String) {
    getTrustAccount(accountId: $accountId) {
      id
      avatar {
        ...AvatarFragment
      }
      positionTotal
      label
      details {
        ...TrustAccountDetailsFragment
      }
    }
  }
`;

export const useGetTrustAccount: Hook = (getApiClient, { accountId, config }) =>
  useQuery<Query['getTrustAccount']>({
    queryKey: ['getTrustAccount', accountId],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { getTrustAccount } = await api.request<Query>(getTrustAccountQuery, { accountId });

      return getTrustAccount;
    },
    ...config,
  });
