import { gql } from 'graphql-request';

export const PersonNameTypeFragment = gql`
  fragment PersonNameTypeFragment on PersonNameType {
    firstName
    middleName
    lastName
  }
`;
