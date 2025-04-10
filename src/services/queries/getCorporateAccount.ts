import { useQuery } from '@tanstack/react-query';
import { gql } from "graphql-request";
import { Query } from "../../types/graphql";
import { UseApiQueryWithParams } from './interfaces';
import { AvatarFragment } from './fragments/avatar';
import { CorporateAccountDetailsFragment } from './fragments/corporateAccountDetails';

type Hook = UseApiQueryWithParams<'getCorporateAccount', { accountId: string }>;

export const getCorporateAccountQuery = gql`
  ${AvatarFragment}
  ${CorporateAccountDetailsFragment}
  query getCorporateAccount($accountId: ID!) {
    getCorporateAccount(accountId: $accountId) {
      id
      avatar {
        ...AvatarFragment
      }
      label
      details {
        ...CorporateAccountDetailsFragment
      }
    }
  }
`;

export const useGetCorporateAccount: Hook = (getApiClient, { accountId, config }) => useQuery<Query["getCorporateAccount"]>({
  queryKey: ["getCorporateAccount", accountId],
  queryFn: async () => {
    const api = await getApiClient();

    if (!api) {
      return null;
    }

    const { getCorporateAccount } = await api.request<Query>(getCorporateAccountQuery, { accountId });

    return getCorporateAccount;
  },
  ...config
});
