import { gql } from 'graphql-request';

export const POIFragment = gql`
  fragment POIFragment on POI {
    name
    description
    image
  }
`;
