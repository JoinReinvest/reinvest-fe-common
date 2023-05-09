import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql } from "graphql-request";
import { Query } from "../../types/graphql";
import { UseApiQueryWithParams } from './interfaces';
import { AvatarFragment } from './fragments/avatar';
import { EmployerFragment } from './fragments/employer';
import { NetRangeFragment } from './fragments/netRange';
import { CorporateAccountDetailsFragment } from './fragments/corporateAccountDetails';

type Hook = UseApiQueryWithParams<'getCorporateAccount', { accountId: string, config: UseQueryOptions}>;

export const getCorporateAccountQuery = gql`
  ${AvatarFragment}
  ${EmployerFragment}
  ${NetRangeFragment}
  ${CorporateAccountDetailsFragment}
  query getCorporateAccount($accountId: String) {
    getCorporateAccount(accountId: $accountId) {
      id
      avatar {
        ...AvatarFragment
      }
      positionTotal
      label
      details {
        ...CorporateAccountDetailsFragment
      }
    }
  }
`;

export const useGetCorporateAccount: Hook = (getApiClient, { accountId, ...config }) => useQuery<Query["getCorporateAccount"]>({
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
