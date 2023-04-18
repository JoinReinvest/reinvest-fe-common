import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Maybe, Query, TrustDraftAccount } from '../../types/graphql';
import { UseApiQueryWithParams } from './interfaces';
import { AvatarFragment } from './fragments/avatar';
import { CompanyDraftAccountDetailsFragment } from './fragments/companyDraftAccountDetails';

type Parameters = { accountId: string, config: UseQueryOptions };
type Hook = UseApiQueryWithParams<'getTrustDraftAccount', Parameters>;

const getTrustDraftAccountQuery = gql`
  ${AvatarFragment}
  ${CompanyDraftAccountDetailsFragment}
  query getTrustDraftAccount($accountId: ID) {
    getTrustDraftAccount(accountId: $accountId) {
      id
      state
      avatar {
        ...AvatarFragment
      }
      isCompleted
      details {
        ...CompanyDraftAccountDetailsFragment
      }
    }
  }
`;

export const useGetTrustDraftAccount: Hook = (getApiClient, { accountId, ...config }) =>
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
    ...config
  });
