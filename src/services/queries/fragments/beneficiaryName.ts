import { gql } from 'graphql-request';

export const BeneficiaryNameFragment = gql`
  fragment BeneficiaryNameFragment on BeneficiaryName {
    firstName
    lastName
  }
`;
