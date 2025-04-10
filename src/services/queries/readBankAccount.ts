import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql } from "graphql-request";
import { Query } from "../../types/graphql";
import { UseApiQueryWithParams } from './interfaces';
import { BankAccountFragment } from './fragments/bankAccount';

type Hook = UseApiQueryWithParams<'readBankAccount', { accountId: string, config?: UseQueryOptions}>;

export const readBankAccountQuery = gql`
  ${BankAccountFragment}
  query readBankAccount($accountId: ID!) {
    readBankAccount(accountId: $accountId) {
      ...BankAccountFragment
    }
  }
`;

export const useReadBankAccount: Hook = (getApiClient, { accountId, ...config }) => useQuery<Query["readBankAccount"]>({
  queryKey: ["readBankAccount", accountId],
  queryFn: async () => {
    const api = await getApiClient();

    if (!api) {
      return null;
    }

    const { readBankAccount } = await api.request<Query>(readBankAccountQuery, { accountId });

    return readBankAccount;
  },
  ...config
});
