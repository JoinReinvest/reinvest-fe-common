import { gql } from 'graphql-request';

export const CompanyTypeFragment = gql`
  fragment CompanyTypeFragment on CompanyType {
    name
  }
`;
