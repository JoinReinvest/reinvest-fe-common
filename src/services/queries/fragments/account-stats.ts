import { gql } from 'graphql-request';

export const AccountStatsFragment = gql`
  fragment AccountStatsFragment on AccountStats {
    accountValue
    EVS
    costOfSharesOwned
    quantityOfShares
    currentNAVPerShare
    netReturns
    dividends
    appreciation
    advisorFees
  }
`;
