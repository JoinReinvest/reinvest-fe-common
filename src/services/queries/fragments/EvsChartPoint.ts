import { gql } from 'graphql-request';

export const EVSChartPointFragment = gql`
  fragment EVSChartPointFragment on EVSChartPoint {
    usd
    date
  }
`;
