import { gql } from 'graphql-request';

export const DividendFragment = gql`
  fragment DividendFragment on Dividend {
    id
    date
    amount {
      value
      formatted
    }
    status
  }
`;
