import { gql } from 'graphql-request';

export const PropertyAddressFragment = gql`
  fragment PropertyAddressFragment on PropertyAddress {
    addressLine
    city
    zip
  }
`;
