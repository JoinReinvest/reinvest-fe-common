import { gql } from 'graphql-request';

export const BankAccountLinkFragment = gql`
  fragment BankAccountLinkFragment on BankAccountLink {
    link
  }
`;
