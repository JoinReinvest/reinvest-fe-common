import { gql } from 'graphql-request';

export const NumberOfEmployeesFragment = gql`
  fragment NumberOfEmployeesFragment on NumberOfEmployees {
    range
  }
`;
