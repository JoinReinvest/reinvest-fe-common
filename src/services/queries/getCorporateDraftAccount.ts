import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query } from '../../types/graphql';

import { UseApiQueryWithParams } from './interfaces';
import { AvatarFragment } from "./fragments/avatar";
import { CompanyDraftAccountDetailsFragment } from "./fragments/companyDraftAccountDetails";

type Parameters = { accountId: string };
type Hook = UseApiQueryWithParams<'getCorporateDraftAccount', Parameters>;

const getCorporateDraftAccountQuery = gql`
  ${AvatarFragment}
  ${CompanyDraftAccountDetailsFragment}
  query getCorporateDraftAccount($accountId: ID) {
    getCorporateDraftAccount(accountId: $accountId) {
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

export const useGetCorporateDraftAccount: Hook = (getApiClient, { accountId, config }) =>
  useQuery<Query['getCorporateDraftAccount']>({
    queryKey: ['getCorporateDraftAccount', accountId],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { getCorporateDraftAccount } = await api.request<Query>(getCorporateDraftAccountQuery, { accountId });

      return getCorporateDraftAccount;
    },
    ...config
  });
