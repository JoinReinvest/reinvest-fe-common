import { gql } from 'graphql-request';

export const CompanyNameFragment = gql`
  fragment CompanyNameFragment on CompanyName {
    name
  }
`;
