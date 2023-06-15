import { gql } from "graphql-request";

export const InvestmentOverviewFragment = gql`
  fragment InvestmentOverviewFragment on InvestmentOverview {
    id,
  	tradeId
    createdAt
    amount {
      value
      formatted
    }
  }
`;
