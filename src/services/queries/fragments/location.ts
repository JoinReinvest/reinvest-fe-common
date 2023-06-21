import { gql } from 'graphql-request';

export const LocationFragment = gql`
  fragment LocationFragment on Location {
    lat
    lng
  }
`;
