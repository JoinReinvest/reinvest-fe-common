import { useQuery } from '@tanstack/react-query';
import { gql } from "graphql-request";
import { Query } from "../../types/graphql";
import { UseApiQueryWithParams } from './interfaces';
import { AvatarFragment } from './fragments/avatar';
import { BeneficiaryDetailsFragment } from './fragments/beneficiaryDetails';

type Hook = UseApiQueryWithParams<'getBeneficiaryAccount', { accountId: string }>;

export const getBeneficiaryAccountQuery = gql`
  ${AvatarFragment}
  ${BeneficiaryDetailsFragment}
  query getBeneficiaryAccount($accountId: ID!) {
    getBeneficiaryAccount(accountId: $accountId) {
      id
      avatar {
        ...AvatarFragment
      }
      label
      details {
        ...BeneficiaryDetailsFragment
      }
    }
  }
`;

export const useGetBeneficiaryAccount: Hook = (getApiClient, { accountId, config }) => useQuery<Query["getBeneficiaryAccount"]>({
  queryKey: ["getBeneficiaryAccount", accountId],
  queryFn: async () => {
    const api = await getApiClient();

    if (!api) {
      return null;
    }

    const { getBeneficiaryAccount } = await api.request<Query>(getBeneficiaryAccountQuery, { accountId });

    return getBeneficiaryAccount;
  },
  cacheTime: 0,
  ...config
});
