import { useQuery } from '@tanstack/react-query';
import { gql } from "graphql-request";
import { Query, QueryGetFundsWithdrawalAgreementArgs } from "../../types/graphql";
import { UseApiQueryWithParams } from './interfaces';
import { FundsWithdrawalAgreementFragment } from './fragments/funds-withdrawal-agreement';

type Hook = UseApiQueryWithParams<'getFundsWithdrawalAgreement', QueryGetFundsWithdrawalAgreementArgs>;

export const getFundsWithdrawalAgreementQuery = gql`
  ${FundsWithdrawalAgreementFragment}

  query getFundsWithdrawalAgreement($accountId: ID!) {
    getFundsWithdrawalAgreement(accountId: $accountId) {
      ...FundsWithdrawalAgreementFragment
    }
  }
`;

export const useGetFundsWithdrawalAgreement: Hook = (getApiClient, { accountId, config }) => useQuery<Query["getFundsWithdrawalAgreement"]>({
  queryKey: ["getFundsWithdrawalAgreement", accountId],
  queryFn: async () => {
    const api = await getApiClient();

    if (!api) {
      return null;
    }

    const { getFundsWithdrawalAgreement } = await api.request<Query>(getFundsWithdrawalAgreementQuery, { accountId });

    return getFundsWithdrawalAgreement;
  },
  ...config
});
