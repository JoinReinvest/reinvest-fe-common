import { gql } from 'graphql-request';

export const UsdFragment = gql`
  fragment UsdFragment on USD {
    value
    formatted
  }
`;
