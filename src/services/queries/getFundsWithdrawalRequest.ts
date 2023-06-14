import { useQuery } from '@tanstack/react-query';
import { gql } from "graphql-request";
import { Query } from "../../types/graphql";
import { UseApiQueryWithParams } from './interfaces';
import { FundsWithdrawalRequestFragment } from './fragments/fundsWithdrawalRequest';

type Parameters = { accountId: string }
type Hook = UseApiQueryWithParams<'getFundsWithdrawalRequest', Parameters>;

export const getFundsWithdrawalRequestQuery = gql`
  ${FundsWithdrawalRequestFragment}

  query getFundsWithdrawalRequest($accountId: ID!) {
    getFundsWithdrawalRequest(accountId: $accountId) {
      ...FundsWithdrawalRequestFragment
    }
  }
`;

export const useGetFundsWithdrawalRequest: Hook = (getApiClient, { accountId, config }) => useQuery<Query["getFundsWithdrawalRequest"]>({
  queryKey: ["getFundsWithdrawalRequest", accountId],
  queryFn: async () => {
    const api = await getApiClient();

    if (!api) {
      return null;
    }

    const { getFundsWithdrawalRequest } = await api.request<Query>(getFundsWithdrawalRequestQuery, { accountId });

    return getFundsWithdrawalRequest;
  },
  ...config
});
