import { gql } from 'graphql-request';

export const BankAccountFragment = gql`
  fragment BankAccountFragment on BankAccount {
    accountNumber
    accountType
    bankName
  }
`;
