import { gql } from 'graphql-request';

export const AnnualRevenueFragment = gql`
  fragment AnnualRevenueFragment on AnnualRevenue {
    range
  }
`;
