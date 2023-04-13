import { gql } from 'graphql-request';

export const EinFragment = gql`
  fragment EinFragment on EIN {
    ein
  }
`;
