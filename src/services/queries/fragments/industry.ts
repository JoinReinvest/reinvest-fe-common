import { gql } from 'graphql-request';

export const IndustryFragment = gql`
  fragment IndustryFragment on Industry {
    value
  }
`;
